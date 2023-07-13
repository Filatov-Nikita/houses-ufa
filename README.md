# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Для того чтобы слить с пулл реквесте только нужный коммит

https://laravel.ru/posts/351

Итак, у меня был pull request с новым компонентом log. Я перешёл к pull request в GitHub и забрал ветку (используя командную строку, но мог бы забрать и через GitHub UI).
Затем я выполнил в командной строке: git checkout master. Зашёл в GitHub UI, нашёл нужный мне коммит и скопировал его хэш с помощью маленькой иконки «копировать» рядом с ним в списке коммитов. Далее я выполнил:

git cherry-pick это-динный-хэш-скопированный-из-github
После я выложил ветку на GitHub с помощью git push origin master. Готово! И наконец закрыл pull request вручную, указав ссылку на коммит.
