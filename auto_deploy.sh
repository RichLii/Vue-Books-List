#!/bin/bash
# 只需要修改這裡為你的 git repo
repo=git@github.com:RichLii/Vue-Books-List.git

# npm build 部分
npm run build

cp -f $PWD/dist/index.html $PWD/public/404.html

npm run build

# git 部分

cd dist

git init

git checkout -b gh-pages

git remote add origin $repo

git add .

git commit -m "`date +'%Y-%m-%d %H:%M:%S'`"

git push -u -f origin gh-pages
