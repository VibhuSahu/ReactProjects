# ReactJs Using Parcel

## INDEX

* [Details]()
* [Manual Installation](#manualinstallation)
  * [Install base porject](#simple-parcel-app)
  * [Add TypeScript](#add-typescript)
  * [Add Tailwind](#add-tailwindcss-in-your-reactjs)
  * [Add Bootstrap](#add-bootstrap)
* [Download file]()

## Details

### ✅ **Advantages of Parcel for React**

1. **Zero Config**: Just install and go—great for small and medium projects.
2. **Automatic Asset Handling**: No need to set up loaders for images, CSS, etc.
3. **Built-in TypeScript & JSX Support**: No need for external plugins.
4. **Fast Setup**: Very easy to start prototyping.
5. **Hot Module Reloading**: Works out of the box.
6. **Tree-shaking & Code Splitting**: Built-in optimizations for production.
7. **Useful for Multi-entry apps**: Parcel handles multiple HTML/JS entry points well.

### ⚠️ **Disappointments or Limitations with Parcel**

1. ❌ **Slower than Vite in Development**: Vite uses native ESM and is noticeably faster.
2. ❌ **Plugin Ecosystem**: Smaller and less active than Vite or Webpack.
3. ❌ **Less Control**: Difficult to deeply customize without ejecting into lower-level configs.
4. ❌ **Large Projects**: May suffer performance issues or slower rebuilds than Vite.
5. ❌ **Community & Resources**: Smaller than CRA or Vite, fewer boilerplates/tutorials.

---

## Manualinstallation

### Simple Parcel APP

---

##### 1. Create folder

```bash
mkdir appname
cd ./appname
```

##### 2. Install Dependencies

```bash
npm init -y
npm install
npm install react react-dom
npm install --save-dev parcel babel-preset-react
```

##### 3. Folder Structure

```pgsql
github-stats-app/
├── src/
│   ├── index.css
│   ├── index.jsx
│   └── App.jsx
├── index.html
├── .gitignore
├── package.json
└── README.md
```

create this folder structure.

##### 4. Changes in Folder

Remove the `main` and `test` from `./package.json` file.

```Javascript
{
  "name": "passwordgenratorparcel",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",   // ❌ remove this line
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"    // ❌ remove this line
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}

```

Add this line in your `./package.json` file.

```javascript
  "scripts": {
    "dev": "parcel serve ./index.html",
    "start": "parcel ./index.html",
    "build": "parcel build ./index.html"
  },
```

Paste this in `./.gitignore` file.

```bash
# Node modules
node_modules/

# Parcel cache
.parcel-cache/

# Build output
dist/

# System files
.DS_Store
Thumbs.db

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE / Editor settings
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln

# Optional lock files (depending on your setup)
package-lock.json
```

##### 5. Source Code

Paste Code in the `` file.

Paste Code in the `./index.html` file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Parcel React App</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="./src/index.tsx"></script>

</body>
</html>
```

Paste Code in the ./index.tsx file.

```javascript
import React from "react";
import ReactDOM from "react-dom/client"; 
import App from "./App.jsx";
import "./index.css";

console.log("✅ React app starting...");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />

    </React.StrictMode>
);
```

Paste Code in the ./src/App.tsx file.

```javascript
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-600 text-white">
      <h1 className="text-4xl font-bold">🎉 Tailwind is working!</h1>
    </div>
  );
};

export default App;
```

##### 6. Run the code

this is running for development.

```bash
npm run dev
```

### Add TypeScript

---
> **  **

##### 1. Install 
This is for Installing TypeScript with Parcel Reactjs APP
```bash
npm install --save-dev typescript @types/react @types/react-dom
```
##### 2. Create Config file

You have to create Config file for setup

* create `tsconfig.json` file

##### 3. Folder Structure
 
 Creating the folder structure

```pgsql
your-app/
├── src/
│   ├── index.tsx
│   ├── App.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── .gitignore
```

##### 4. Changes in Folder

Remove the `main` and `test` from `./package.json` file.

```Javascript
{
  "name": "passwordgenratorparcel",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",   // ❌ remove this line
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"    // ❌ remove this line
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}

```

Add this line in your `./package.json` file.

```javascript
  "scripts": {
    "dev": "parcel serve ./index.html",
    "start": "parcel ./index.html",
    "build": "parcel build ./index.html"
  },
```

Paste this in `./.gitignore` file.

```bash
# Node modules
node_modules/

# Parcel cache
.parcel-cache/

# Build output
dist/

# System files
.DS_Store
Thumbs.db

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE / Editor settings
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln

# Optional lock files (depending on your setup)
package-lock.json
```


##### 5. Source Code

Paste All code in the files as it is.




### Add Tailwindcss

---

> **This is used for inline CSS**

##### 1. Install

This is for installing Tailwindcss library.

```bash
npm install -D tailwindcss postcss autoprefixer
```

##### 2. Create Configure files

Create the file

* `tailwind.config.js`
* `.postcssrc.json`

##### 3. Source Code

Add code in `./tailwind.config.js` file.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add code in `.postcssrc.json` file

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

Add tailwind code in `./src/index.css` file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Add Bootstrap
---

> **This is used for inline CSS**


## Download File
* Download the Basic Parcel Reactjs APP [Link](./simpleAPP).
* Download the Parcel with Typescript APP [Link](./typescriptAPP/).
* Download the Parcel with Tailwind APP [Link](./tailwindAPP/).
* Download the Parcel with Bootstrap APP [Link](./BootstrapAPP/).