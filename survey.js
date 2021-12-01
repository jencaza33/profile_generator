const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});
const arr = [];
rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
  arr.push(answer);
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question('What\'s an activity you like doing?', (answer) => {
    arr.push(answer);
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.question('What do you listen to while doing that?', (answer) => {
      arr.push(answer);
      console.log(`Thank you for your valuable feedback: ${answer}`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.', (answer) => {
        arr.push(answer);
        console.log(`Thank you for your valuable feedback: ${answer}`);

        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          arr.push(answer);
          console.log(`Thank you for your valuable feedback: ${answer}`);

          rl.question('Which sport is your absolute favourite?', (answer) => {
            arr.push(answer);
            console.log(`Thank you for your valuable feedback: ${answer}`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              arr.push(answer);
              console.log(`Thank you for your valuable feedback: ${answer}`);

              console.log(arr[0] + ' here! Just finished ' + arr[1] + ' man, I listen to alot of ' + arr[2] + '. I also enjoy ' + arr[3] + ', where I ususally eat ' + arr[4]
                + '. I really enjoy playing ' + arr[5] + ' and my superpower is ' + arr[6] + '.');

              rl.close();

            });
          });
        });
      });
    });
  });
});