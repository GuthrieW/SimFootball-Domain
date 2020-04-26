function generatePlayerWikiPage() {
  const playerInformation = getPlayerInformation();
  const playerWikiPageString = addPlayerInformationToWikiPage(playerInformation);

  // need to figure out what to do here
  console.log(playerWikiPageString);

}

function checkForImageFilename(imageFilename) {
  if (imageFilename) {
    return true;
  } else {
    return false;
  }
}

function createLinkToWikiPage(text, wikiPageName) {
  return `[[wp:${text}|${wikiPageName}]]`;
}

function createSeasonLink(league, season) {
  return `{{${league}|${season}}}`;
}

function createMultipleSeasonLinks(league, seasons) {
  var seasonLinks = '(';
  var firstLink = true;

  for (season of seasons) {
    if (firstLink) {
      firstLink = false;
      seasonLinks += `{{${league}|${season}}}`;
    } else {
      seasonLinks += `, {{${league}|${season}}}`;
    }
  }
  seasonLinks += ')';

  return seasonLinks;
}

function createSeasonDraftLink(league, season) {
  return `{{${league}|${season}|d}}`;
}

function concatenatePlayerName(first, middle, last) {
  var fullName = '';

  if (first) {
    fullName += first + ' ';
  }

  if (middle) {
    fullName += middle + ' ';
  }

  if (last) {
    fullName += last;
  }

  return fullName;
}

function createTeamHistory(teamHistory) {
  var teamHistoryString = '';
  for (team of teamHistory) {
    const league = getTeamLeague(team);
    teamHistoryString += `\n* [[${teamHistory.name}]] ${createSeasonLink(league, teamHistory.joined)}-${createSeasonLink(league, teamHistory.until)}`;
  }

  return teamHistoryString;
}

function createCareerHighlights(careerHighlights) {
  var careerHighlightsString = '';
  for (highlight of careerHighlights) {
    careerHighlightsString += `\n* [[${highlight.league} ${highlight.name}]] ${createMultipleSeasonLinks(highlight.league, highlight.seasons)}`;
  }

  return careerHighlightsString;
}

function createSummary(league, summary) {
  if (summary.split(' ').length >= 150) {
    return `===${league} career===
    ${summary}`;
  } else {
    return '';
  }
}

function createCurrentContractSituation(currentTeam) {
  if (currentTeam != null) {
    return `for the [[${currentTeam}]] of the [[National Simulation Football League]] (NSFL).`;
  }

  return 'who is currently a free agent';
}

function createStatsTable(playerStats) {
  var playerStatsTable = '';
  var nsflStats = '';
  var dsflStats = '';
  var statCounter = 1;

  for (stat in playerStats) {
    nsflStats += `| statlabel${statCounter} = [[wp:${statToWikipediaLink(stat.name)}|${stat.name}]]
    | statvalue${statCounter} = ${nsflTotal}`;

    dsflStats += `| statlabel${statCounter} = [[wp:${statToWikipediaLink(stat.name)}|${stat.name}]]
    | statvalue${statCounter} = ${dsflTotal}`;
  }

  playerStatsTable += ` | statleague = NSFL
  | statweek = ${playerInformation.careerStatsWeek}
  | statseason = ${playerInformation.careerStatsSeason}\n`;
  playerStatsTable += nsflStats + '\n' + dsflStats;

  return playerStatsTable;
}

function addPlayerInformationToWikiPage(playerInformation) {
  return `{{pending}}
{{Infobox NSFL biography
| name                = ${concatenatePlayerName(playerInformation.firstName, playerInformation.middleName, playerInformation.lastName)}
| image               = ${playerInformation.imageFilename}
| image_size          = 250px
| alt                 = ${checkForImageFilename(playerInformation) ? 'Image of ' + concatenatePlayerName(playerInformation) : ''}
| caption             = ${playerInformation.imageCaption}
| number              = ${playerInformation.jerseyNumber}
| current_team        = ${playerInformation.currentTeam}
| position            = ${playerInformation.position}
| birth_date          = {{birth date and age2|{{CurrentDate/yy}}|{{CurrentDate/mm}}|{{CurrentDate/dd}}|${playerInformation.birthYear}|${monthNumberToName(playerInformation.birthMonth)}|${playerInformation.birthDay}}}
| birth_place         = ${playerInformation.city}, ${playerInformation.country}
| death_date          =
| death_place         =
| height_ft           = ${playerInformation.heightFeet}
| height_in           = ${playerInformation.heightInches}
| weight_lb           = ${playerInformation.weight}
| high_school         = ${playerInformation.highSchoolName}
| college             = ${createLinkToWikiPage(playerInformation.collegeName, playerInformation.collegeName)}
| draftyear           = ${createSeasonDraftLink(NSFL, playerInformation.nsflDraftSeason)}
| draftround          = ${playerInformation.nsflDraftRound}
| draftpick           = ${playerInformation.nsflDraftPick}
| dsfldraftyear       = ${createSeasonDraftLink(DSFL, playerInformation.dsflDraftSeason)}
| dsfldraftround      = ${playerInformation.dsflDraftRound}
| dsfldraftpick       = ${playerInformation.dsflDraftPick}
| pastteams           = ${createTeamHistory(playerInformation.teamHistory)}
| pastteamsnote       = no
| status              = Active <!-- only other option here should be Retired -->
| highlights          = ${createCareerHighlights(playerInformation.careerHighlights)}
}}
''' ${concatenatePlayerName(playerInformation)}''' (born ${monthNumberToName(playerInformation.birthMonth)} ${playerInformation.birthDay}, ${playerInformation.birthYear}) is an [[wp:American football|American football]] [[wp:${positionToWikipediaLink(playerInformation.position)}|${playerInformation.position}]] ${createCurrentContractSituation(playerInformation.currentTeam)}. Before beginning his professional career he played college football for ${playerInformation.collegeName} (${playerInformation.collegeAbbreviation}).
==Early years==
${playerInformation.earlyYears}
==College career==
${playerInformation.collegeSummary}
==College career statistics==
Use [[Blank:StatsTables|this page]] to get the stats table template.
==Professional career==
${createSummary('DSFL', playerInformation.dsflSummary)}
${createSummary('NSFL', playerInformation.dsflSummary)}
{{NSFL predraft
|    height ft = ${playerInformation.heightFeet}
|    height in = ${playerInformation.heightInches}
|       weight = ${playerInformation.weight}
|         dash = ${playerInformation.combine40YardDash}
|      shuttle = ${playerInformation.combineShuttleRun}
|   cone drill = ${playerInformation.combineConeDrill}
|     vertical = ${playerInformation.combineVertical}
|     broad ft = ${playerInformation.combineBroadJumpFeet}
|     broad in = ${playerInformation.combineBroadJumpInches}
|        bench = ${playerInformation.combineBenchPress}
|    wonderlic = ${playerInformation.combineWonderlic}
|         note =
}}
===Professional career statistics===
Use [[Blank:StatsTables|this page]] to get the stats table template.
==Achievements and records==
Use [[Antoine_Delacour#Achievements_and_Records|this section]] as an example.`;
}

function getPlayerInformation() {
  var playerInformation = {};

  // name
  playerInformation.firstName = $('#first-name-input').val();
  playerInformation.middleName = $('#middle-name-input').val();
  playerInformation.lastName = $('#last-name-input').val();

  // date of birth
  var dateInfo = $('#date-of-birth-input').val().split("-");
  playerInformation.birthYear = dateInfo[0];
  playerInformation.birthMonth = dateInfo[1];
  playerInformation.birthDay = dateInfo[2];

  // height & weight
  playerInformation.heightFeet = $('#height-feet-input').val();
  playerInformation.heightInches = $('#height-inches-input').val();
  playerInformation.weight = $('#weight-input').val();

  // current team
  playerInformation.currentTeam = $('#current-team-select').val();
  playerInformation.currentTeamSince = $('#current-team-since-input').val();

  // birthplace
  playerInformation.country = $('#country-select').val();
  playerInformation.city = $('#city-input').val();

  // school information
  playerInformation.collegeName = $('#college-full-name').val();
  playerInformation.collegeAbbreviation = $('#college-abbreviation').val();
  playerInformation.highSchoolName = $('#high-school-name').val();

  // combine information
  playerInformation.combineLink = $('#combine-link-input').val();
  playerInformation.combine40YardDash = $('#40-yard-dash-input').val();
  playerInformation.combineShuttleRun = $('#shuttle-run-input').val();
  playerInformation.combineConeDrill = $('#cone-drill-input').val();
  playerInformation.combineBroadJumpFeet = $('#broad-jump-feet-input').val();
  playerInformation.combineBroadJumpInches = $('#broad-jump-inches-input').val();
  playerInformation.combineBenchPress = $('#bench-press-input').val();
  playerInformation.combineVertical = $('#vertical-input').val();
  playerInformation.combineWonderlic = $('#wonderlic-input').val();

  // player game information
  playerInformation.position = $('#position-select').val();
  playerInformation.jerseyNumber = $('#jersey-number-input').val();

  // image information
  playerInformation.imageFilename = $('#image-filename-input').val();
  playerInformation.imageCaption = $('#image-caption-input').val();

  // nsfl draft information
  playerInformation.nsflDraftTeam = $('#nsfl-team-drafted-by').val();
  playerInformation.nsflDraftSeason = $('#nsfl-season-drafted').val();
  playerInformation.nsflDraftRound = $('#nsfl-round-drafted').val();
  playerInformation.nsflDraftPick = $('#nsfl-pick-drafted').val();

  // dsfl draft information
  playerInformation.dsflDraftTeam = $('#dsfl-team-drafted-by').val();
  playerInformation.dsflDraftSeason = $('#dsfl-season-drafted').val();
  playerInformation.dsflDraftRound = $('#dsfl-round-drafted').val();
  playerInformation.dsflDraftPick = $('#dsfl-pick-drafted').val();

  // team history
  playerInformation.teamHistory = getTeamHistoryInformation();

  // player page
  playerInformation.playerPageId = $('#player-page-id-input').val();

  // player story information
  playerInformation.earlyYears = $('#early-years-textarea').val();
  playerInformation.collegeSummary = $('#college-summary-textarea').val();
  playerInformation.dsflSummary = $('#dsfl-summary-textarea').val();
  playerInformation.nsflSummary = $('#nsfl-summary-textarea').val();

  // career highlights
  playerInformation.careerHighlights = getCareerHighlightsInformation();

  playerInformation.careerStats = getStatsInformation();
  playerInformation.careerStatsSeason = $('#stats-update-until-season').val();
  playerInformation.careerStatsWeek = $('#stats-update-until-week').val();

  return playerInformation;
}

function getCareerHighlightsInformation() {
  const numRows = getNumberOfRowsInTable('career-highlights-table');
  var i;
  var careerHighlights = [];

  for (i = 1; i < numRows; i++) {
    const careerHighlightName = $('#career-highlights-name-' + i + '-input').val();
    const careerHighlightLeague = $('#career-highlights-league-' + i + '-select').val();
    const careerHighlightSeasons = $('#career-highlights-season-' + i + '-select').val();

    careerHighlights.push({
      name: careerHighlightName,
      league: careerHighlightLeague,
      seasons: careerHighlightSeasons
    })
  }

  return careerHighlights;
}

function getTeamHistoryInformation() {
  const numRows = getNumberOfRowsInTable('team-history-table');
  var i;
  var teamHistory = [];

  for (i = 1; i < numRows; i++) {
    const rowTeamName = $('#team-history-name-' + i + '-select').val();
    const rowTeamJoined = $('#team-history-joined-' + i + '-input').val();
    const rowTeamUntil = $('#team-history-until-' + i + '-input').val();

    teamHistory.push({
      name: rowTeamName,
      joined: rowTeamJoined,
      until: rowTeamUntil
    });
  }

  return teamHistory;
}

function getStatsInformation() {
  const rows = getRowsInTable('stats-table');
  var i;
  var stats = [];

  for (row in rows) {
    const inputs = $('#' + row.id + ' > td > input');
    var stats = {};
    for (input of inputs) {
      stats.push({
        name: input[0].val(),
        dsflTotal: input[1].val(),
        nsflTotal: input[2].val()
      })
    }
  }

  return;
}


function monthNumberToName(number) {
  switch(number) {
    case 1:
      return 'January';
    case 2:
      return 'February';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'August';
    case 9:
      return 'September';
    case 10:
      return 'October';
    case 11:
      return 'November';
    case 12:
      return 'December';
    default:
      return 'Choose a Birth Month';
  }
}
