var rsvp = require('../db/rsvp.js');

const parties = rsvp.report();
const rows = parties.flatMap((party) => party.guests.map((guest) => ({
  party: party.id,
  guest: guest.name || '(plus-one)',
  attending: guest.attending === null ? '' : guest.attending ? 'yes' : 'no',
  dietary: guest.dietary,
  song: party.song,
  note: party.note,
})));

if (process.argv.includes('--csv')) {
  const columns = ['party', 'guest', 'attending', 'dietary', 'song', 'note'];
  const quote = (value) => '"' + String(value).replace(/"/g, '""') + '"';
  console.log(columns.join(','));
  rows.forEach((row) => console.log(columns.map((column) => quote(row[column])).join(',')));
} else {
  const count = (attending) => rows.filter((row) => row.attending === attending).length;
  console.log(`${count('yes')} attending, ${count('no')} not attending, ${count('')} no response yet ` +
    `(${rows.length} guests in ${parties.length} parties)`);
  console.table(rows.map(({ party, guest, attending, dietary }) => ({ party, guest, attending, dietary })));
  parties.filter((party) => party.song || party.note).forEach((party) => {
    console.log(`\n${party.id}`);
    if (party.song) {
      console.log(`  song: ${party.song}`);
    }
    if (party.note) {
      console.log(`  note: ${party.note}`);
    }
  });
}
