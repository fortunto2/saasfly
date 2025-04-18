# Канбан-система управления задачами SuperLanding

## Структура

Задачи организованы в виде канбан-доски с тремя колонками (папками):

- `backlog/` - задачи, ожидающие выполнения
- `in-progress/` - задачи, находящиеся в процессе выполнения
- `done/` - завершенные задачи

Каждая задача хранится в отдельном markdown-файле и содержит полное описание, технические требования и критерии готовности.

## Принципы вайб-разработки

1. **Цельные задачи** - не дробим задачи на мелкие части, каждая задача должна представлять значимый функциональный блок
2. **Детальное планирование** - всегда начинаем с максимально подробного плана действий в рамках задачи
3. **Прямой переход к реализации** - после описания задачи сразу приступаем к реализации
4. **Минимальная бюрократия** - не ведем ежедневных логов, сосредоточены на результате

## Процесс работы с задачами

1. **Создание новой задачи:**
   - Создайте файл в папке `backlog/`
   - Используйте формат имени файла: `task-name.md` (в kebab-case)
   - Следуйте шаблону задачи (см. ниже)
   - Обязательно создайте подробный план реализации

2. **Взятие задачи в работу:**
   - Переместите файл из `backlog/` в `in-progress/`
   - Обновите статус в файле задачи
   - Убедитесь, что план реализации максимально подробный

3. **Завершение задачи:**
   - Переместите файл из `in-progress/` в `done/`
   - Обновите статус в файле задачи
   - Обновите `../project_status.md`
   - Если задача исправляла ошибку, обновите `./bugs.md`

## Шаблон задачи

```markdown
# Задача: Название задачи

**Тип:** component|bug|feature|refactoring|docs
**Приоритет:** low|medium|high|critical
**Статус:** backlog|in-progress|done
**Дата создания:** ГГГГ-ММ-ДД
**Дата начала:** ГГГГ-ММ-ДД
**Дата завершения:** ГГГГ-ММ-ДД

## Описание
Краткое описание задачи и её цели

## Технические требования
- Требование 1
- Требование 2

## План реализации
1. **Этап 1: Подготовка**
   - Подзадача 1.1
   - Подзадача 1.2
   
2. **Этап 2: Основная реализация**
   - Подзадача 2.1
   - Подзадача 2.2
   
3. **Этап 3: Тестирование и доработка**
   - Подзадача 3.1
   - Подзадача 3.2

## Критерии готовности
- [ ] Критерий 1
- [ ] Критерий 2

## Связанные задачи
- [Задача 1](./related-task.md)
- [Ссылка на баг](../bugs.md#bug-id)

## Примечания
Дополнительная информация, если необходима
```

## Теги для типов задач

- `component` - создание нового компонента
- `bug` - исправление ошибки
- `feature` - новая функциональность
- `refactoring` - улучшение существующего кода
- `docs` - документация

## Приоритеты

- `low` - низкий приоритет, может быть выполнено позже
- `medium` - средний приоритет, должно быть выполнено в обозримом будущем
- `high` - высокий приоритет, требует скорого выполнения
- `critical` - критический приоритет, блокирует другие задачи 