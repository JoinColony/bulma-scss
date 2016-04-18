#!/bin/sh
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
VERSION=${1:-master} # e.g. 0.0.18
cd $DIR/../bulma
git fetch upstream --tags
git checkout $VERSION
find . -name '*.sass' -exec sass-convert -F sass -T scss '{}' '{}.temp' \;
find . -name '*.sass.temp' -exec rename 's/^(.+)\/(.+?).sass.temp$/$1\/_$2.scss/' '{}' \;
find . -name '*.sass' -type f -delete
cd $DIR/..
rm -rf dist
mkdir -p dist/bulma
mv bulma/bulma dist
mv bulma/_bulma.scss dist
cd $DIR/../bulma
git reset --hard
