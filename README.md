# Tasklogger
The code is a task logger application built
using React and ES6. The application can
create two-column tasks with subtasks and
percentage competency. The task type can
be either a sprint or backlog. It includes
various features like adding new tasks,
updating task status (pending, ongoing,
completed), deleting tasks, and resetting the
application. The application uses local
storage to store and retrieve data.

## Technology
- HTML
- CSS
- JavaScript (ES6)
- Bootstrap
- ReactJS

## Demo
https://drive.google.com/file/d/1sSjynxM18Xk3Wb57XruOFaNytuOldwIl/view?usp=sharing

# Setup

## Config in vite.config.js

```js
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
```

## Components

```cmd
rafce
```

## Installation

### Using Vite

```cmd
npm create vite@latest project_name 

```
```cmd
cd project_name
npm install
npm install bootstrap@latest
npm i react-router-dom
npm run dev
```
```
import '@fortawesome/fontawesome-free/css/all.css';
```

```cmd
npm install --save @fortawesome/fontawesome-free
npm i @fortawesome/react-fontawesome
npm i @fortawesome/free-solid-svg-icons
```