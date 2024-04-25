# FitTrack
By Crisila Ballecer

FitTracker is a fitness tracker designed to help users monitor and manage their workout routines effectively. It enables users to input details such as exercise names, dates, weights, sets, reps, durations, and distances, providing a comprehensive overview of their fitness activities.


## Tech stack
### Frontend:

- React: Frontend library for building user interfaces.
- React Router: For managing routes in the React application.
- Axios: For making HTTP requests to your backend API.
- Bootstrap and React Bootstrap: For styling and UI components.

### Backend:
- Node.js with Express: Backend server framework for handling API routes and business logic.
- MongoDB with Mongoose: Database system and ODM for storing and managing workout data.
- bcrypt: For hashing user passwords securely.
- JWT (jsonwebtoken): For user authentication and authorization.
- Joi and joi-password-complexity: For input validation and password complexity requirements.
- Cors: Middleware for enabling Cross-Origin Resource Sharing.


### Development Tools:
- Nodemon: Development dependency for automatic server restarts during development.
- dotenv: For managing environment variables in development.
- Validator: For additional input validation if needed.


## API documentation of routes
Workout:
- [ ] GET /workouts --> Get all the workout docs
- [ ] POST /workouts --> Create a new workout document
- [ ] GET /workouts/:id --> Get a specific workout document
- [ ] PATCH /workouts/:id --> Update a specific workout document
- [ ] DELETE /workouts/:id --> Delete a specific workout document

Future goals / plans
- [ ] Add nutritions
- [ ] Add logout
- [ ] Change login and registration coding
- [ ] Add Delete and Edit
- [ ] Add better CSS and Bootstrap
- [ ] Responsiveness
- [ ] Customize login
- [ ] Add error handling

