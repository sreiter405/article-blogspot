# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:9.0.0



# Install and configure `serve`.
RUN npm install -g webpack


# Install all dependencies of the current project.
COPY package.json package.json
RUN npm install

# Copy all local files into the image.
COPY . .

# Build for production.
CMD ["/usr/local/bin/node", "index.js"]

EXPOSE 3000
