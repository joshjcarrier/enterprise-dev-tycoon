var data_stats = [
  {name: "% Complete", progress: 0 },
  {name: "Morale", progress: 0 },
  {name: "Technical Debt", progress: 0 },
  {name: "Management", progress: 0 },
  {name: "Spend Rate", progress: 0 }
];

var Game = (function() {
  function Game() {
    this.updateListeners = [];
  }

  Game.prototype.addUpdateListener = function(listener) {
    this.updateListeners.push(listener);
  }

  Game.prototype.removeUpdateListener = function(listener) {
    this.updateListeners.removeAt(this.updateListeners.indexOf(listener, 0));
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
    for (var i = this.updateListeners.length - 1; i >= 0; i--) {
      this.updateListeners[i].update(this);
    };
	}

	return Game;
})();

module.exports = Game;