#!/usr/sbin/bash

/bin/pandoc ./generated.md --lua-filter=./remove_table.lua -o ./generated.ipynb
/bin/pandoc ./generated.md --lua-filter=./remove_code_blocks.lua -o./generated.pdf
/bin/pandoc ./generated.md --lua-filter=./remove_code_blocks.lua -o ./generated.md
