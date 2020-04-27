function populateSelectWithList(selectId, options, defaultOption = 'Select an option') {
  emptySelect(selectId);

  if (defaultOption != null) {
    appendOptionToSelect(selectId, defaultOption);
  }

  $.each(options, function(index, option) {
    appendOptionToSelect(selectId, option);
  });

  return;
}

function populateSelectWithNumbers(selectId, min = 1, max = 9) {
  emptySelect(selectId);
  for (let i = min; i <= max; i++) {
    appendOptionToSelect(selectId, i);
  }

  return;
}

function populateSelectWithListOnlyNations(selectId, options, defaultOption = 'Select an option') {
  emptySelect(selectId);

  if (defaultOption != null) {
    appendOptionToSelect(selectId, defaultOption);
  }

  $.each(options, function(index, option) {
    appendOptionToSelect(selectId, option.name, option.display);
  });

}

function appendOptionToSelect(selectId, option, value = null) {
  if (value == null) {
    value = option;
  }
  $('#' + selectId).append($('<option/>', {
    text: option,
    value: value
  }));

  return;
}

function emptySelect(selectId) {
  $('#' + selectId).empty();

  return;
}

function checkIfSelectHasMaxSelected(element, max) {
  const numberOfSelectedValues = $(element).val().length;
  if (numberOfSelectedValues === max) {
    $('#' + element.id + ' > option').each(function() {
      if ($(this).is(':selected')) {
        $(this).removeAttr('disabled');
      } else {
        $(this).attr('disabled', 'disabled');
      }
    });
  } else if (numberOfSelectedValues > max) {
    $('#stats-table-select option').removeAttr('selected');
  } else {
    $('#stats-table-select option').removeAttr('disabled');
  }

  return;
}

function updateVisibleStats(selectElement, tableElementId) {
  var select = $('#' + selectElement.id);
  var selectedStats = select.val();
  var table = $('#' + tableElementId);
  var tableRows = $(`#${tableElementId} > tbody > tr`);

  // check if table has row that it shouldn't
  $.each(tableRows, function(index, row) {
    if (selectedStats.indexOf(row.id) < 0) {
      if (row.id != "headers") {
        removeSpecificRowFromTable(tableElementId, row.id);
      }
    }
  });

  // add rows that table is missing
  $.each(selectedStats, function(index, stat) {
    if ($('#' + stat).length === 0) {
      addRowToStatsTable(stat);
    }
  });

  return;
}
