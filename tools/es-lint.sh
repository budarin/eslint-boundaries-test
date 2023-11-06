#!/bin/sh

set -e

export ESLINT_PLUGIN_BOUNDARIES_DEBUG=1;
eslint ./src;
