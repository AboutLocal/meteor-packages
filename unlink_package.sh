#!/bin/sh
PACKAGE_PATH=/usr/local/meteor/packages/$1
readlink $PACKAGE_PATH && rm $PACKAGE_PATH || echo Not a linked package: $PACKAGE_PATH
