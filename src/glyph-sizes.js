/**
 * Interfaces with glyph widths.
 */

class GlyphSizes {

    constructor(path) {

        // Allow for a different targeted file.

        if (typeof path !== 'string') {

            path = 'widths.bin';
        }
        
        // Populate widths from the file.

        this.populateWidths(path);
    }

    /**
     * Populates width arrays based on the specified filepath.
     * 
     * THIS CURRENTLY USES A VERY SPECIFIC FILE FORMAT.
     * 
     * Each byte in the binary file is a width. The index of the byte is the character code.
     * 
     * Maybe in the future I'll expand this to include user-specified functions. But for now the "widths.bin" is for 19w02a, while "old_widths.bin" is for 1.12.
     * 
     * @param {string} path Path within /data/ to get widths from.
     */

    populateWidths(path) {

        fetch('data/' + path)
            .then(res => res.arrayBuffer())
            .then(data => {
                var byteArray = new Uint8Array(data);

                this.rawWidths = byteArray;
                this.widths = [];

                for (let i = 0, j = byteArray.length; i < j; i++) {

                    if (!Array.isArray(this.widths[byteArray[i]])) {

                        this.widths[byteArray[i]] = [];
                    }

                    this.widths[byteArray[i]].push(i);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    /**
     * Returns the width of the specified character code (use charCodeAt()).
     * 
     * @param {integer} charCode The char code to find the width for.
     */

    getWidthForChar(charCode) {

        return this.rawWidths[charCode]; // TODO: isArray on an int, what was I thinking -_-
    }

    /**
     * Returns a list of all characters with the specified width.
     * 
     * @param {integer} width The width of the characters to return.
     */

    getCharsForWidth(width) {

        return this.widths[width];
    }
}