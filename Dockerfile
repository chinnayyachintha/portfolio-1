# Build Stage
# Use a smaller base image for building
FROM node:20-bullseye-slim as build

# Set working directory
WORKDIR /app

# Install dependencies only (using package.json and package-lock.json)
COPY package*.json ./
RUN npm ci --only=production

# Copy source files and build
COPY . .
RUN npm run build

# Production Stage
# Use a minimal Nginx image to serve the static files
FROM nginx:alpine

# Copy built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
