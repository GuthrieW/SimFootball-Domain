const careerStats = [
  { statName: 'Total Tackles', totallingMethod: 'sum', wikipediaLink: 'wp:Tackle_(football_move)#American_and_Canadian_football' },
  { statName: 'Tackles For Loss', totallingMethod: 'sum', wikipediaLink: 'wp:Tackle_(football_move)#American_and_Canadian_football' },
  { statName: 'Pass Deflections', totallingMethod: 'sum', wikipediaLink: 'wp:Pass deflections' },
  { statName: 'Interceptions', totallingMethod: 'sum', wikipediaLink: 'wp:Interceptions' },
  { statName: 'Forced Fumbles', totallingMethod: 'sum', wikipediaLink: 'wp:Fumble' },
  { statName: 'Fumble Recoveries', totallingMethod: 'sum', wikipediaLink: 'wp:Fumble' },
  { statName: 'Total Touchdowns', totallingMethod: 'sum', wikipediaLink: 'wp:Touchdown' },
  { statName: 'Punt Return Yards', totallingMethod: 'sum', wikipediaLink: 'wp:Return yards' },
  { statName: 'Kick Return Yards', totallingMethod: 'sum', wikipediaLink: 'wp:Return yards' },
  { statName: 'Receptions', totallingMethod: 'sum', wikipediaLink: 'wp:Reception_(gridiron_football)' },
  { statName: 'Receiving Yards', totallingMethod: 'sum', wikipediaLink: 'wp:Reception_(gridiron_football)' },
  { statName: 'Yards Per Reception', totallingMethod: 'average', wikipediaLink: 'wp:Reception_(gridiron_football)' },
  { statName: 'Receiving Touchdowns', totallingMethod: 'sum', wikipediaLink: 'wp:Touchdown' },
  { statName: 'Rushing Yards', totallingMethod: 'sum', wikipediaLink: 'wp:Rush (gridiron football)' },
  { statName: 'Rush Average', totallingMethod: 'average', wikipediaLink: 'wp:Rush (gridiron football)' },
  { statName: 'Rushing Touchdowns', totallingMethod: 'sum', wikipediaLink: 'wp:Forward pass' },
  { statName: 'Passing Attempts', totallingMethod: 'sum', wikipediaLink: 'wp:Forward pass' },
  { statName: 'Passing Completions', totallingMethod: 'sum', wikipediaLink: 'wp:Forward pass' },
  { statName: 'Pass Percentage', totallingMethod: 'average', wikipediaLink: 'wp:Forward pass' },
  { statName: 'Passing Yards', totallingMethod: 'sum', wikipediaLink: 'wp:Forward pass' },
  { statName: 'Passer Rating', totallingMethod: 'average', wikipediaLink: 'wp:Passer rating' },
  { statName: 'Td-Int Ratio', totallingMethod: 'average', wikipediaLink: 'wp:Touchdown' },
  { statName: 'Field Goals', totallingMethod: 'sum', wikipediaLink: 'wp:Field goal' },
  { statName: 'Field Goal Attempts', totallingMethod: 'sum', wikipediaLink: 'wp:Field goal' },
  { statName: 'Field Goal Percentage', totallingMethod: 'average', wikipediaLink: 'wp:Field goal' },
  { statName: 'Longest Field Goal', totallingMethod: 'max', wikipediaLink: 'wp:Field goal' },
  { statName: 'Punts', totallingMethod: 'sum', wikipediaLink: 'wp:Punt' },
  { statName: 'Punting Yards', totallingMethod: 'sum', wikipediaLink: 'wp:Punt' },
  { statName: 'Punting Average', totallingMethod: 'average', wikipediaLink: 'wp:Punt' },
  { statName: 'Punts Inside 20', totallingMethod: 'sum', wikipediaLink: 'wp:Punt' },
  { statName: 'Sacks', totallingMethod: 'sum', wikipediaLink: 'wp:Sack' },
  { statName: 'Sacks Allowed', totallingMethod: 'sum', wikipediaLink: 'wp:Sack' },
  { statName: 'Pancakes', totallingMethod: 'sum', wikipediaLink: 'wp:Glossary_of_American_football#pancake' },
  { statName: 'Defensive Touchdowns', totallingMethod: 'sum', wikipediaLink: 'wp:Touchdown' },
];

function getStatNames() {
  var stats = [];

  $.each(careerStats, function(index, stat) {
    stats.push(stat.statName);
 });

  return stats;
}

function statToWikipediaLink(stat) {
  for (careerStat of careerStats) {
    if (careerStat.statName === stat) {
      return careerStat.wikipediaLink;
    }
  }
  return 'wp:';
}
