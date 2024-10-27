# Use the official Node.js image as the base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn run build

# Set the command to start the Next.js server
CMD ["yarn", "run", "start"]
