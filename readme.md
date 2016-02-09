## Development:
#### create docker-machine box
    docker-machine create -d virtualbox jsstack

#### point your docker to docker inside virtual machine
    eval "$(docker-machine env jsstack)"

#### build and run development containers
    docker-compose -f dev.yml up -d
#### get inside app container to run gulp etc
    docker exec -it jsstack bash
#### Install dependencies
    npm install

#### Run development
    npm run watch
    #go to [VPS-IP]:3000
