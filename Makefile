.PHONY: start install
include .env
export

install:
	yarn

start:
	yarn dev

build:
	yarn build

lint:
	yarn lint