# Dockerfile for the myReads project
FROM node:21.7.3-bullseye

WORKDIR /app

# Copy the project files to the working directory
COPY . .

# Install dependencies
WORKDIR /app/starter

RUN npm install

EXPOSE 3000

# Start the development server
CMD ["sh", "-c", "NODE_OPTIONS=--openssl-legacy-provider npm start"]
