function populateSelect(selectId, options) {
  $.each(options, function(index, option) {
    $('#' + selectId).append($('<option/>', {
      value: option,
      text: option
    }));
  });
}
