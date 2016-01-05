## Development:
### create docker-machine box
    docker-machine create -d virtualbox --virtualbox-memory "2048" --virtualbox-cpu-count "2" nunpress
###point your docker to docker inside virtual machine
    eval "$(docker-machine env nunpress)"
###build and run development containers
    docker-compose -f dev.yml up -d