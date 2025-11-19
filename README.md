# Dispatcher

A full-stack ride-sharing dispatcher application with real-time updates using WebSockets.

## Overview

This project consists of a backend API and a frontend React application that allows users to request rides from available drivers with real-time quote calculation and ride status updates.

## Features

- **Driver Management**: View available drivers and their current status
- **Quote System**: Get real-time price quotes based on distance and time
- **Real-time Updates**: WebSocket integration for live ride status updates
- **Responsive UI**: Built with React and Ant Design components

## Tech Stack

### Backend
- **Node.js/TypeScript**: Server runtime and language
- **Express.js**: Web framework
- **Socket.IO**: Real-time WebSocket communication
- **SQLite**: In-memory database
- **CORS**: Cross-origin resource sharing

### Frontend
- **React 19**: UI framework
- **TypeScript**: Type safety
- **Redux Toolkit**: State management
- **React Router**: Client-side routing
- **Ant Design**: UI component library
- **Socket.IO Client**: WebSocket client
- **Vite**: Build tool and dev server

## Getting Started

### Prerequisites
- Node.js and npm installed
- Bash shell (for the run script)

### Installation & Running

Run the following command from the project root:

```bash
./run.sh
```

This script will:
1. Install backend dependencies
2. Start the backend server on port 3000
3. Wait for backend initialization
4. Install frontend dependencies
5. Start the frontend dev server

The frontend will be available at `http://localhost:5173` (Vite default)

### Manual Setup

**Backend:**
```bash
cd backend
npm install
npm run start
```

**Frontend (in a new terminal):**
```bash
cd frontend
npm install
npm run dev
```

## Project Structure

- `backend` - Express server with routes, WebSocket handlers, and database
- `frontend` - React application with Redux store and components
- `run.sh` - Automation script to run both services

## API Routes

- `GET /health` - Health check
- `GET /driver` - Get all available drivers
- `GET /driver/:id` - Get driver details
- `POST /quote` - Calculate ride quote (requires lat, lng in body)

## WebSocket Events

- `requestRide` - Emit with driver ID to request a ride
- `ride_update` - Listen for ride status updates (searching, driver accepted, etc.)