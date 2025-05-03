# Известные баги и проблемы

## Ошибка "Maximum update depth exceeded" в компоненте чата
- **Статус**: Исправлено
- **Дата обнаружения**: 2024-06-29
- **Дата исправления**: 2024-06-29
- **Влияние**: Высокое (Приложение чата полностью не работало)
- **Симптомы**: Ошибка "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
- **Решение**: Добавлена мемоизация для предотвращения бесконечного цикла обновлений в компонентах Thread и ThreadList. Использован useMemo для кэширования часто-используемых значений, чтобы избежать ненужных ререндеров и обновлений состояния.
- **Связанные задачи**: docs/tasks/in-progress/fix-chat-infinite-loop.md 