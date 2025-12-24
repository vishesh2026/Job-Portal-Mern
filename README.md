# Job Portal

 This project is a job portal application built using the MERN stack (MongoDB, Express, React, Node.js).

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Author](#author)
- [Contributions](#contributions)


## Project Overview

A full-stack Job Portal application built using the MERN stack, designed to connect job seekers and recruiters through a simple, modern, and responsive interface. The platform focuses on clean UX, smooth animations, and clear role-based flows.

## Features

### Core Features

- Authentication using JWT

- Role-based access (Student / Recruiter)

- Clean and responsive UI

- Smooth page transitions and animations

### 🎓 Student Role

- Browse available job opportunities

- Search and filter jobs

- Apply to jobs easily

- View applied jobs in dashboard

### 🧑‍💼 Recruiter Role

- Create a company profile

- Post new job openings

- View applicants for posted jobs

- Manage all job listings from a dashboard

---

## 🎨 UI & Animations

1. Built with Tailwind CSS for responsive layouts

2. shadcn/ui components for consistency and     accessibility

3. Framer Motion for subtle animations

4. Mobile-friendly and clean layout

5. Focused on usability and clarity

---

## 🔒 Authentication Flow

- **Users register and log in securely**

- **JWT tokens are issued on login**

- **Role-based route protection**

- **Recruiter-only access to job posting features**


## Installation

To run this project locally, follow these steps:

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd ./backend
   ```

2. Install the required dependencies:
   ```bash
   npm i
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```

   You should see the following messages:
   ```
   "Your server is running on a port"
   "MongoDB connected..."
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ./frontend
   ```

2. Install the required dependencies:
   ```bash
   npm i
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

### 2. Setup Environment Variables
Create a .env file inside the server/ directory with:

```bash
MONGODB_URI = ""
PORT = 8000
SECRET_KEY = ""

CLOUDINARY_API_KEY = ""
CLOUDINARY_SECRET_KEY = ""
CLOUDINARY_NAME = ""

NODE_ENV === ""
```


## Usage

Once both the backend and frontend servers are running, you can access the application on your local machine. The default development server is typically available at `http://localhost:3000`.


## License

This project is licensed under the MIT License. See the LICENSE file for more details.


## 👨‍💻 Author
- **Made with 💙 by Vishesh**
- **🔗 Connect on [Linkedin] https://www.linkedin.com/in/vishesh-kumawat-b3b1a5265/

---


## 🙌 Contributions
**Feel free to fork the repo, submit issues, or open a pull request.**


