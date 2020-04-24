function populateSelect(selectId, options, defaultOption = 'Select an option') {
  emptySelect(selectId);
  if (defaultOption != null) {
    appendOptionToSelect(selectId, defaultOption);
  }
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

function checkIfSelectHasMaxSelected(element, max) {
  const numberOfSelectedValues = $(element).val().length;
  console.log (numberOfSelectedValues);
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
}

function updateVisibleStats(element) {
  var select = $('#' + element.id);
  // var select = $(element);

  var selectedStats = select.val();
  $.each(selectedStats, function(index, stat) {
    // TODO: add generation of input HTML for player stats
  });
}
