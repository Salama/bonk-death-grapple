#!/bin/bash
name="Death Grapple"
sname="bonk-death-grapple"
version="2.3.1"
description="Adds a new mode called Death Grapple"

tmp0=$(mktemp)

if [ ! -d build ]; then mkdir build; fi
cd build
rm "$sname".*

csplit ../injector.js /\/\*\*\*REPLACERS\*\*\*/
cat xx00 > "$tmp0"
cat ../mod/replacers.js >> "$tmp0"
cat xx01 | tail -n+2 >> "$tmp0"
csplit "$tmp0" /\/\*\*\*CONSTANTS\*\*\*/
cat xx00 > "$tmp0"
cat ../mod/constants.js >> "$tmp0"
cat xx01 | tail -n+2 >> "$tmp0"
cp "$tmp0" injector.js

cat ../manifest.json | jq ".name=\"$name\" | .version=\"$version\" | .description=\"$description\"" > manifest.json

cp ../loadInjector.js loadInjector.js
cp ../runInjectors.js runInjectors.js
cp ../background.js background.js

7z a -tzip "$sname.zip" manifest.json injector.js loadInjector.js runInjectors.js background.js

csplit ../userscript.js /\/\*\*\*REPLACERS\*\*\*/
cat xx00 > "$tmp0"
cat ../mod/replacers.js >> "$tmp0"
cat xx01 | tail -n+2 >> "$tmp0"
csplit "$tmp0" /\/\*\*\*CONSTANTS\*\*\*/
cat xx00 > "$tmp0"
cat ../mod/constants.js >> "$tmp0"
cat xx01 | tail -n+2 >> "$tmp0"
cat "$tmp0" | sed "s#/\*\*\*NAME\*\*\*/#$name#g" | sed "s#/\*\*\*SNAME\*\*\*/#$sname#g" | sed "s#/\*\*\*VERSION\*\*\*/#$version#g" | sed "s#/\*\*\*DESCRIPTION\*\*\*/#$description#g" > "$sname.user.js"
rm xx00 xx01 "$tmp0" manifest.json injector.js loadInjector.js runInjectors.js background.js
