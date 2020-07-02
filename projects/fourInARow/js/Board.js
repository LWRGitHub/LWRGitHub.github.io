class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }
    
	/**
	 * Creates an arr with the all x & y locations in the game 
	 * @return {array} of space objects
	 */
    createSpaces() {
        const arrSpaces = [];
		for (let x = 0; x < this.columns; x++) {
			const arrColumn = [];
			for (let y = 0; y < this.rows; y++) {
				const arrSpaces = new Space(x, y);
				arrColumn.push(arrSpaces);
			}
			arrSpaces.push(arrColumn);
		}
        return arrSpaces;
    }
    
	/**
	 * Uses an SVG to draw all game spaces
	 */
	drawHTMLBoard() {
        for (let column of this.spaces) {
            for (let space of column) {
                space.drawSVGSpace();
            }
        }
	} 
}
