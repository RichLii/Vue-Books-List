# npm build 部分
npm run build

cd dist

cp /dist/index.html /public/404.html

cd ..

npm run build

# git 部分

cd dist

git init

git checkout -b gh-pages

# 只需要修改這裡為你的 git repo
git remote add origin git@github.com:RichLii/test.git

git add .

git commit -m "`date +'%Y-%m-%d %H:%M:%S'`"

git push -u -f origin gh-pages