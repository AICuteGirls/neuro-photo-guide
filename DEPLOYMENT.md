# Инструкция по деплою на Vercel

## Подготовка проекта

Проект готов к деплою на Vercel. Все необходимые файлы и конфигурация уже настроены.

## Шаги для деплоя через Vercel

### 1. Загрузка в GitHub

1. Создайте новый репозиторий на GitHub
2. Скачайте все файлы проекта из Manus
3. Загрузите файлы в ваш GitHub репозиторий:

```bash
git init
git add .
git commit -m "Initial commit: AI Photography Guide"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Деплой на Vercel

1. Перейдите на [vercel.com](https://vercel.com)
2. Войдите через GitHub аккаунт
3. Нажмите "Add New Project"
4. Выберите ваш репозиторий с проектом
5. Vercel автоматически определит настройки:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `pnpm run build`
   - **Output Directory**: `client/dist`

6. Нажмите "Deploy"

### 3. Настройки проекта (опционально)

После деплоя вы можете настроить:

- **Custom Domain**: Подключить свой домен
- **Environment Variables**: Добавить переменные окружения (если потребуется)
- **Analytics**: Включить аналитику Vercel

## Структура проекта

```
neuro-photo-guide/
├── client/               # Frontend приложение
│   ├── public/          # Статические файлы (изображения)
│   ├── src/             # Исходный код
│   │   ├── pages/       # Страницы
│   │   ├── components/  # Компоненты
│   │   └── index.css    # Стили
│   └── index.html       # HTML шаблон
├── package.json         # Зависимости проекта
└── vite.config.ts       # Конфигурация Vite
```

## Технологии

- **React 19** - UI библиотека
- **TypeScript** - Типизация
- **Tailwind CSS 4** - Стилизация
- **Vite** - Сборщик
- **shadcn/ui** - UI компоненты

## Особенности

- ✅ Адаптивный дизайн (оптимизирован для мобильных устройств)
- ✅ Плавные анимации при скролле
- ✅ Премиальная тёмная тема
- ✅ Высококачественные AI-сгенерированные изображения
- ✅ Оптимизированная производительность
- ✅ SEO-friendly структура

## Поддержка

Если возникнут вопросы по деплою, обратитесь к документации:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)

## Лицензия

Проект создан для образовательных целей.
