
let sh = require('child_process').execSync;
let diff;

try {
  diff = sh('git diff origin/master').toString();
}
catch(e) {
  console.error('Could not check for Git commits. Are you offline?');
  console.log(e.message);
  process.exit(1);
}

if (!diff.length) {
  console.error('This repo has no diff from origin/master. Did you commit your changes?');
  process.exit(1);
}

let result = sh('git bundle create take-home-exercise.bundle HEAD master');
console.log('Nice work, you created take-home-exercise.bundle.');
console.log('Please upload it using the link sent to you in the initial email.');

