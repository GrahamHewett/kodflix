import film1 from './blackMirror.jpg';
import film2 from './breakingBad.jpg';
import film3 from './deathNote.jpg';
import film4 from './gameOfThrones.jpg';
import film5 from './theWire.jpg';
import film6 from './theWalkingDead.jpg';

const breakingBadSynopsis = "Write a lovely breaking bad synopsis here"

let movieData =
    [
        { title: "Black Mirror", imgSrc: film1, id: "black-mirror", synopsis: 'black mirror synopsis' },
        { title: "Breaking Bad", imgSrc: film2, id: "breaking-bad", synopsis: breakingBadSynopsis},
        { title: "Death Note", imgSrc: film3, id: "death-note", },
        { title: "Game of Thrones", imgSrc: film4, id: "game-of-thrones", },
        { title: "The Wire", imgSrc: film5, id: "the-wire", },
        { title: "The Walking Dead", imgSrc: film6, id: "the-walking-dead", },
    ]

export default movieData;

