function populateSelect(selectId, options) {
  $('#' + selectId).empty()
  $.each(options, function(index, option) {
    $('#' + selectId).append($('<option/>', {
      value: option,
      text: option
    }));
  });

  return;
}
