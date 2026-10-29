# Сайт-визитка @samaganov (ссылка в профиле Instagram)

Одна статичная страница: `index.html` + `config.js` + `assets/`. Без сборки.

## Что где менять

Всё — в `config.js`:

| Что | Где |
|---|---|
| Номер WhatsApp | `whatsapp.main` |
| Номер менеджера по визам | `whatsapp.visaManager` (пока пусто → кнопка «Визы» ведёт на `main`) |
| Имя, подпись, фото | `profile` |
| Цифры (4 карточки) | `proofs` |
| Тексты кнопок и сообщений WhatsApp | `buttons.<кнопка>.title / subtitle / message` |
| Ссылка на Telegram | `buttons.channel.url` |
| Кейсы | `cases` (поля `task`, `done`, `result`) |
| Включить чек-лист | `features.checklist: true` |
| Скрыть кейсы | `features.cases: false` |
| GA4 / Meta Pixel | `analytics.ga4Id`, `analytics.metaPixelId` (пусто = скрипты не грузятся) |

Заголовок, описание и превью для соцсетей (`<title>`, `og:*`, `twitter:*`) лежат в `<head>` файла `index.html` — соцсети не выполняют JS, поэтому они не в конфиге.

## Фото

1. Квадратное фото, обрезать до 320×320 px.
2. Перевести в WebP: https://squoosh.app (качество 80) → сохранить как `assets/photo.webp`.
3. В `config.js`: `photo: "assets/photo.webp"`.
4. Превью для Instagram/Telegram: сделайте картинку 1200×630 с фото и подписью и замените `assets/og.jpg`.

## Источник лида в WhatsApp

В конец каждого сообщения добавляется код `[источник-контент]` из UTM-меток. Ссылка для шапки Instagram:

```
https://<ваш-домен>/?utm_source=ig&utm_content=bio
```

→ сообщение придёт с `[ig-bio]`. Для сторис: `utm_content=stories` → `[ig-stories]`. Без меток — `[direct]`. Метки запоминаются в браузере посетителя.

Каждый клик по кнопке отправляет событие `cta_click` (параметры `button`, `utm_source`, `utm_content`) в GA4 и `CtaClick` + `Contact` в Meta Pixel.

## Деплой на Vercel (первый раз)

1. Зарегистрируйтесь на https://vercel.com (через GitHub).
2. **Add New → Project → Import** репозиторий `samaganovm/design`.
3. Framework Preset: **Other**, Build Command — пусто, Output Directory — пусто. **Deploy**.
4. Project name: `samaganov` → адрес будет `https://samaganov.vercel.app` (если имя занято — другой адрес; тогда замените `samaganov.vercel.app` в `<head>` `index.html`).
5. Вставьте ссылку с UTM (см. выше) в профиль Instagram.

Через CLI:

```bash
npm i -g vercel
```

```bash
vercel login
```

```bash
vercel --prod
```

## Обновить сайт

Измените `config.js` на GitHub (кнопка ✏️ прямо в браузере) → Commit. Vercel сам выложит новую версию за ~30 секунд (если проект импортирован из GitHub). Через CLI — снова `vercel --prod`.

## Свой домен

Vercel → проект → **Settings → Domains → Add** → введите домен → пропишите у регистратора DNS-записи, которые покажет Vercel (обычно `A 76.76.21.21` для корня или `CNAME cname.vercel-dns.com` для `www`). Затем замените домен в `<head>` `index.html`.
