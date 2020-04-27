const VALID_IMAGE_FILE_EXTENSIONS = [
  '.jpg',
  '.jpeg',
  '.gif',
  '.png',
  '.svg'
];

function checkWithinRangeInput(input, min, max) {
  let element = $('#' + input.id);

  if (element.val() < min || element.val() > max) {
    alert('Please select a value between ' + min + ' and ' + max + ' for ' + element.attr('name'));
    element.val(min);
    return false;
  }
  return true;
}

function fileHasValidExtensionForImage(input) {
  let filename = $(input).val();

  for (extension of VALID_IMAGE_FILE_EXTENSIONS) {
    if (filename.endsWith(extension)) {
      return true;
    }
  }

  return false;
}
