var Game = (function() {
  function Game() {
    this.tickListeners = [];
  }

  Game.prototype.addTickListener = function(listener) {
    this.tickListeners.push(listener);
  }

  Game.prototype.removeTickListener = function(listener) {
    this.tickListeners.removeAt(this.tickListeners.indexOf(listener, 0));
  }

	Game.prototype.start = function() {
		this.__tick();
    setInterval(
      (function(self) { 
        return function() {
          self.__tick();
        }
      })(this), 
      100);
	}

	Game.prototype.__tick = function() {
    for (var i = this.tickListeners.length - 1; i >= 0; i--) {
      this.tickListeners[i].onTick()
    };
	}

	return Game;
})();

module.exports = Game;