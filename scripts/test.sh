#!/bin/bash
root=$(pwd)
echo $root
test_packages=()
if [ "$1" = "backend" ]
then
  test_packages[0]="backend"
elif [ "$1" = "frontend" ]
then
  test_packages[0]="frontend"
else
  test_packages=("backend" "frontend")
fi

for var in ${test_packages[@]}
do
  cd $root/packages/$var && yarn test
done