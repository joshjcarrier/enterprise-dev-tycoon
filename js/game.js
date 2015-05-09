var data_stats = {
  "PERCENT_COMPLETE": {name: "% Complete", value: 0 },
  "MORALE":           {name: "Morale", value: 0 },
  "TECH_DEBT":        {name: "Technical Debt", value: 0 },
  "MANAGEMENT":       {name: "Management", value: 0 },
  "SPEND_RATE":       {name: "Spend Rate", value: 0 }
};

var Game = (function() {
  function Game() {
    this.updateListeners = [];
  }

  Game.prototype.update = function(action) {
    console.log("Game#update: " + action.name);
    var deltas = action.deltas;
    for (var id in deltas) {
      if(data_stats[id].value > 100) {
        data_stats[id].value = 100;
      }
      
      data_stats[id].value += deltas[id].delta;
    }
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
    // simulation
    for (var id in data_stats) {
      if (data_stats[id].value > 50) {
        data_stats[id].value -= 1;
      } else if (data_stats[id].value < 50) {
        data_stats[id].value += 1;
      }
    }

    for (var i = this.updateListeners.length - 1; i >= 0; i--) {
      this.updateListeners[i].update(this);
    };
	}

	return Game;
})();

module.exports = Game;