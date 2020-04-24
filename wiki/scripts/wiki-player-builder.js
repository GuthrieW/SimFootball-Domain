
/* select methods */
function populateSelect(selectId, options, defaultOption = 'Select an option') {
  emptySelect(selectId);
  appendOptionToSelect(selectId, defaultOption);
  $.each(options, function(index, option) {
    appendOptionToSelect(selectId, option);
  });

  return;
}

function appendOptionToSelect(selectId, option) {
  $('#' + selectId).append($('<option/>', {
    value: option,
    text: option
  }));

  return;
}

function emptySelect(selectId) {
  $('#' + selectId).empty();

  return;
}

/* table methods */
function addRow(table) {
  var element = $('#' + table);
  var numRows = getRowsInTable(table);
  var newRow = "<tr><td><select id=\"team-history-name-${numRows}-select\" class=\"\" name=\"Team History Name ${numRows}\"></select></td><td><input id=\"team-history-joined-${numRows}-input\" type=\"number\" name=\"\" value=\"\" min=\"1\"></td><td><input id=\"team-history-until-${numRows}-input\" type=\"number\" name=\"\" value=\"\" min=\"1\"></td></tr>";
  $('#' + table + ' tr:last').after(newRow);
  return;
}

function removeRow(table) {
  console.log(table);

  var numRows = getRowsInTable(table);
  console.log(numRows);
  if (numRows <= 2) {
    return;
  }

  console.log(table);
  $('#' + table + ' tr:last').remove();
  return;
}

function getRowsInTable(table) {
  return $('#' + table + ' tr').length;
}

function updateTeamHistorySelects(table) {
  var numRows = getRowsInTable(table);
  var currentRow;
  // for (currentRow = 1; currentRow < numRows; currentRow++) {
  //
  // }
}
