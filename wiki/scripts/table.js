function addRow(table) {
  var element = $('#' + table);
  var numRows = getRowsInTable(table);
  var newRow = '<tr>' +
  '<td><select id="team-history-name-' + numRows + '-select" class="" name="Team History Name ' + numRows + '"></select></td>' +
  '<td><input id="team-history-joined-' + numRows + '-input" type="number" name="" value="" min="1"></td>' +
  '<td><input id="team-history-until-' + numRows + '-input" type="number" name="" value="" min="1"></td>' +
  '</tr>';
  $('#' + table + ' tr:last').after(newRow);
  populateSelect('team-history-name-' + numRows + '-select', getTeamsAsStrings("both"), 'Select a Team');
  return;
}

function removeRow(table) {
  var numRows = getRowsInTable(table);
  console.log(numRows);
  if (numRows <= 2) {
    return;
  }

  $('#' + table + ' tr:last').remove();
  return;
}

function getRowsInTable(table) {
  return $('#' + table + ' tr').length;
}
