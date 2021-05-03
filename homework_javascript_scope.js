// #### Episode 1

// ```js
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// predicted output for episode 1 is 'The murderer is Miss Scarlet', because this is returned within the scope of the function and then the function is assigned to verdict which allows it to be called in the console log function


// #### Episode 2

// ```js
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// the output will be 'The murderer is Professor Plum' as the changeMurderer function doesn't return it's contents and only changes the murderer variable within its scope. It would also be unable to change it as it's a const

// after running it I can see that it has produced an error because murderer is declared globally because it doesn't begin with 'const', 'let' or 'var' which creates an issue because murderer is declared as a const at the top of the file

// #### Episode 3

// ```js
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);


// The first output will be 'The murderer is Mrs. Peacock' as this is returned by the function and assigned to the variable 'first verdict'. This variable is then console logged. The second output will be 'The murderer is Professor Plum' as the changeMurderer function only returns its contents to the variable name assigned to it. The scope of murderer still remains in that function so the second verdict will take it's value for murderer at the top of the file. 

// #### Episode 4

// ```js
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// the declareAllSuspects function will show an error because suspectOne and suspectTwo haven't been passed to it. suspectThree is redefined in the functions so won't cause a similar error. 

after running the console it seems to have found those variable names anyway, which I'd argue isn't ideal. 

// #### Episode 5

// ```js
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// the change weapon function will be able to modify the scenario.weapon attribute without returning anything as this is possible for mutable/reference types. The function at the bottom will therefore read 'The weapon is the Revolver' 

// #### Episode 6

// ```js
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// the murderer will remain 'Colonel Mustard' as value types cannot be altered in a function without returning anything and assigning said thing to a variable name

// after running it I can see that I've missed the fact that neither had a 'var', 'let' or 'const' in front of it within the function which makes its scope global and therefore there has been a change. 

// #### Episode 7

// ```js
// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// 'The murderer is Miss Scarlett' will be printed out because plotTwist has no global scope to its changes as let is called before it so the last function to alter anything is the unexpected outcome function and its global scope. 

bit baffled by this one why it's Mr Green as the changeMurderer function calls the plotTwist function which changes it to miss Scarlett?

// #### Episode 8

// ```js
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// // The weapon should be candle stick because I think that the unexpected outcome function shoulc change it


// #### Episode 9

// ```js
// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// the mudererer will stay professor plum as the murderer variable within the if is given a let which will mean that it's only going to be called that within the scope of the if statement