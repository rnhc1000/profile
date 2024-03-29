#!/bin/bash
for file in images/*; 
	do cwebp -q 90 "$file" -o "${file}.webp" ; 
done
