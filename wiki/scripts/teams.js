function getAllTeams() {
  return $.merge(nsflTeams, dsflTeams);
}

function getTeamsAsStrings(league) {
  var teamsArray = [];
  var teamsToAdd;

  if (league === 'both') {
    teamsToAdd = getAllTeams();
  } else if (league === 'nsfl') {
    teamsToAdd = nsflTeams;
  } else if (league === 'dsfl') {
    teamsToAdd = dsflTeams;
  }

  $.each(teamsToAdd, function(index, team) {
    teamsArray.push(concatenateCityAndName(team));
  });

  return teamsArray;
}

function concatenateCityAndName(team) {
  return team.city + " " + team.name;
}

const nsflTeams = [
  { city: 'Arizona', name: 'Outlaws', abbreviation: 'AZ' },
  { city: 'Austin', name: 'Copperheads', abbreviation: 'AUS'},
  { city: 'Baltimore', name: 'Hawks', abbreviation: 'BAL'},
  { city: 'Colorado', name: 'Yeti', abbreviation: 'COL'},
  { city: 'Honolulu', name: 'Hahalua', abbreviation: 'HON'},
  { city: 'New Orleans', name: 'Secondline', abbreviation: 'NOLA'},
  { city: 'Orange County', name: 'Otters', abbreviation: 'OCO'},
  { city: 'Philadelphia', name: 'Liberty', abbreviation: 'PHI'},
  { city: 'San Jose', name: 'Sabrecats', abbreviation: 'SJS'},
  { city: 'Sarasota', name: 'Sailfish', abbreviation: 'SAR'},
  { city: 'Yellowknife', name: 'Wraiths', abbreviation: 'YKW'}
];

const dsflTeams = [
  { city: 'Dallas', name: 'Birddogs', abbreviation: 'DAL'},
  { city: 'Kansas City', name: 'Coyotes', abbreviation: 'KCC'},
  { city: 'London', name: 'Royals', abbreviation: 'LON'},
  { city: 'Minnesota', name: 'Grey Ducks', abbreviation: 'MIN'},
  { city: 'Myrtle Beach', name: 'Buccanneers', abbreviation: 'MBB'},
  { city: 'Norfolk', name: 'Seawolves', abbreviation: 'NOR'},
  { city: 'Palm Beach', name: 'Solar Bears', abbreviation: 'PBB'},
  { city: 'Portland', name: 'Pythons', abbreviation: 'POR'},
  { city: 'San Antonio', name: 'Marshalls', abbreviation: 'SAM'},
  { city: 'Tijuana', name: 'Luchadores', abbreviation: 'TIJ'},
];
