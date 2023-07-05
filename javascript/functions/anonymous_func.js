//a function
function myFunction() {
    console.log("Hello World!");
}

//a function that doesnt have a name
//an anonymous function -- They are mostly used as callback functions -
// functions that are passed to other functions as arguments(parameters).
(function (){
    console.log("Hello World!");
});

/*say you want to run some code when the user enters a value in a text box.
to do this you can call addEventListener() function of the text box. it expects to receive atleast 2 arguments:
1. the name of the event you want to listen for
2. the function you want to call when the event occurs
*/
//I.E
function logKey(event) {
  console.log(`you pressed the ${event.key}`);
}
textBox.addEventListener('keydown', logKey);

//the above code can be written as:
textBox.addEventListener('keydown', function (event) {
    console.log(`you pressed the ${event.key}`);
    });

//the above code can be written as: (using arrow functions)
textBox.addEventListener('keydown', (event) => {
    console.log(`you pressed the ${event.key}`);
    });
