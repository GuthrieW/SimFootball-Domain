const positions = [
  'Quarterback',
  'Running Back',
  'Wide Receiver',
  'Tight End',
  'Offensive Line',
  'Cornerback',
  'Linebacker',
  'Defensive End',
  'Defensive Tackle',
  'Safety',
  'Kicker/Punter'
];

function positionToWikipediaLink(position) {
  switch (position) {
    case 'Quarterback': return 'Quarterback';
    case 'Running Back': return 'Running_back';
    case 'Wide Receiver': return 'Wide_receiver';
    case 'Tight End': return 'Tight_end';
    case 'Offensive Line': return 'Offensive_line';
    case 'Cornerback': return 'Cornerback'
    case 'Linebacker': return 'Linebacker';
    case 'Defensive End': return 'Defensive_end';
    case 'Defensive Tackle': return 'Defensive_tackle';
    case 'Safety': return 'Safety_(gridiron_football_position)';
    case 'Kicker/Punter': return 'Placekicker';
    default: return '';
  }
}
