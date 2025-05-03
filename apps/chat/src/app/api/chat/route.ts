import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const runtime = "edge";

// Максимальное время выполнения запроса - 30 секунд
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    // Извлекаем сообщения из тела запроса
    const { messages } = await req.json();

    // Проверка наличия API ключа
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'sk-dummy-key-for-development') {
      console.warn("OpenAI API key is not set or is using the dummy key");
      return new Response(
        JSON.stringify({
          error: "OpenAI API key not configured. Please set the OPENAI_API_KEY environment variable.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    
    // Используем функцию streamText для получения потока текста от модели
    const result = streamText({
      model: openai('gpt-3.5-turbo'),
      messages,
    });

    // Возвращаем поток как ответ
    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error in chat API:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to process chat request",
        details: error instanceof Error ? error.message : String(error) 
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
} 