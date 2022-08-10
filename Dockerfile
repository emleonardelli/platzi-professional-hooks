FROM node:16-alpine3.12

WORKDIR /app

# Arguments defined in docker-compose.yml
ARG uid
ARG environment

# Create system user to run Composer and Artisan Commands
RUN adduser -S $uid -u $uid -G node

RUN chown -R $uid:$uid /app

ENV CI=false

USER $uid

COPY package.json ./

#CMD ["npm", "i"]
CMD ["npm", "start"]
