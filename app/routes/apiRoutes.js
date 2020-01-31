var coffees = require("../data/coffees");

module.exports = function(app) {
  app.get("/api/coffees", function(req, res) {
    res.json(coffees);
  });

  app.post("/api/coffees", function(req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      coffeeDifference: Infinity
    };
    var userData = req.body;
    var userScores = userData.scores;

    var totalDifference;

    for (var i = 0; i < coffees.length; i++) {
      var currentCoffee = coffees[i];
      totalDifference = 0;

      console.log(currentCoffee.name);

      for (var j = 0; j < currentCoffe.scores.length; j++) {
        var currentCoffeeScore = currentCoffee.scores[j];
        var currentUserScore = userScores[j];

        totalDifference += Math.abs(
          parseInt(currentUserScore) - parseInt(currentCoffeeScore)
        );
      }

      if (totalDifference <= bestMatch.coffeeDifference) {
        bestMatch.name = currentCoffe.name;
        bestMatch.photo = currentCoffee.photo;
        bestMatch.coffeeDifference = totalDifference;
      }
    }

    coffees.push(userData);

    res.json(bestMatch);
  });
};
