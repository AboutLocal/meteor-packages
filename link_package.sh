#!/bin/sh
command="ln -s $(pwd)/$1 /usr/local/meteor/packages/"
echo $command
$command
