```
# Initialize the project
npm init -y
git init
touch .gitignore
touch README.md

# React
mkdir public src
touch public/index.html
npm install --save react react-dom

# Babel and Webpack
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
touch .babelrc
npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
gs
touch webpack.config.js

# TypeScript
npm install --save-dev typescript ts-loader
npm install --save-dev @types/react @types/react-dom
npx tsc --init

# Formatter and Linter
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-loader
npx eslint --init
touch .prettierrc

# Create the project files
touch src/index.tsx
touch src/App.tsx
touch src/App.css
```