# Use the Node.js 18 base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the application's port
EXPOSE 5000

# Command to start the application
CMD ["npm", "start"]
