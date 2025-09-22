---
layout: project
title: "Task Manager App"
description: "A full-stack task management application with React frontend and Node.js backend"
technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"]
github_url: "https://github.com/richardborgesdev/task-manager"
demo_url: "https://task-manager-demo.netlify.app"
---

# Task Manager Application

A comprehensive task management application built with modern web technologies. This project demonstrates full-stack development skills with React, Node.js, and MongoDB.

## Features

### Frontend (React)
- **Modern UI**: Clean, intuitive interface built with React hooks
- **State Management**: Context API for global state management
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Real-time Updates**: Live updates when tasks are modified
- **User Authentication**: Secure login and registration system

### Backend (Node.js)
- **RESTful API**: Well-structured API endpoints following REST principles
- **Authentication**: JWT-based authentication with refresh tokens
- **Database**: MongoDB with Mongoose ODM for data modeling
- **Validation**: Input validation and sanitization for security
- **Error Handling**: Comprehensive error handling and logging

## Technical Architecture

### Frontend Structure
```
src/
├── components/
│   ├── TaskList.js
│   ├── TaskItem.js
│   └── TaskForm.js
├── context/
│   ├── AuthContext.js
│   └── TaskContext.js
├── hooks/
│   └── useApi.js
└── utils/
    └── api.js
```

### Backend Structure
```
server/
├── models/
│   ├── User.js
│   └── Task.js
├── routes/
│   ├── auth.js
│   └── tasks.js
├── middleware/
│   └── auth.js
└── utils/
    └── db.js
```

## Key Learning Points

This project demonstrates several important concepts:

1. **Component Architecture**: Proper component separation and reusability
2. **State Management**: Effective use of React Context and hooks
3. **API Design**: RESTful API principles and best practices
4. **Authentication**: Secure user authentication with JWTs
5. **Database Design**: Proper schema design and relationships
6. **Error Handling**: Client and server-side error management
7. **Security**: Input validation, sanitization, and CORS setup

## Deployment

The application is deployed using modern practices:

- **Frontend**: Deployed on Netlify with automatic builds from GitHub
- **Backend**: Deployed on Heroku with MongoDB Atlas for the database
- **CI/CD**: Automated testing and deployment pipeline

## Future Enhancements

Planned improvements include:
- WebSocket integration for real-time collaboration
- File attachment support for tasks
- Advanced filtering and search capabilities
- Team collaboration features
- Mobile app development with React Native