const game = new Game();

/**
 * Calls startGame() upon #begin-game getting 'clicked'
 */
document.getElementById('begin-game').addEventListener('click', function(){
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

/**
 * Event listener for keydown
 */
document.addEventListener('keydown', (e) => {
    game.handleKeydown(e);
});
