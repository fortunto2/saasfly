# SuperSaas Chat

Simple chat application built with Next.js 14, Tailwind CSS, and OpenAI API.

## Features

- Real-time chat with OpenAI GPT models
- Thread management for multiple conversations
- Responsive design for both desktop and mobile
- Authentication via SuperSaas auth system

## Getting Started

### Prerequisites

- Node.js 18 or later
- Bun package manager
- OpenAI API key (add to .env.local)

### Setup

1. Install dependencies:
```bash
bun install
```

2. Add your OpenAI API key to `.env.local`:
```
OPENAI_API_KEY=your-api-key-here
```

3. Start the development server:
```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Architecture

- `/app` - Next.js app router
- `/components` - React components
- `/api` - API routes for chat functionality

## Technologies

- Next.js 14
- Tailwind CSS
- assistant-ui (UI components for AI chat)
- OpenAI API
- Turborepo (monorepo management) 