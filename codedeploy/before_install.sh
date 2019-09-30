#!/bin/bash
sudo apt-get update
sudo npm install -g pm2

export app_root=/home/ubuntu/node

if [ -d "$app_root" ]; then
    rm -rf /home/ubuntu/node
    mkdir -p /home/ubuntu/node
else
    mkdir -p /home/ubuntu/node
fi