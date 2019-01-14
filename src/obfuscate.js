/**
 * Replicates Minecraft's "obfuscate" option.
 */

class Obfuscate {

    /**
     * Requires the list of glyph sizes. By default, the "data/widths.bin" file.
     * 
     * @param {GlyphSizes} glyphSizes The container for glyph sizes.
     */

    constructor(glyphSizes) {

        this.sizes = glyphSizes;
    }

    /**
     * Transforms one character into another of the same width in Minecraft's unicode font.
     * 
     * @param {string} text The text to obfuscate.
     */

    obfuscate(text) {

        let replacement = '';

        // Loop through each character in the line.

        for (let i = 0, j = text.length; i < j; i++) {

            // Get the width of the current character.

            const charCode = text[i].charCodeAt(0);

            // Skip if it's a space.

            if (charCode === 32) {

                replacement += ' ';

                continue;
            }

            // Get the width of the current character.

            const width = this.sizes.getWidthForChar(charCode);

            // Get a replacement character and append it.

            replacement += String.fromCharCode(this.getRandomCharFromWidth(width));
        }

        // Return the completed replacement.
        
        return replacement;
    }

    /**
     * Returns a random char code (use fromCharCode()) that has the specified width.
     * 
     * @param {integer} width The width of the character to grab a new random character from.
     */

    getRandomCharFromWidth(width) {

        const chars = this.sizes.getCharsForWidth(width);

        return chars[Math.floor(Math.random() * chars.length)];
    }
}