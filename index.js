// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Confirm the Ending</h1>`;

/** TODO:
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 * This challenge can be solved with the .endsWith() method, which was introduced in ES2015.  But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
 
 function confirmEnding(str, target) {
   return str;
 }
 
 confirmEnding("Bastian", "n");
 */

function confirmEnding(str, target) {
  let endStr = str.substring(str.length - target.length);
  // console.log('endStr:', endStr);
  // console.log('Target string:', target);
  return endStr == target;
}

console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding('Congratulation', 'on'));
console.log(confirmEnding('Connor', 'n'));
console.log(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  )
);
console.log(confirmEnding('He has to give me a new name', 'name'));
console.log(confirmEnding('Open sesame', 'same'));
console.log(confirmEnding('Open sesame', 'sage'));
console.log(confirmEnding('Open sesame', 'game'));
console.log(
  confirmEnding(
    'If you want to save our world, you must hurry.  We dont know how much longer we can withstand the nothing',
    'mountain'
  )
);
console.log(confirmEnding('Abstraction', 'action'));
