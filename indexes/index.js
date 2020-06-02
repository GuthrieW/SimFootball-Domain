function generateIndexes(currentSeason, league) {
  let seasonLinksHtml = '';
  for (let i = currentSeason; i > 0; i--) {
    if (league === "DSFL" && i < 3) {
      continue;
    }

    let seasonPrepend = "";
    if (/^\d$/.test(i)) {
      seasonPrepend = "0";
    }

    seasonLinksHtml += `<div class="col-1-5">
  <a href="./${league}S${seasonPrepend + i}/">
    Season ${seasonPrepend + i}
  </a>
</div>
`;
  }

  $('#' + league + '-indexes').prepend(seasonLinksHtml);
  return;
}
