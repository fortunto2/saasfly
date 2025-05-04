# Маркетинговые подлендинги: Руководство

## Введение

SuperSaas поддерживает создание нескольких таргетированных маркетинговых лендингов (подлендингов) для различных сегментов аудитории или продуктовых фокусов. Это руководство объясняет, как создавать и управлять такими лендингами с помощью MDX.

## Структура лендингов

Все подлендинги хранятся в директории `apps/nextjs/src/content/landings/` и доступны по URL `/landings/[slug]`, где `[slug]` - это значение поля `slug` в метаданных MDX-файла.

### Создание нового лендинга

1. Создайте новый MDX-файл в директории `apps/nextjs/src/content/landings/`
2. Добавьте необходимые метаданные в начале файла
3. Используйте готовые компоненты для создания секций лендинга

### Пример метаданных

```mdx
---
title: SuperDuperAI for Musicians
description: Create stunning music videos and visual content with AI - no budget needed.
slug: music
published: true
metaTitle: "SuperDuperAI for Musicians | Create AI Music Videos"
metaDescription: "Transform your music into stunning visuals. AI-powered video creation tailored for musicians, bands and artists."
---
```

## Доступные компоненты

### Hero секция

```mdx
<Hero 
  title="Заголовок секции"
  subtitle="Подзаголовок секции"
  ctaText="Текст основной кнопки"
  ctaLink="/signup"
  secondaryCtaText="Текст дополнительной кнопки"
  secondaryCtaLink="#section"
>
  <div className="mt-6">
    <!-- Дополнительный контент -->
  </div>
</Hero>
```

### Video Demo секция

```mdx
<VideoDemo dict={{
  title: "Заголовок видео",
  description: "Описание видео-демо",
  video_url: "URL видео"
}} />
```

### How It Works секция

```mdx
<HowItWorks dict={{
  title: "Заголовок секции",
  description: "Описание секции"
}} steps={[
  {
    title: "Шаг 1",
    description: "Описание шага 1",
    icon: "Lightbulb" // Доступные иконки: Lightbulb, Cpu, Settings, Music, Video, Edit, Film
  },
  {
    title: "Шаг 2",
    description: "Описание шага 2",
    icon: "Cpu"
  },
  {
    title: "Шаг 3",
    description: "Описание шага 3",
    icon: "Settings"
  }
]} />
```

### Features секция

```mdx
<Features 
  title="Заголовок возможностей"
  data={[
    {
      title: "Возможность 1",
      description: "Описание возможности 1",
      icon: <Icons.Icon className="h-5 w-5" />,
      link: "/features/feature1"
    },
    {
      title: "Возможность 2",
      description: "Описание возможности 2",
      icon: <Icons.Icon2 className="h-5 w-5" />,
      link: "/features/feature2"
    }
  ]}
/>
```

### Use Cases секция

```mdx
<UseCases dict={{
  title: "Заголовок секции",
  description: "Описание секции"
}} cases={[
  {
    title: "Сценарий 1",
    description: "Описание сценария 1",
    icon: "Icon1"
  },
  {
    title: "Сценарий 2",
    description: "Описание сценария 2",
    icon: "Icon2"
  }
]} />
```

### Testimonials секция

```mdx
<Testimonials dict={{
  title: "Что говорят клиенты",
  desc: "Отзывы пользователей",
  items: [
    {
      quote: "Текст отзыва 1",
      author: "Имя автора 1",
      role: "Должность 1",
      avatar: "/images/avatars/avatar-1.png"
    },
    {
      quote: "Текст отзыва 2",
      author: "Имя автора 2",
      role: "Должность 2",
      avatar: "/images/avatars/avatar-2.png"
    }
  ]
}} />
```

### CTA секция

```mdx
<CtaSection 
  title="Призыв к действию"
  buttonText="Текст кнопки"
  buttonLink="/signup"
/>
```

## SEO-оптимизация

Для каждого лендинга автоматически генерируются метаданные на основе полей:

- `title` - основной заголовок страницы
- `description` - описание страницы
- `metaTitle` - альтернативный заголовок для SEO (если указан)
- `metaDescription` - альтернативное описание для SEO (если указано)
- `ogImage` - изображение для соцсетей

## Локализация

Все лендинги поддерживают локализацию через параметр `[lang]` в URL. Словари для локализации загружаются из соответствующих файлов локализации и передаются в MDX-компоненты.

## Советы по созданию эффективных лендингов

1. **Сфокусируйтесь на конкретном сегменте аудитории**
   - Используйте язык и примеры, которые резонируют с целевой аудиторией
   - Показывайте кейсы и отзывы от схожей аудитории

2. **Сохраняйте согласованность бренда**
   - Используйте фирменные цвета и стилистику
   - Сохраняйте общую структуру и тон голоса

3. **Оптимизируйте для конверсии**
   - Размещайте CTA-кнопки в ключевых точках
   - Предлагайте четкую ценность для посетителя

4. **Тестируйте и улучшайте**
   - Отслеживайте производительность разных лендингов
   - Экспериментируйте с разными заголовками и структурой 