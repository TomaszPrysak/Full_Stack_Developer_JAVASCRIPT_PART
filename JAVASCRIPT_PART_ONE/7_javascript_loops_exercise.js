/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!

///////////////////
//// PROBLEM 1 ///
/////////////////

// Use Loops to print (console.log()) out the word "hello" 5 times.
// Do this with a While Loop and a For Loop

var hello_while = "HELLO - WHILE";
var hello_for = "HELLO - FOR"

// While Loop
var x = 0;

while (x < 5){
  console.log(hello_while);
  ++x;
}

// For Loop
for (var i = 0; i < 5; i++) {
  console.log(hello_for);
}

/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to print (console.log()) all the odd numbers from 1 to 25
// Do this while loop and a for loop

// While Loop
var num = 1

while (num <= 25){
  if(num%2 !== 0){
    console.log(num);
  }
  num = num + 1;
}

// For Loop
for (var i = 1; i < 26  ; i++) {
  if (i%2 !== 0) {
    console.log(i);
  }
}
