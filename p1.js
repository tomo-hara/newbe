const fs = require('fs');
const readline = require('readline');

const SIZE = 128;
const FIFO_1 = 'fifo_1';
const FIFO_2 = 'fifo_2';

function receiver() {
  const fd = fs.openSync(FIFO_2, 'r');
  const rl = readline.createInterface({
    input: fs.createReadStream(FIFO_2),
  });

  rl.on('line', (buffer) => {
    console.log(`\n[USER2] ${buffer}`);
    process.stdout.write('\n[USER1]');
  });
}

function main() {
  fs.mkfifoSync(FIFO_1, 0o666);
  fs.mkfifoSync(FIFO_2, 0o666);
  const fd = fs.openSync(FIFO_1, 'w');

  const t_receiver = new Thread(receiver);
  t_receiver.start();

  process.stdout.write('\n[USER1]');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (buffer) => {
    fs.writeSync(fd, buffer);
    if (buffer === 'quit') {
      process.exit(0);
    }
  });
}

main();