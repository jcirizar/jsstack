## Development:
### create docker-machine box
    docker-machine create -d virtualbox --virtualbox-memory "2048" --virtualbox-cpu-count "2" nunpress
###point your docker to docker inside virtual machine
    eval "$(docker-machine env nunpress)"
###build and run development containers
    docker-compose -f dev.yml up -d
####get inside app container to run gulp etc
    docker exec -it [App Container name or id] bash
####Install gulp and nodemon globally and later npm install
    npm run dev

## Production:

### Requires docker-compose and nginx-proxy on front.
    docker-compose build && docker-compose up -d --force-recreate
