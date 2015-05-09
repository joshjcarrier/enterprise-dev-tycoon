var data_stats = {
  "PERCENT_COMPLETE": {name: "% Complete", value: 0, change_rate: 0.5 },
  "MORALE":           {name: "Morale", value: 0, change_rate: 2 },
  "TECH_DEBT":        {name: "Technical Debt", value: 0, change_rate: 1 },
  "MANAGEMENT":       {name: "Management", value: 0, change_rate: 1 },
  "SPEND_RATE":       {name: "Spend Rate", value: 0, change_rate: 5 }
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
      
      data_stats[id].value += deltas[id].delta * data_stats[id].change_rate;
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
        data_stats[id].value -= 1 * data_stats[id].change_rate;
      } else if (data_stats[id].value < 50) {
        data_stats[id].value += 1 * data_stats[id].change_rate;
      }
    }

    for (var i = this.updateListeners.length - 1; i >= 0; i--) {
      this.updateListeners[i].update(this);
    };
	}

	return Game;
})();

module.exports = Game;