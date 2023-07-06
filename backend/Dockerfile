# Use an official Node.js LTS (Long Term Support) image as the base
FROM node:20-alpine3.17

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Define the startup command
CMD ["npm", "nodemon", "backend/server.js"]