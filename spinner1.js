let delay = 250;

// 2 cylces with no rest in between each cycles
process.stdout.write('hello from spinner1.js... \rheyyy\n');
setTimeout(() => {
  process.stdout.write('\r|   ');
}, delay + 1000);
setTimeout(() => {
  process.stdout.write('\r/   ');
}, (delay * 2) + 1000);
setTimeout(() => {
  process.stdout.write('\r-   ');
}, (delay * 3) + 1000);
setTimeout(() => {
  process.stdout.write('\r\\   ');
}, (delay * 4) + 1000);
setTimeout(() => {
  process.stdout.write('\r|   ');
}, (delay * 5));
setTimeout(() => {
  process.stdout.write('\r|   ');
}, (delay * 6) + 1000);
setTimeout(() => {
  process.stdout.write('\r/   ');
}, (delay * 7) + 1000);
setTimeout(() => {
  process.stdout.write('\r-   ');
}, (delay * 8) + 1000);
setTimeout(() => {
  process.stdout.write('\r\\   ');
}, (delay * 9) + 1000);
setTimeout(() => {
  process.stdout.write('\r|   ');
}, (delay * 10) + 1000);