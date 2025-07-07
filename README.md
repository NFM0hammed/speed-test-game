
# Speed Test Game

A typing speed test game built with TypeScript, Pug.js, and Sass.

## Getting Started

### 1. Initialize the project

```bash
npm init -y
```

### 2. Install development tools

```bash
npm install -D pug-cli sass typescript concurrently normalize.css
```

### 3. Create tsconfig.json

```bash
npx tsc --init
```

Then update `tsconfig.json`:

```json
{
  "rootDir": "./src/scripts",
  "outDir": "./dist/scripts"
}
```

### 4. Add watch script to package.json

Add this inside the `"scripts"` section:

```json
"watch": "concurrently \"pug src/pug/views --out dist --watch -P --basedir src/pug\" \"sass --watch src/styles:dist/styles --load-path=src/styles\" \"tsc --watch\""
```

### 5. Start watching files

```bash
npm run watch
```

---

## Preview

![Preview](https://github.com/user-attachments/assets/d0a5849d-a7b4-4ddd-81ff-17c744380c6f)
