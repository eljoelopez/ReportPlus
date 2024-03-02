#!/usr/sbin/bash

/bin/pandoc ./generated.md -o ./generated.ipynb
/bin/pandoc ./generated.md --lua-filter=./remove_code_blocks.lua -o ./generated.md
