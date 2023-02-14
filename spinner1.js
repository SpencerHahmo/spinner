let timer = 200;

setTimeout(() => {
  process.stdout.write('\r|   ');
}, timer);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, timer += 200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, timer += 200);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, timer += 200);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, timer += 200);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, timer += 200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, timer += 200);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, timer += 200);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, timer += 200);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, timer += 200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, timer += 200);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, timer += 200);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, timer += 200);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, timer += 200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, timer += 200);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, timer += 200);

setTimeout(() => {
  process.stdout.write('\n'); 
}, timer += 200);