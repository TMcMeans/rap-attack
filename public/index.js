/* Global Variables */

const raps = [
  {
    lyrics: 'No matter how hard it gets, stick your chest out, keep your head up and handle it.',
    rapper: 'Tupac'
  },
  {
    lyrics: 'I’m taking rappers to a new plateau, through rap slow. My rhymin is a vitamin held without a capsule.',
    rapper: 'Nas'
  },
  {
    lyrics: 'We used to fight for building blocks, now we fight for blocks with buildings; that make a killing.',
    rapper: 'Jay Z'
  },
  {
    lyrics: 'Im tying to right my wrongs, but its funny, them same wrongs helped me write this song.',
    rapper: 'Kanye West'
  },
  {
    lyrics: 'Climb the ladder to success, escalator style.',
    rapper: 'Notorious B.I.G.'
  },
  {
    lyrics: 'My life is one big rhyme, I try to scheme through it.',
    rapper: 'Common'
  },
  {
    lyrics: 'Im not a business man, Im a business, man.',
    rapper: 'Jay Z'
  },
  {
    lyrics: 'If im fake I aint notice cause my money aint.',
    rapper: 'Nicki Minaj'
  },
  {
    lyrics: 'I dont dance now, I make money moves.',
    rapper: 'Cardi B'
  }
]

/* Event Listeners */
$('.generate-btn').on('click', (e) => {
  e.preventDefault();
  generateLyrics();
})

generateLyrics = () => {
  const randomRap = raps[Math.floor(Math.random() * raps.length)];

  $('.lyrics').text(randomRap.lyrics);
  $('.rapper-name').text(randomRap.rapper);
}