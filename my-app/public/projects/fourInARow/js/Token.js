class Token {
    constructor(index, owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
    }
    
	/**
	 * Grabs the needed htmlToken
	 * @return {element} related to the token object
   	 */
    get htmlToken() {
        return document.getElementById(this.id);
    }
	
	/** 
	 * Finds off set left of element
	 * @return {number} of the this.htmlToken off set left 
	 */
    get offsetLeft() {
        return this.htmlToken.offsetLeft;
    }
    
	/**
	 * Prints the HTML token
	 */
    drawHTMLToken(){
        const token = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.owner.color;
    }
	
	/**
	 * Moves token left
	 */
    moveLeft() {
        if (this.columnLocation > 0) {
            this.htmlToken.style.left = this.offsetLeft - 76;
            //this.htmlToken.style.left = (this.columnLocation - 1) * 76;
            this.columnLocation --;
        } 
    }
    
	/**
	 * Moves token right
	 * @param {number} columns - number of columns in the game board
	 */
    moveRight(columns) {
        if (this.columnLocation < columns - 1) {
            console.log(this.offsetLeft);
            this.htmlToken.style.left = this.offsetLeft + 76;
            //this.htmlToken.style.left = (this.columnLocation + 1) * 76;
            this.columnLocation ++;
        }
    }
    
	/**
	 * Places the token in the corect spot
	 * @param {Object} spot - holds the spot to place token
	 * @param {function} reset - The reset function will happen affter token is placed
	 */
	drop(target, reset) {
        this.dropped = true;
        $(this.htmlToken).animate({
            top: (target.y * target.diameter)
        }, 750, 'easeOutBounce', reset);
	}
}