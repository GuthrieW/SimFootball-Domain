function getStatNames() {
  var stats = [];

  $.each(careerStats, function(index, stat) {
    stats.push(stat.statName);
  });

  return stats;
}

const careerStats = [
  { statName: "Total Tackles", totallingMethod: "sum" },
  { statName: "Tackles For Loss", totallingMethod: "sum" },
  { statName: "Pass Deflections", totallingMethod: "sum" },
  { statName: "Interceptions", totallingMethod: "sum" },
  { statName: "Forced Fumbles", totallingMethod: "sum" },
  { statName: "Fumble Recoveries", totallingMethod: "sum" },
  { statName: "Total Touchdowns", totallingMethod: "sum" },
  { statName: "Punt Return Yards", totallingMethod: "sum" },
  { statName: "Kick Return Yards", totallingMethod: "sum" },
  { statName: "Receptions", totallingMethod: "sum" },
  { statName: "Receiving Yards", totallingMethod: "sum" },
  { statName: "Yards Per Reception", totallingMethod: "average" },
  { statName: "Receiving Touchdowns", totallingMethod: "sum" },
  { statName: "Rushing Yards", totallingMethod: "sum" },
  { statName: "Rush Average", totallingMethod: "average" },
  { statName: "Rushing Touchdowns", totallingMethod: "sum" },
  { statName: "Passing Attempts", totallingMethod: "sum" },
  { statName: "Passing Completions", totallingMethod: "sum" },
  { statName: "Pass Percentage", totallingMethod: "average" },
  { statName: "Passing Yards", totallingMethod: "sum" },
  { statName: "Passer Rating", totallingMethod: "average" },
  { statName: "Td-Int Ratio", totallingMethod: "average" },
  { statName: "Field Goals", totallingMethod: "sum" },
  { statName: "Field Goal Attempts", totallingMethod: "sum" },
  { statName: "Field Goal Percentage", totallingMethod: "average" },
  { statName: "Longest Field Goal", totallingMethod: "max" },
  { statName: "Punts", totallingMethod: "sum" },
  { statName: "Punting Yards", totallingMethod: "sum" },
  { statName: "Punting Average", totallingMethod: "average" },
  { statName: "Punts Inside 20", totallingMethod: "sum" },
  { statName: "Sacks", totallingMethod: "sum" },
  { statName: "Sacks Allowed", totallingMethod: "sum" },
  { statName: "Pancakes", totallingMethod: "sum" },
  { statName: "Defensive Touchdowns", totallingMethod: "sum" },
];
