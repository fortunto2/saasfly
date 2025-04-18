---
title: Обновление framer-motion и исправление проблем совместимости
description: Решение проблемы конфликта framer-motion с React 18.3 и восстановление анимаций на лендинге
type: bug
priority: medium
status: backlog
assignee: Не назначено
created_date: 2025-04-18
---

# Обновление framer-motion и исправление проблем совместимости

## Описание проблемы

В ходе работы над обновлением лендинга для SuperDuperAI была обнаружена несовместимость библиотеки framer-motion с текущей версией React 18.3, которая вызывает следующую ошибку в консоли:

```
TypeError: (0 , react__WEBPACK_IMPORTED_MODULE_0__.createContext) is not a function
```

Для временного решения мы удалили компоненты framer-motion и заменили их обычными div, однако это существенно снизило визуальную привлекательность лендинга, убрав все анимации при скролле и взаимодействии пользователя с элементами.

## Задача

1. Обновить framer-motion до последней версии, совместимой с React 18.3
2. Восстановить все анимации на лендинге в следующих компонентах:
   - FeatureHighlights (анимация появления карточек)
   - Testimonials (анимация слайдера отзывов)
   - VideoScroll (анимация скролла видео)
3. Обеспечить корректную работу во всех современных браузерах без ошибок в консоли

## Технические детали

### Текущие версии:
- React: 18.3.1
- framer-motion: 11.0.3
- Next.js: 14.2.5

### Возможные решения:
1. Обновить framer-motion до последней стабильной версии
2. Заменить framer-motion на альтернативную библиотеку анимаций (например, react-spring)
3. Использовать встроенные в Next.js решения для анимаций

## План реализации

1. Исследовать актуальные версии framer-motion и их совместимость с React 18.3
2. Установить подходящую версию и протестировать базовые анимации
3. Восстановить анимации в компоненте FeatureHighlights
4. Восстановить анимации в компоненте Testimonials
5. Восстановить анимации в компоненте VideoScroll
6. Провести тестирование во всех основных браузерах
7. Оптимизировать производительность анимаций

## Критерии приемки

- Отсутствие ошибок в консоли браузера
- Корректная работа всех анимаций при скролле и взаимодействии
- Плавность анимаций без просадки FPS
- Совместимость со всеми основными браузерами
- Поддержка темной и светлой темы

## Связанные задачи

- [convert-landing-to-ai-video](/docs/tasks/done/convert-landing-to-ai-video.md) - Исходная задача, где была обнаружена проблема

## Дополнительная информация

Ошибка в консоли:
```
TypeError: (0 , react__WEBPACK_IMPORTED_MODULE_0__.createContext) is not a function
    at eval (webpack-internal:///(rsc)/../../node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs:11:81)
    at (rsc)/../../node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs (file:///Users/rustam/projects/SuperSaas/apps/nextjs/.next/server/vendor-chunks/framer-motion.js:2770:1)
    at __webpack_require__ (file:///Users/rustam/projects/SuperSaas/apps/nextjs/.next/server/webpack-runti... (truncated)
```

Это указывает на проблему с созданием контекста React в библиотеке framer-motion, что скорее всего связано с изменениями в API React 18.3. 