## Table of Contents

- [How To Run Project](#how-to-run-project)
- [Requirements Test](#requirements-test)
- [API Structure](#api-structure)
- [Our Stacks](#our-stacks)

### How To Run Project

**Prerequisites**

- Download Node.js from the official website: [Node](https://nodejs.org/)
- Download VSCode from the official website: [VSCode](https://code.visualstudio.com/)

**Running on local**

- Clone this repository to your computer:

  ```
  git clone https://github.com/mpsalunggg/form-builder
  ```

- Switch to the part_two branch to view the final project:

  ```
  cd form-builder
  git checkout part_two
  ```

**Backend Setup**

- Navigate to the backend folder and install the necessary packages:

  ```
  cd backend
  yarn install
  ```

- Add a .env file in the backend folder with the following content(optional):

  ```
  PORT=8001
  ```

- Run the backend application:

  ```
  yarn dev
  ```

- Finally

  ```
  Server is Fire at http://localhost:8001
  ```

**Frontend Setup**

- Exit the backend folder and navigate to the frontend folder:

  ```
  cd ..
  cd frontend
  ```

- Install the necessary packages:

  ```
  yarn install
  ```

- Add a .env file in the frontend folder with the following content:

  ```
  BASE_URL='http://localhost:8001'
  ```

- Run the frontend application:

  ```
  yarn dev
  ```

- Finally

  ```
  Server running on port http://localhost:5173/ as default port
  ```

### Requirements Test

**PART 1: Frontend Requirements**

- [x] Use React.js to build the frontend. Store it in a folder named 'frontend' on the repository.
- [x] Create a form to add a new task with the following fields:
  - Task title (required)
  - Task description (optional)
- [x] Use components from Fluent UI v8 for the forms.
- [x] Display a list of all tasks with their titles and descriptions (if available).
- [x] Provide a button to delete a task from the list.
- [x] Allow users to update the title and description of a task inline.
- [x] Implement infinite scrolling for the task list (do not use any infinite scrolling library)

**PART 1: Backend Requirements**

- [x] Use Node.js to build the backend. Store it in a folder named 'backend' on the repository.
- [x] Create RESTful API endpoints to handle CRUD operations for tasks.
- [x] Store task data in memory (no need for a database).
- [x] Use appropriate HTTP methods and status codes for each operation.
- [x] Implement pagination to the read API, where only the tasks of the current page are returned by the API

**PART 2: Frontend Requirements**

- [x] Add a setting page on the app for users to configure the form.
- [x] User should be able to drag fields from the left sidebar to the optional field area to add more fields.
- [x] User should be able to name the fields they added to the optional fields.
- [x] There should be three options of fields that can be added, TextField, DatePicker, and SpinButton. Use the Fluent UI v8 library for the fields.
- [x] The form setting/configuration should apply to all task forms (Create Task, Edit Task, Task List).
- [x] Follow this [Example](https://demo.bpmn.io/form/s/start) for the expected behaviour of the form setting page.
- [x] Using [drag and drop library](https://www.npmjs.com/package/react-beautiful-dnd) for the drag and drop.
- [x] For the optional form users can have zero to unlimited number of rows of fields.
- [ ] (OPTIONAL) For the optional form users can have up to two columns of fields per row.

### API Structure

- Get All Task
  ```
  GET /api/tasks
  GET /api/tasks?page=1&pageSize=10
  ```
  Query Params:
  ```
  page = number
  pageSize = number
  ```
  Response:
  ```
  {
    "code": 200,
    "message": "Get all tasks success!",
    "data": {
        "tasks": [
            {
                "id": 1,
                "title": "Eat",
                "description": "lorem ipsum dolar ipset test yuhu"
            },
        ],
        "meta": {
            "total": 3,
            "page": 1,
            "pageSize": 10
        }
    }
  }
  ```
- Create Task

  ```
  POST /api/task
  ```

  Request Body:

  ```
  {
    "title": string,
    "description": string
  }
  ```

  Response:

  ```
  {
    "code": 201,
    "message": "Task created!",
    "data": {
        "id": 3701917297,
        "title": "test",
        "description": "test"
    }
  }
  ```

- Update Task

  ```
  PUT /api/task/:id
  ```

  Request Body:

  ```
  {
    "title": string,
    "description": string
  }
  ```

  Response:

  ```
  {
      "code": 200,
      "message": "Task updated!",
      "data": {
          "id": 1,
          "title": "test123",
          "description": "test123"
      }
  }
  ```

- Delete Task
  ```
  DELETE /api/task/:id
  ```
  Response:
  ```
  {
    "code": 200,
    "message": "Task deleted!",
    "data": {
        "id": 1,
        "title": "test123",
        "description": "test123"
    }
  }
  ```

### Our Stacks

**Frontend Stacks**

- Typescript
- ReactJS
- Vite
- TailwindCSS
- FluentUI
- Tanstack
- Zustand
- Axios
- React-beatiful-dnd

**Backend Stacks**

- Typescript
- ExpressJS
- NodeJS
- Cors
- Nodemon
