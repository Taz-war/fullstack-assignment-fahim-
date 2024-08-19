# Help Center Application

## Overview

This project is a help center application built with a React frontend and an Express/MongoDB backend. Users can add, search services. The application provides a user-friendly interface for managing services efficiently.

## Setup and Run the Project Locally

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB (Local or Atlas)
- dotenv
- cors

### Backend Setup

1. Clone the repository:

```sh
git clone https://github.com/Taz-war/fullstack-assignment-fahim-.git
cd backend
```
2. Install dependencies:
    npm install

3. Create a .env file in the root directory and add the following environment variables:

    DB_USER=(username of your mongodb atlas cluster link)
    DB_PASS=(oassword of your mongodb atlas cluster of project)

4. Start the backend server:
    node index.js / npm run dev(if you want to run on nodemon)
The backend server will start on http://localhost:5000.


# API Documentation

### Get All Tasks
- **URL**: '/api/cards'
- **Method**: 'GET'
- **Description**: 'GET'
- **Response**: [
  {
    "_id": "card_id",
    "title": "card Title",
    "description": "Card Description"
  },
  ...
]

### Create a New Task

- **URL**: '/api/cards'
- **Method**: 'POST'
- **Description**:  Create a new card.
- **RequestBody**:{
  "title": "card Title",
  "description": "Card Description"
}
- **Response**:{
  "acknowledged": true,
  "insertedId": "new_card_id"
}

### get a specific card

- **URL**: '/api/cards/:id'
- **Method**: 'GET'
- **Description**:  get a specific card.
- **RequestBody**:{
  "id": card id
}
- **Response**:{
  "_id":"card_id",
  "title": "card Title",
  "description": "Card Description"
}

# License

This project is licensed under the MIT License. See the LICENSE file for details.