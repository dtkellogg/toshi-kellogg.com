# Stage 1: Build the React frontend
FROM node:14 as frontend

WORKDIR /app/frontend

COPY frontend/package*.json ./

RUN npm install

COPY frontend/ ./

RUN npm run build

# Stage 2: Build the Express backend and serve the static files
FROM node:14

WORKDIR /app/backend

COPY backend/package*.json ./

RUN npm install

COPY backend/ ./

# Copy the built frontend from the previous stage
COPY --from=frontend /app/frontend/build ./public

EXPOSE 5000

CMD [ "npm", "dev" ]