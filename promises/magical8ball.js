const answers = [
  'It is certain',
  'Without a doubt',
  'Most likely',
  'Yes',
  'Reply hazy, try again',
  'Ask again later',
  'My reply is no',
  'No',
  'Very doubtful',
];

export function ask(question) {
  const doesWork = Math.random() >= 0.5;

  return new Promise((resolve, reject) => {
    if(doesWork) {
      resolve(answers[Math.floor(Math.random() * answers.length)]);
    } else {
      reject(new Error('Magical 8-ball is broken.'))
    }
  });
}
