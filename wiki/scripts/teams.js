// NSFL Teams
const ARIZONA = 'Arizona';
const AUSTIN = 'Austin';
const BALTIMORE = 'Baltimore';
const CHICAGO = 'Chicago';
const COLORADO = 'Colorado';
const HONOLULU = 'Honolulu';
const NEW_ORLEANS = 'New Orleans';
const ORANGE_COUNTY = 'Orange County';
const PHILADELPHIA = 'Philadelphia';
const SAN_JOSE = 'San Jose';
const SARASOTA = 'Sarasota';
const YELLOWKNIFE = 'Yellowknife';

// DSFL Teams
const DALLAS = 'Dallas';
const KANASA_CITY = 'Kansas City';
const LONDON = 'London';
const MINNESOTA = 'Minnesota';
const MYRTLE_BEACH = 'Myrtle Beach';
const NORFOLK = 'Norfolk';
const PALM_BEACH = 'Palm Beach';
const PORTLAND = 'Portland';
const SAN_ANTONIO = 'San Antonio';
const TIJUANA = 'Tijuana';

const nsflTeams = [{
    city: ARIZONA,
    name: 'Outlaws',
    abbreviation: 'AZ'
  },
  {
    city: AUSTIN,
    name: 'Copperheads',
    abbreviation: 'AUS'
  },
  {
    city: BALTIMORE,
    name: 'Hawks',
    abbreviation: 'BAL'
  },
  {
    city: CHICAGO,
    name: 'Butchers',
    abbreviation: 'CHI'
  },
  {
    city: COLORADO,
    name: 'Yeti',
    abbreviation: 'COL'
  },
  {
    city: HONOLULU,
    name: 'Hahalua',
    abbreviation: 'HON'
  },
  {
    city: NEW_ORLEANS,
    name: 'Secondline',
    abbreviation: 'NOLA'
  },
  {
    city: ORANGE_COUNTY,
    name: 'Otters',
    abbreviation: 'OCO'
  },
  {
    city: PHILADELPHIA,
    name: 'Liberty',
    abbreviation: 'PHI'
  },
  {
    city: SAN_JOSE,
    name: 'Sabrecats',
    abbreviation: 'SJS'
  },
  {
    city: SARASOTA,
    name: 'Sailfish',
    abbreviation: 'SAR'
  },
  {
    city: YELLOWKNIFE,
    name: 'Wraiths',
    abbreviation: 'YKW'
  }
];

const dsflTeams = [{
    city: DALLAS,
    name: 'Birddogs',
    abbreviation: 'DAL'
  },
  {
    city: KANASA_CITY,
    name: 'Coyotes',
    abbreviation: 'KCC'
  },
  {
    city: LONDON,
    name: 'Royals',
    abbreviation: 'LON'
  },
  {
    city: MINNESOTA,
    name: 'Grey Ducks',
    abbreviation: 'MIN'
  },
  {
    city: MYRTLE_BEACH,
    name: 'Buccanneers',
    abbreviation: 'MBB'
  },
  {
    city: NORFOLK,
    name: 'Seawolves',
    abbreviation: 'NOR'
  },
  {
    city: PALM_BEACH,
    name: 'Solar Bears',
    abbreviation: 'PBB'
  },
  {
    city: PORTLAND,
    name: 'Pythons',
    abbreviation: 'POR'
  },
  {
    city: SAN_ANTONIO,
    name: 'Marshalls',
    abbreviation: 'SAM'
  },
  {
    city: TIJUANA,
    name: 'Luchadores',
    abbreviation: 'TIJ'
  },
];

function getAllTeams() {
  return nsflTeams.concat(dsflTeams);
}

function getTeamsAsStrings(league) {
  var teamsArray = [];
  var teamsToAdd;

  if (league === BOTH) {
    teamsToAdd = getAllTeams();
  } else if (league === NSFL) {
    teamsToAdd = nsflTeams;
  } else if (league === DSFL) {
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

function getTeamLeague(team) {
  if (getTeamsAsStrings(NSFL).indexOf(team) > -1) {
    return NSFL;
  } else if (getTeamsAsStrings(DSFL).indexOf(team) > -1) {
    return DSFL;
  }

  return null;
}
