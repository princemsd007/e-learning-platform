# E-Learning Platform with Pega Integration

Welcome to the E-Learning Platform project! This platform provides a comprehensive solution for managing course registration, tracking learner progress, and issuing certifications. The backend is built with Node.js, Express, and MongoDB, while the frontend is developed using React. Additionally, Pega is integrated to automate and enhance the user experience.

## Features

- **User Registration**: Secure registration and login system for learners.
- **Course Management**: Admins can create, update, and manage courses.
- **Progress Tracking**: Track learners' progress through courses and quizzes.
- **Certification**: Issue certificates upon course completion.
- **Pega Integration**: Automates processes like registration and progress tracking with Pega.

## Technologies Used

- **Backend**: Node.js, Express, MongoDB, Mongoose, Axios
- **Frontend**: React, React Router, Axios
- **Others**: Pega, Nodemon, dotenv, CORS, Body-Parser

## Project Structure

markdown
Copy code
# E-Learning Platform with Pega Integration

Welcome to the E-Learning Platform project! This platform provides a comprehensive solution for managing course registration, tracking learner progress, and issuing certifications. The backend is built with Node.js, Express, and MongoDB, while the frontend is developed using React. Additionally, Pega is integrated to automate and enhance the user experience.

## Features

- **User Registration**: Secure registration and login system for learners.
- **Course Management**: Admins can create, update, and manage courses.
- **Progress Tracking**: Track learners' progress through courses and quizzes.
- **Certification**: Issue certificates upon course completion.
- **Pega Integration**: Automates processes like registration and progress tracking with Pega.

## Technologies Used

- **Backend**: Node.js, Express, MongoDB, Mongoose, Axios
- **Frontend**: React, React Router, Axios
- **Others**: Pega, Nodemon, dotenv, CORS, Body-Parser


## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/princemsd007/e-learning-platform
   cd e-learning-platform/backend
2. Install Dependencies
  ```bash
 npm install
```
3.Set up environment variables: Create a .env file in the backend directory with the following content:
```bash
MONGO_URI=your_mongodb_connection_string
PEGA_BASE_URL=your_pega_base_url
PEGA_API_KEY=your_pega_api_key
```
4. Start the server :
   ```bash
   npm run dev

The backend server will start on http://localhost:5000.


Usage
Register a new user: Navigate to the registration page and fill in the necessary details.
View courses: Access the list of available courses from the homepage.
Track progress: Users can view their progress on the dashboard.
Admin actions: Admins can manage courses through a secure admin panel (requires additional setup).
Contributing
Contributions are welcome! Please fork this repository and submit a pull request for review.

License
This project is licensed under the MIT License. See the LICENSE file for details.

