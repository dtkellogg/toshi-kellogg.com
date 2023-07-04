# Use an official Node.js LTS (Long Term Support) image as the base
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Build the React app
RUN npm run build

# Expose port 80 to the outside world
EXPOSE 80

# Define the startup command
CMD ["npm", "start"]

# # Stage 1: Build the React frontend
# FROM node:14 as frontend

# WORKDIR /app/frontend

# COPY frontend/package*.json ./

# RUN npm install

# COPY frontend/ ./

# RUN npm run build

# # Stage 2: Build the Express backend and serve the static files
# FROM node:14

# WORKDIR /app/backend

# COPY backend/package*.json ./

# RUN npm install

# COPY backend/ ./

# # Copy the built frontend from the previous stage
# COPY --from=frontend /app/frontend/build ./public

# EXPOSE 5000

# CMD [ "npm", "dev" ]