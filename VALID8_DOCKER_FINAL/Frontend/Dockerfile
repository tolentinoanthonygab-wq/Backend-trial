# 1️⃣ Build stage
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Pass build args if needed by Vite
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# 2️⃣ Serve stage
FROM nginx:alpine

# Copy the build output to replace the default nginx contents
COPY --from=builder /app/dist /usr/share/nginx/html

# We need a custom nginx configuration to:
# 1. Listen on the dynamic $PORT provided by Railway
# 2. Support SPA routing (redirecting all traffic to index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf.template

# Use envsubst to replace $PORT in the template with the actual Railway port, then start nginx
CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
