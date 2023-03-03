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
	docker run -it --rm -v ${PWD}/src:/src -w /src node:$(node_version) npm install

npm_update:
	docker run -it --rm -v ${PWD}/src:/src -w /src node:$(node_version) npm update -D
	docker run -it --rm -v ${PWD}/src:/src -w /src node:$(node_version) npm remove puppeteer
	docker run -it --rm -v ${PWD}/src:/src -w /src node:$(node_version) npm install puppeteer

build_docker_image: npm_install
	docker buildx build -f ./docker/Dockerfile -t ${docker_image_name}:latest .
