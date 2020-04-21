#!/usr/bin/env sh
vant-cli build-site

# cdn deploy

# rm -rf site/*.js

gh-pages -d site
