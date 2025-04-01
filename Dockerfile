# Step 1: Use official Node.js image as the base image
FROM node:18-slim as build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the React app
RUN npm run build

# Debugging: Check if the dist folder exists after vite build
RUN echo "Listing files in /app:" && ls -la /app/dist

# Step 7: Create a new stage to serve the app with Nginx (multi-stage build for smaller image size)
FROM nginx:alpine

# Step 8: Copy the build files from the build stage to the Nginx server
COPY --from=build /app/dist /usr/share/nginx/html

# Step 9: Expose port 80 to serve the app
EXPOSE 80

# Step 10: Start Nginx to serve the static files
CMD ["nginx", "-g", "daemon off;"]


