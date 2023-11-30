#!/bin/bash

echo -e "Enter the path to the file to import"
read the_path

declare -i i
i=0

while read line
do
  i+=1
  echo "$i: $line"
  ~/go/bin/packwiz modrinth add $line -y
done < $the_path
