

# E-commerce Project App : React JS - TypeScript - Redux Toolkit

This project is a simple e-commerce platform built with a JSON-server for the backend and React with TypeScript, Bootstrap, and Redux Toolkit for the frontend.

## Project Structure

### Backend:

Uses json-server to serve a fake REST API with db.json for authentication and storing product data.

### Frontend:

Built with React and TypeScript for managing the UI.
Bootstrap is used for styling and layout.
Redux Toolkit is implemented for global state management.

### Features

- Backend: JSON-server is used to simulate a RESTful API.
User authentication and product data are stored in db.json.

- Frontend: Built using React with TypeScript for type safety.
React Bootstrap for responsive design.

- Redux Toolkit for state management, including persisting user data.

- Form handling is done using react-hook-form with validation from zod.

### How to Run

- Backend: Navigate to the backend folder.
Run the JSON-server with the command:
``` npm start ```

The server will run on http://localhost:3000.

- Frontend: Navigate to the front folder.
Install dependencies using:
``` npm install ```

- Start the frontend application:
``` npm run dev ```

* The frontend will be available at http://localhost:5173.

#### Dependencies
@reduxjs/toolkit
axios
bootstrap
react
react-bootstrap
react-hook-form
react-redux
react-router-dom
redux-persist
zod
