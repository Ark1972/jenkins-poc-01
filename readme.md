# Jenkins POC 01 - Node.js Express Application

A proof-of-concept Node.js Express application designed for Jenkins CI/CD pipeline integration and testing.

## Features

- Express.js web server with security middleware
- Health check endpoints for monitoring
- Structured routing and middleware architecture
- Environment-based configuration
- Jenkins pipeline integration
- ESLint code quality checks
- Jest testing framework setup

## Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn
- Jenkins (for CI/CD)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jenkins-poc-01
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api/` - Welcome message with API information
- `GET /api/status` - Service status information

## Project Structure

```
src/
├── app.js              # Main application file
├── routes/             # Route definitions
│   └── index.js        # Main routes
├── middleware/         # Custom middleware
│   └── auth.js         # Authentication middleware
└── controllers/        # Route controllers
    └── healthController.js
```

## Jenkins Integration

The project includes a `Jenkinsfile` with a complete CI/CD pipeline that:

- Installs dependencies
- Runs linting
- Executes tests
- Builds the application
- Deploys to staging/production based on branch

## Environment Variables

See `.env.example` for available configuration options.

## License

ISC
