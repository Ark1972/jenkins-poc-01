# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jenkins proof-of-concept Node.js Express application designed for testing Jenkins CI/CD pipeline integration and deployment workflows.

## Technology Stack

- **Runtime**: Node.js 16+
- **Framework**: Express.js
- **Security**: Helmet.js, CORS
- **Logging**: Morgan
- **Development**: Nodemon
- **Testing**: Jest, Supertest
- **Linting**: ESLint
- **CI/CD**: Jenkins

## Development Commands

### Setup
```bash
npm install              # Install dependencies
cp .env.example .env     # Set up environment variables
```

### Development
```bash
npm run dev             # Start development server with nodemon
npm start               # Start production server
npm test                # Run tests
npm run test:watch      # Run tests in watch mode
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues automatically
```

### Testing the Application
```bash
curl http://localhost:3000/health          # Health check
curl http://localhost:3000/api/            # API welcome message
curl http://localhost:3000/api/status      # Service status
```

## Project Architecture

### Directory Structure
```
src/
├── app.js              # Main Express application with middleware setup
├── routes/             # Express route definitions
│   └── index.js        # Main API routes
├── middleware/         # Custom middleware functions
│   └── auth.js         # Authentication middleware (POC implementation)
└── controllers/        # Route handler logic
    └── healthController.js  # Health check endpoints
```

### Key Components

- **app.js**: Main application entry point with Express setup, security middleware (helmet, cors), logging, and error handling
- **Routes**: Modular route definitions using Express Router
- **Middleware**: Custom authentication and request processing
- **Controllers**: Business logic separated from route definitions

## Jenkins Integration

### Pipeline Configuration
- **Jenkinsfile**: Complete CI/CD pipeline with stages for lint, test, build, and deploy
- **Branch-based deployment**: Automatic staging deployment on `develop`, production on `master`
- **Test reporting**: Configured for test result publishing
- **Clean workspace**: Automatic cleanup after pipeline execution

### Pipeline Stages
1. Checkout code
2. Setup Node.js environment
3. Install dependencies (`npm ci`)
4. Run linting (`npm run lint`)
5. Execute tests (`npm test`)
6. Build application
7. Deploy to staging/production based on branch

## Environment Configuration

- **Development**: Uses `.env` file for local configuration
- **Production**: Environment variables should be configured in Jenkins or deployment environment
- **Example configuration**: See `.env.example` for available options

## Development Workflow

1. Create feature branch from `develop`
2. Make changes and test locally with `npm run dev`
3. Run tests with `npm test`
4. Ensure linting passes with `npm run lint`
5. Push to feature branch (triggers Jenkins build)
6. Merge to `develop` for staging deployment
7. Merge to `master` for production deployment

## Common Tasks

### Adding New Routes
1. Create route file in `src/routes/`
2. Import and use in `src/app.js`
3. Add corresponding controller in `src/controllers/` if needed

### Adding Middleware
1. Create middleware function in `src/middleware/`
2. Import and apply in `src/app.js` or specific routes

### Testing
- Unit tests should be placed in `__tests__/` or alongside source files
- Use Supertest for API endpoint testing
- Jest configuration is set up in package.json

## Code Quality Notes

- Project uses CommonJS modules (require/module.exports)
- ESLint is configured for linting without TypeScript
- When adding routes, unused parameters should be prefixed with underscore (e.g., `_req`) or replaced with appropriate usage
- Health check endpoints are available at `/health` for monitoring