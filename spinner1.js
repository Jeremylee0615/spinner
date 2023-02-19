let spinnerDelay = 250;

// 2 cylces with no rest in between each cycles
process.stdout.write('hello from spinner1.js... \rheyyy\n');
setTimeout(() => {
  process.stdout.write('\r|   ');
}, spinnerDelay + 1000);
setTimeout(() => {
  process.stdout.write('\r/   ');
}, (spinnerDelay * 2) + 1000);
setTimeout(() => {
  process.stdout.write('\r-   ');
}, (spinnerDelay * 3) + 1000);
setTimeout(() => {
  process.stdout.write('\r\\   ');
}, (spinnerDelay * 4) + 1000);
setTimeout(() => {
  process.stdout.write('\r|   ');
}, (spinnerDelay * 5));
setTimeout(() => {
  process.stdout.write('\r|   ');
}, (spinnerDelay * 6) + 1000);
setTimeout(() => {
  process.stdout.write('\r/   ');
}, (spinnerDelay * 7) + 1000);
setTimeout(() => {
  process.stdout.write('\r-   ');
}, (spinnerDelay * 8) + 1000);
setTimeout(() => {
  process.stdout.write('\r\\   ');
}, (spinnerDelay * 9) + 1000);
setTimeout(() => {
  process.stdout.write('\r|   ');
}, (spinnerDelay * 10) + 1000);