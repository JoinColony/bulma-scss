#!/bin/sh
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
VERSION=${1:-master} # e.g. 0.0.18
rm -rf $DIR/../bulma
cd $DIR/..
git clone https://github.com/jgthms/bulma.git
cd $DIR/../bulma
git fetch origin --tags
git checkout $VERSION
find . -name '*.sass' -exec sass-convert -F sass -T scss '{}' '{}.temp' \;
find . -name '*.sass.temp' -exec rename 's/^(.+)\/(.+?).sass.temp$/$1\/_$2.scss/' '{}' \;
find . -name '*.sass' -type f -delete
cd $DIR/..
rm -rf dist
mkdir -p dist
mv bulma/sass dist
mv bulma/_bulma.scss dist
cd $DIR/../bulma
git reset --hard
