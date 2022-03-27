export default class Tile {
    letter = '';
    status = '';

    constructor(position) {
        this.position = position;
    }

    static updateStatusesForRow(row, theWord) {
        /*for (let tile of row) {
            tile.updateStatus(theWord);
        }

        row.filter((tile) => tile.status === "present")
            .filter((tile) =>
                row.some(
                    (t) => t.letter === tile.letter && t.status === 'correct'
                )
            )
            .forEach((tile) => (tile.status = 'absent'));*/
        theWord = theWord.split('');

        for (let tile of row) {
            if (theWord[tile.position] === tile.letter) {
                tile.status = 'correct';

                theWord[tile.position] = null;
            }
        }

        for (let tile of row) {
            if (theWord.includes(tile.letter)) {
                tile.status = 'present';

                theWord[theWord.indexOf(tile.letter)] = null;
            }
        }

        for (let tile of row.filter(tile => !tile.status)) {
            tile.status = 'absent';
        }

    }

    fill(key) {
        this.letter = key.toLowerCase();
    }

    empty() {
        this.letter = ''
    }
}
