var data_stats = [
  {name: "% Complete", progress: 0 },
  {name: "Morale", progress: 0 },
  {name: "Technical Debt", progress: 0 },
  {name: "Management", progress: 0 },
  {name: "Spend Rate", progress: 0 }
];

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

  Game.prototype.statistics = data_stats;

	Game.prototype.__tick = function() {
    for (var i = this.tickListeners.length - 1; i >= 0; i--) {
      this.tickListeners[i].onTick()
    };
	}

	return Game;
})();

module.exports = Game;