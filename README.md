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
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react babel-plugin-module-resolver
touch .babelrc
npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
gs
touch webpack.config.js

# TypeScript
npm install --save-dev typescript ts-loader
npm install --save-dev @types/react @types/react-dom
npm install --save-dev typesync
npx tsc --init

# Formatter and Linter
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-loader
npx eslint --init
touch .prettierrc

# Create the project files
touch src/index.tsx
touch src/App.tsx
touch src/App.css
mkdir -p src/core/components/{atoms,molecules,organisms}
mkdir -p src/app/pages

# Material-UI
npm install @material-ui/core @material-ui/icons @material-ui/pickers
npm install -s @date-io/luxon@1.x luxon

# React Router v6
npm install history@next react-router@next react-router-dom@next

# Libraries
npm install --save formik yup luxon styled-components react-lottie
npm install --save-dev husky lint-staged concurrently

# Environment
touch .vscode/settings.json
mkdir -p .github/workflows
touch .github/workflows/aws.yml

# PWA
npm install --save-dev workbox-sw workbox-webpack-plugin
```

Create a FCM
```
curl -X POST -H "Authorization: key=FIREBASE_SERVER_KEY" -H "Content-Type: application/json" -d '{
  "notification": {
    "title": "Notification Title",
    "body": "Notification Description",
    "icon": "firebase-logo.png",
  },
  "to": "FIREBASE_MESSAGING_TOKEN"
}' https://fcm.googleapis.com/fcm/send
```