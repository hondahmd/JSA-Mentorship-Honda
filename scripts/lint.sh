#!/bin/bash
lint_opt=""
if [ "$1" = "fix" ]
then
  lint_opt="-fix" 
fi

cd packages/backend && npm run lint${lint_opt}
cd .. && cd frontend && npm run lint${lint_opt}