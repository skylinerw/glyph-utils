# Glyph Utils for Minecraft

Contains (or will contain) a set of tools specific to Minecraft's glyphs.

`data/old_widths.bin` is for version 1.12.
`data/widths.bin` is for 19w02a.

See `example.html` for usage examples.

## Features

1. Read a predetermined format for glyph widths and store for later use. This is different from Minecraft's `glyph_sizes.bin`, which includes a starting and ending position. That information is irrelevant with the current features. Instead, each byte within `widths.bin/old_widths.bin` is a width, while the index is the character code.
2. Replicate Minecraft's `obfuscate` option for the text component.

## Future

1. Calculate total width of a line of text.
2. Generate a modified `glyph_sizes.bin`.
3. Allow injection of functions for grabbing stored data.
4. Minify & other efficiency changes.