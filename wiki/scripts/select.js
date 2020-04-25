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
  var i;
  for (i = min; i <= max; i++) {
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

function updateVisibleStats(element) {
  var select = $('#' + element.id);
  // var select = $(element);

  var selectedStats = select.val();
  $.each(selectedStats, function(index, stat) {
    // TODO: add generation of input HTML for player stats
  });

  return;
}
