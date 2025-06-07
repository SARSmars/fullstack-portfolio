# IMDB Project Setup: Next.js & Tailwind CSS

## 1. Create a New Next.js Project

```bash
npx create-next-app@latest imdb-clone
cd imdb-clone
```

## 2. Install Tailwind CSS
 
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 3. Configure Tailwind

- In `tailwind.config.js`, update the `content` array:

```js
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

## 4. Add Tailwind to CSS

- Replace the contents of `styles/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 5. Run the Development Server

```bash
npm run dev
```

Your Next.js + Tailwind IMDB project is now set up!