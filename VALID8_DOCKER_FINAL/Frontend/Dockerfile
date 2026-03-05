# Frontend/Dockerfile – production build and serve with nginx
# -------------------------------------------------
# 1️⃣ Build stage
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build   # creates ./dist

# 2️⃣ Serve stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# Expose the port Railway will map (nginx default 80)
EXPOSE 80

FROM node:20

# Set working directory inside the container
WORKDIR /app

# Copy only dependency files first to leverage Docker caching
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of your app code
COPY . .

# Expose the port used by Vite dev server
EXPOSE 5173

# Start Vite dev server
CMD ["npm", "run", "dev"]
