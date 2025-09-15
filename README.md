# Simple CRUD Application (Node.js & React)

This is a simple, full-stack web application demonstrating the fundamental CRUD (Create, Read, Update, Delete) operations. The backend is built with Node.js and Express, providing a RESTful API, while the frontend is a single-page application built with React.

---

## ✨ Features

-   **Create:** Add new users to the list.
-   **Read:** View the complete list of users.
-   **Update:** Edit the name of an existing user inline.
-   **Delete:** Remove a user from the list.

## 🛠️ Tech Stack

-   **Backend:** Node.js, Express.js
-   **Frontend:** React.js, Axios
-   **Database:** In-memory JSON array (for simplicity)

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and `npm` installed on your computer.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    # Replace the URL with your own repository's URL
    git clone [https://github.com/YourUsername/Your-Repo-Name.git](https://github.com/YourUsername/Your-Repo-Name.git)
    cd Your-Repo-Name
    ```

2.  **Setup the Backend:**
    ```sh
    cd backend
    npm install
    ```

3.  **Setup the Frontend:**
    ```sh
    cd ../frontend
    npm install
    ```

### Running the Application

You will need two separate terminals to run both the backend server and the frontend development server.

1.  **Start the Backend Server:**
    *(In your first terminal, from the `backend` directory)*
    ```sh
    node server.js
    # The server will be running on http://localhost:5000
    ```

2.  **Start the Frontend Application:**
    *(In your second terminal, from the `frontend` directory)*
    ```sh
    npm start
    # The React application will open automatically in your browser at http://localhost:3000
    ```

Now you can interact with the application in your browser!

---

## 📋 API Endpoints

The backend server provides the following RESTful API endpoints:

| Method | Endpoint          | Description               |
| :----- | :---------------- | :------------------------ |
| `GET`  | `/api/users`      | Get all users.            |
| `POST` | `/api/users`      | Create a new user.        |
| `PUT`  | `/api/users/:id`  | Update an existing user.  |
| `DELETE`| `/api/users/:id`  | Delete a user.            |