FROM node:14.15.4

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app

# Define the working directory of our Docker container
WORKDIR /usr/src/app

# OPTIONAL: Use Pacific time (PST/PDT) instead of UTC
RUN ln -fs /usr/share/zoneinfo/PST8PDT /etc/localtime
RUN dpkg-reconfigure -f noninteractive tzdata

# Install dependencies
COPY package.json /usr/src/app/
RUN npm install

# Copy source files
COPY . /usr/src/app

# Build app
RUN npm run build

# Expose our Next.js web application port
EXPOSE 3000

# Expose our Node.js debug port
EXPOSE 9229

# Start the app
CMD ["npm", "run", "dev"]