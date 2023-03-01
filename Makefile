normal := \e[0m
bold := \e[1m
grey := \e[2m

node_version := 18
docker_image_name := html2stickers

all: list

list:
	@printf "$(bold)npm_install$(grey) - Install npm packages dependencies\n$(normal)"
	@printf "$(bold)npm_update$(grey) - Update npm packages dependencies\n$(normal)"
	@printf "$(bold)build_docker_image$(grey) - Build docker image with node\n$(normal)"
	@printf "$(bold)build_docker_image_alpine$(grey) - Build docker image with alpine\n$(normal)"

npm_install:
	docker run -it --rm -v ${PWD}/app:/app -w /app node:$(node_version) npm install

npm_update:
	docker run -it --rm -v ${PWD}/app:/app -w /app node:$(node_version) npm update -D

build_docker_image:
	docker buildx build -f ./docker/Dockerfile-node -t ${docker_image_name} .
