#!/bin/bash
lint_opt=""
if [ "$1" = "fix" ]
then
  lint_opt="--fix" 
fi

./node_modules/.bin/eslint ./packages/backend/src --ext .js ${lint_opt}
./node_modules/.bin/eslint ./packages/frontend/src --ext .js ${lint_opt}