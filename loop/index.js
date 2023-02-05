const fs = require('fs');

for (let i = 0; i < 100; i++) {
  const text = `write: ${i}`;

  fs.writeFile('./data.txt', text, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(text);
  });
}