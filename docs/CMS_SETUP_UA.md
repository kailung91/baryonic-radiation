# Налаштування Strapi CMS для IAT Digital Platform

Цей документ описує процес налаштування та інтеграції Strapi Headless CMS з нашою платформою.

## 1. Встановлення Strapi

Ми рекомендуємо використовувати Strapi v4 або v5.

```bash
npx create-strapi-app@latest iat-cms --quickstart
```

Після встановлення, запустіть сервер:
```bash
cd iat-cms
npm run develop
```
Адмін-панель буде доступна за адресою: `http://localhost:1337/admin`.

## 2. Створення Content Types

Необхідно створити наступні колекції (Collection Types) згідно зі схемами в папці `cms/schemas/`:

### Product (Товари)
*   **Display Name**: Product
*   **API ID**: product
*   **Fields**:
    *   `title` (Text, Short) - Назва
    *   `slug` (UID, attached to title) - URL ідентифікатор
    *   `category` (Enumeration: atlas, map, app, education) - Категорія
    *   `description` (Text, Long) - Опис
    *   `price` (Text, Short) - Ціна (напр. "150 UAH" або "Free")
    *   `features` (Component, Repeatable) - Список особливостей
        *   Створіть компонент `shared.feature` з полем `text` (Text, Short)
    *   `image` (Media, Single image) - Зображення
    *   `link` (Text, Short) - Зовнішнє посилання (опціонально)
    *   `isNew` (Boolean) - Позначка "Новинка"

### Team Member (Команда)
*   **Display Name**: Team Member
*   **API ID**: team-member
*   **Fields**:
    *   `name` (Text, Short) - Ім'я
    *   `position` (Text, Short) - Посада
    *   `bio` (Text, Long) - Біографія
    *   `photo` (Media, Single image) - Фото
    *   `socialLinks` (Component, Repeatable)
        *   Створіть компонент `shared.social-link` з полями `platform` (Text) та `url` (Text)

### Blog Post (Новини)
*   **Display Name**: Blog Post
*   **API ID**: blog-post
*   **Fields**:
    *   `title` (Text, Short) - Заголовок
    *   `slug` (UID)
    *   `content` (Rich Text) - Текст статті
    *   `coverImage` (Media)
    *   `publishedAt` (Datetime)
    *   `author` (Relation) - One-to-One з Team Member

> **Важливо**: Увімкніть локалізацію (Internationalization) для текстових полів, якщо планується багатомовність.

## 3. Налаштування API Token

1.  В адмін-панелі перейдіть в **Settings** -> **API Tokens**.
2.  Створіть новий токен (напр. "NextJS Frontend").
3.  Тип токена: **Full Access** (або Custom з правами `find` та `findOne` для всіх колекцій).
4.  Скопіюйте токен.

## 4. Налаштування Frontend

У файлі `.env.local` додайте:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=ваш_токен_тут
USE_MOCK_CMS=false
```

Якщо `USE_MOCK_CMS=true`, сайт буде використовувати тестові дані з файлу `src/lib/data.ts`.

## 5. Міграція Даних

Ми підготували скрипт для перенесення існуючих товарів у CMS.

1.  Переконайтеся, що Strapi запущено.
2.  Переконайтеся, що змінні оточення налаштовані.
3.  Запустіть скрипт:

```bash
npx ts-node scripts/migrate-to-strapi.ts
```

Скрипт автоматично створить записи для всіх товарів з каталогу.

## 6. Ролі та Доступи

Для контент-менеджерів рекомендуємо створити роль **Editor**:
*   Доступ до Content Manager.
*   Заборона доступу до Settings та Marketplace.
