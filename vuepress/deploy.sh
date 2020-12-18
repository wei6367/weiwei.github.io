#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist
# 如果是发布到自定义域名
# echo 'www.wangdiangang.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

# 发布到自己的git仓库 https://<USERNAME>.github.io
git push -f git@github.com:wei6367/wei6367.github.io master

cd -