const QUARTERBACK = 'Quarterback';
const RUNNING_BACK = 'Running Back';
const WIDE_RECEIVER = 'Wide Receiver';
const TIGHT_END = 'Tight End';
const OFFENSIVE_LINE = 'Offensive Line';
const CORNERBACK = 'Cornerback';
const LINEBACKER = 'Linebacker';
const DEFENSIVE_END = 'Defensive End';
const DEFENSIVE_TACKLE = 'Defensive Tackle';
const SAFETY = 'Safety';
const KICKER_PUNTER = 'Kicker/Punter';

const positions = [
  QUARTERBACK,
  RUNNING_BACK,
  WIDE_RECEIVER,
  TIGHT_END,
  OFFENSIVE_LINE,
  CORNERBACK,
  LINEBACKER,
  DEFENSIVE_END,
  DEFENSIVE_TACKLE,
  SAFETY,
  KICKER_PUNTER
];

function positionToWikipediaLink(position) {
  switch (position) {
    case QUARTERBACK:
      return 'Quarterback';
    case RUNNING_BACK:
      return 'Running_back';
    case WIDE_RECEIVER:
      return 'Wide_receiver';
    case TIGHT_END:
      return 'Tight_end';
    case OFFENSIVE_LINE:
      return 'Offensive_line';
    case CORNERBACK:
      return 'Cornerback'
    case LINEBACKER:
      return 'Linebacker';
    case DEFENSIVE_END:
      return 'Defensive_end';
    case DEFENSIVE_TACKLE:
      return 'Defensive_tackle';
    case SAFETY:
      return 'Safety_(gridiron_football_position)';
    case KICKER_PUNTER:
      return 'Placekicker';
    default:
      return '';
  }
}
