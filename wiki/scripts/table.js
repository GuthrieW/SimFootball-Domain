function addRowToHistoryTable() {
  const historyTableId = 'team-history-table';
  var element = $('#' + historyTableId);
  const numRows = getRowsInTable(historyTableId);
  const newRow = '<tr>' +
    '<td><select id="team-history-name-' + numRows + '-select" class="" name="Team History Name ' + numRows + '"></select></td>' +
    '<td><input id="team-history-joined-' + numRows + '-input" type="number" name="" value="" min="1"></td>' +
    '<td><input id="team-history-until-' + numRows + '-input" type="number" name="" value="" min="1"></td>' +
  '</tr>';
  $('#' + historyTableId + ' tr:last').after(newRow);
  populateSelectWithList('team-history-name-' + numRows + '-select', getTeamsAsStrings("both"), 'Select a Team');
  return;
}

function addRowToHighlightsTable() {
  const highlightsTableId = 'career-highlights-table';
  var element = $('#' + highlightsTableId);
  var numRows = getRowsInTable(highlightsTableId);
  var newRow = '<tr>' +
    '<td><input id="career-highlights-name-' + numRows + '-input" class="" name="Career Highlights Name ' + numRows + '"></td>' +
    '<td><select id="career-highlights-league-' + numRows + '-select" class="" name="Career Highlights League ' + numRows + '"></select></td>' +
    '<td><select id="career-highlights-seasons-' + numRows + '-select" class="" name="Career Highlights Seaasons '+ numRows + '"></select></td>' +
  '</tr>';
  $('#' + highlightsTableId + ' tr:last').after(newRow);
  populateSelectWithList('career-highlights-league-' + numRows + '-select', LEAGUE_NAMES, 'Select a League');
  populateSelectWithNumbers('career-highlights-seasons-' + numRows + '-select', 1, CURRENT_SEASON);
  return;
}

function removeRow(table) {
  var numRows = getRowsInTable(table);
  if (numRows <= 2) {
    return;
  }

  $('#' + table + ' tr:last').remove();
  return;
}

function getRowsInTable(table) {
  return $('#' + table + ' tr').length;
}
