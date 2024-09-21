# 🌍 Welcome to the Country Info App

This project is a fullstack application built with TypeScript, featuring an Express backend and a Next.js frontend. The app allows you to explore detailed country information such as population, neighboring countries, and the country's flag.

In this document, you'll find all the necessary information to set up and run the project locally.

## 🛠️ Environment Setup

Before you start, both the `backend` and `frontend` directories require environment variables to be configured. Inside each directory, you'll find an `env.example` file, which serves as a template to create your own `.env` or `.env.local` file.

### Backend Environment Variables

- **PORT**: The port on which the backend server will run. If the specified port is busy, the server will automatically start on the next available port.

### Frontend Environment Variables

- **API_BASE_URL**: The backend URL, necessary for the frontend to correctly fetch country data.

## 🚀 Starting the Project

### Backend

#### Prerequisites:
- Ensure you have **Node.js** and **NPM** installed (Linux environment is recommended for smoother installation).

#### Steps:
1. Navigate to the backend directory and install the dependencies:
   ```bash
   npm install
   ```

2. Choose one of the three options to start the server:
   - **Production**: Builds the application and starts it from the `dist/` directory.
   - **Development**: Starts the server in development mode, enabling hot-reloads.
   - **Unit Tests**: Runs the unit tests. (Note: The server must be running either in production or development mode for the tests to execute properly).

> [!NOTE]
> If you’re only running the backend to test the frontend, the development mode is recommended.

#### Commands:
- To run the **production** version:
  ```bash
  npm start
  ```

- To run the **development** version:
  ```bash
  npm run dev
  ```

- To run the **tests**:
  ```bash
  npm run test
  ```

### Frontend

#### Prerequisites:
- Just like the backend, you need to have **Node.js** and **NPM** installed.

#### Steps:
1. Navigate to the frontend directory and install the dependencies:
   ```bash
   npm install
   ```

2. Choose one of the two options to start the frontend:
   - **Production**: Builds the application and starts it from the `next/` directory.
   - **Development**: Starts the frontend in development mode.

> [!NOTE]
> If you’re testing the frontend in conjunction with the backend, the development mode is recommended.

#### Commands:
- To run the **production** version:
  ```bash
  npm run build
  npm start
  ```

- To run the **development** version:
  ```bash
  npm run dev
  ```

## 🎉 Testing the Application

If everything is set up correctly, when you access the frontend, you should see a list of buttons representing various countries. Clicking on any of them will display detailed information about that country, such as population, neighboring countries, and the national flag.

Here’s a visual preview of how the app should work:

https://github.com/user-attachments/assets/dd2905c9-1b8a-49b2-8927-8e66f9754edb

## 📝 Backend Endpoints

The backend API provides two main endpoints for retrieving country information:

- **`GET /country/available`**: Returns the available countries in the following format:
  ```json
  {
    "countries": [
      { "countryCode": "US", "name": "United States" },
      { "countryCode": "BR", "name": "Brazil" }
    ]
  }
  ```

- **`POST /country/specific/info`**: Returns detailed information about a specific country. Requires the following request body:
  ```json
  {
    "countryCode": "US",
    "countryName": "United States"
  }
  ```
  The response includes data such as:
  ```json
  {
    "borderCountries": {...},
    "countryPopulation": {...},
    "countryFlag": {...}
  }
  ```

## 💡 Final Tips

- Ensure the backend server is running correctly before starting the frontend.
- Double-check the environment variables in both the `frontend` and `backend` directories to ensure the frontend can properly communicate with the API.
