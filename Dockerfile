# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package*.json ./
COPY public ./public
COPY next.config.mjs .
COPY tsconfig.json .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm install 

COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

RUN npx prisma generate
# Run the application.
CMD ["npm", "run", "dev"]
