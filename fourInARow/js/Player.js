class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }
    
	/**
	 * Creates as many tokens as the num in the paramiters & puts them in arr 
	 * @param {integer} num - number of tokens created
	 * @return {array} of tokens
	 */
    createTokens(num) {
        const arrTokens = [];
        for (let i = 0; i < num; i++) {
            let token = new Token(i, this);
            arrTokens.push(token);
        }
        return arrTokens;
    }
    
    
	/**
	 * Finds unused tokens
	 * @return {array} of unusedTokens
	 */
    get unusedTokens(){
        return this.tokens.filter(token => !token.dropped);
    }
    
    
	/**
	 * Picks one of the unsued tokens to use
	 * @return {object} of first token in the array
	 */
	get activeToken() {
        return this.unusedTokens[0];
    }
    

    /**
     * Check if a player has any undropped tokens left
     * @return {Boolean} 
     */
    checkTokens(){
        return this.unusedTokens.length == 0 ? false : true;
    }
}
