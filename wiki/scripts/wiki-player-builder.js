function generatePlayerWikiPage() {
  // name
  const firstName = $('#first-name-input').val();
  const middleName = $('#middle-name-input').val();
  const lastName = $('#last-name-input').val();

  // date of birth
  const dateOfBirth = $('#date-of-birth-input').val();

  // height & weight
  const heightFeet = $('#height-feet-input').val();
  const heightInches = $('#height-inches-input').val();
  const weight = $('#weight-input').val();

  // current team
  const currentTeam = $('#current-team-select').val();
  const currentTeamSince = $('#current-team-since-input').val();

  // birthplace
  const country = $('#country-select').val();
  const city = $('#city-input').val();

  // school information
  const collegeName = $('#college-full-name').val();
  const collegeAbbreviation = $('#college-abbreviation').val();
  const highSchoolName = $('#high-school-name').val();

  // combine information
  const combineLink = $('#combine-link-input').val();
  const combine40YardDash = $('#40-yard-dash-input').val();
  const combineShuttleRun = $('#shuttle-run-input').val();
  const combineConeDrill = $('#cone-drill-input').val();
  const combineBroadJump = $('#broad-jump-input').val();
  const combineBenchPress = $('#bench-press-input').val();
  const combineVertical = $('#vertical-input').val();
  const combineWonderlic = $('#wonderlic-input').val();

  // player game information
  const position = $('#position-select').val();
  const jerseyNumber = $('#jersey-number-input').val();

  // image information
  const iamgeFilename = $('#image-filename-input').val();
  const imageCaption = $('#image-caption-input').val();

  // nsfl draft information
  const nsflDraftTeam = $('#nsfl-team-drafted-by').val();
  const nsflDraftSeason = $('#nsfl-season-drafted').val();
  const nsflDraftRound = $('#nsfl-round-drafted').val();
  const nsflDraftPick = $('#nsfl-pick-drafted').val();

  // dsfl draft information
  const dsflDraftTeam = $('#dsfl-team-drafted-by').val();
  const dsflDraftSeason = $('#dsfl-season-drafted').val();
  const dsflDraftRound = $('#dsfl-round-drafted').val();
  const dsflDraftPick = $('#dsfl-pick-drafted').val();

  // team history
  const teamHistory = getTeamHistoryInformation();

  // player page
  const playerPageId = $('#player-page-id-input').val();

  // player story information
  const earlyYears = $('#early-years-textarea').val();
  const collegeSummary = $('#college-summary-textarea').val();
  const dsflSummary = $('#dsfl-summary-textarea').val();
  const nsflSummary = $('#nsfl-summary-textarea').val();

  // career highlights
  const careerHighlights = getCareerHighlightsInformation();
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
