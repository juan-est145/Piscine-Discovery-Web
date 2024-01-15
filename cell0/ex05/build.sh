#!/bin/bash

if [ "$#" -eq 0 ]; then
    echo "No arguments supplied"
else
iterator=0
while [ $iterator -le "$#" ]
do
    mkdir ex$i
    ((i++))
done
fi