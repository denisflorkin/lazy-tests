FROM node:12.2.0

# Init
# ==============================================================================
RUN npm install --global yarn@latest
RUN mkdir -p /home/app
WORKDIR /home/app

# Code
# ==============================================================================
USER root

COPY src /home/app/src

# static files
# ==============================================================================

COPY public /home/app/public



# Packages
# ==============================================================================


COPY src /home/app/package.json
COPY src /home/app/yarn.lock

RUN yarn --frozen-lockfile

# ==============================================================================
# CUSTOM STEPS
# ==============================================================================
# Following steps are specific to this repository
# and should be copied in any templates.
# Ideally, all our backend Node components could share the same
# DockerFile, so this section should disappear...


# Build
# ==============================================================================
WORKDIR /home/app
RUN npm run build



# Launch
# ==============================================================================
CMD yarn serve build
