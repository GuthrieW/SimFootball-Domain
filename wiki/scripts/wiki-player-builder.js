function generatePlayerWikiPage() {
  const playerInformation = getPlayerInformation();
  const playerWikiPageString = addPlayerInformationToWikiPage(playerInformation);

  // need to figure out what to do here
  console.log (playerWikiPageString);

}

function checkForImageFilename(playerInformation) {
  if (playerInformation.iamgeFilename) {
    return 'Image of ' + concatenatePlayerName(playerInformation);
  } else {
    return '';
  }
}

function concatenatePlayerName(playerInformation) {
  var fullName = '';

  if (playerInformation.firstName) {
    fullName += playerInformation.firstName + ' ';
  }

  if (playerInformation.middleName) {
    fullName += playerInformation.middleName + ' ';
  }

  if (playerInformation.lastName) {
    fullName += playerInformation.lastName;
  }

  return fullName;
}

function addPlayerInformationToWikiPage(playerInformation) {
  return `{{pending}}
    {{Infobox NSFL biography
    | name                = ${concatenatePlayerName(playerInformation)}
    | image               = ${playerInformation.iamgeFilename}
    | image_size          = 250px
    | alt                 = ${checkForImageFilename(playerInformation)}
    | caption             =
    | number              =
    | current_team        =
    | position            =
    | birth_date          = {{birth date and age2|{{CurrentDate/yy}}|{{CurrentDate/mm}}|{{CurrentDate/dd}}|2000|1|1}}
    | birth_place         =
    | death_date          = <!-- not needed unless the player is actually dead -->
    | death_place         = <!-- in such cases, DM 37thchamber; we don't have a death date template yet -->
    | height_ft           =
    | height_in           =
    | weight_lb           =
    | high_school         =
    | college             =
    | draftyear           =
    | draftround          =
    | draftpick           =
    | dsfldraftyear       =
    | dsfldraftround      =
    | dsfldraftpick       =
    | pastteams           =
    | pastteamsnote       = no
    | status              = Active <!-- only other option here should be Retired -->
    | highlights          =
    }}
    ''' ${concatenatePlayerName(playerInformation)} ''' (born January 1, 1900) is an [[wp:American football|American football]] [[wp:Quarterback|quarterback]] who is currently a free agent.
    ==Early years==
    ==College career==
    ==College career statistics==
    Use [[Blank:StatsTables|this page]] to get the stats table template.
    ==Professional career==
    {{NSFL predraft
    |    height ft =
    |    height in =
    |       weight =
    |         dash =
    |      shuttle =
    |   cone drill =
    |     vertical =
    |     broad ft =
    |     broad in =
    |        bench =
    |    wonderlic =
    |         note =
    }}
    ===Professional career statistics===
    Use [[Blank:StatsTables|this page]] to get the stats table template.
    ==Achievements and records==
    Use [[Antoine_Delacour#Achievements_and_Records|this section]] as an example.

    [[Category:Unsigned players]]
    [[Category:Runningbacks]]`;
}

function getPlayerInformation() {
  var playerInformation = {};

  // name
  playerInformation.firstName = $('#first-name-input').val();
  playerInformation.middleName = $('#middle-name-input').val();
  playerInformation.lastName = $('#last-name-input').val();

  // date of birth
  playerInformation.dateOfBirth = $('#date-of-birth-input').val();

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
  playerInformation.combineBroadJump = $('#broad-jump-input').val();
  playerInformation.combineBenchPress = $('#bench-press-input').val();
  playerInformation.combineVertical = $('#vertical-input').val();
  playerInformation.combineWonderlic = $('#wonderlic-input').val();

  // player game information
  playerInformation.position = $('#position-select').val();
  playerInformation.jerseyNumber = $('#jersey-number-input').val();

  // image information
  playerInformation.iamgeFilename = $('#image-filename-input').val();
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

  return playerInformation;
}

function getCareerHighlightsInformation() {
  const numRows = getRowsInTable('career-highlights-table');

  var i;
  var careerHighlights = [];
  for (i = 1; i < numRows; i++) {
    const careerHighlightName = $('').val();
    const careerHighlightLeague = $('').val();
    const careerHighlightSeasons = $('').val();

    careerHighlights.push({
      name: careerHighlightName,
      league: careerHighlightLeague,
      seasons: careerHighlightSeasons
    })
  }

  return careerHighlights;
}

function getTeamHistoryInformation() {
  const numRows = getRowsInTable('team-history-table');

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
