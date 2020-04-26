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

function statToWikipediaLink(stat) {
  switch (stat) {
    case "Total Tackles": return 'wp:Tackle_(football_move)#American_and_Canadian_football';
    case "Tackles For Loss": return 'wp:Tackle_(football_move)#American_and_Canadian_football';
    case "Pass Deflections": return 'wp:Pass deflections';
    case "Interceptions": return 'wp:Interceptions';
    case "Forced Fumbles": return 'wp:Fumble';
    case "Fumble Recoveries": return 'wp:Fumble';
    case "Total Touchdowns": return 'wp:Touchdown';
    case "Punt Return Yards": return 'wp:Return yards';
    case "Kick Return Yards": return 'wp:Return yards';
    case "Receptions": return 'wp:Reception_(gridiron_football)';
    case "Receiving Yards": return 'wp:Reception_(gridiron_football)';
    case "Yards Per Reception": return 'wp:Reception_(gridiron_football)';
    case "Receiving Touchdowns": return 'wp:Touchdown';
    case "Rushing Yards": return 'wp:Rush (gridiron football)';
    case "Rush Average": return 'wp:Rush (gridiron football)';
    case "Rushing Touchdowns": return 'wp:Forward pass';
    case "Passing Attempts": return 'wp:Forward pass';
    case "Passing Completions": return 'wp:Forward pass';
    case "Pass Percentage": return 'wp:Forward pass';
    case "Passing Yards": return 'wp:Forward pass';
    case "Passer Rating": return 'wp:Passer rating';
    case "Td-Int Ratio": return 'wp:Touchdown';
    case "Field Goals": return 'wp:Field goal';
    case "Field Goal Attempts": return 'wp:Field goal';
    case "Field Goal Percentage": return 'wp:Field goal';
    case "Longest Field Goal": return 'wp:Field goal';
    case "Punts": return 'wp:Punt';
    case "Punting Yards": return 'wp:Punt';
    case "Punting Average": return 'wp:Punt';
    case "Punts Inside 20": return 'wp:Punt';
    case "Sacks": return 'wp:Sack';
    case "Sacks Allowed": return 'wp:Sack';
    case "Pancakes": return 'wp:Glossary_of_American_football#pancake';
    case "Defensive Touchdowns": return 'wp:Touchdown';
    default: return 'wp:';
  }
}
