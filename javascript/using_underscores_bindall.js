// Typically underscore's _.bindAll function is used to allow an object to always keep it's original
// reference to this even if the function is stored in a variable and called in a different context where the 
// value of this has changed.

var Cow = function(name) {
  this.name = name;
}

Cow.prototype.moo = function() {
  console.log('I am', this.name, 'Mooooo!');
}

var bessie = new Cow('Bessie');

bessie.moo();
//=> I am Bessie. Mooooo!

// Now we store a reference to the function call in another variable
// However, the value of this has now changed from an instance of class Cow, to the global scope.
var getBessieName = bessie.moo;
getBessieName();
//=> I am undefined. Mooooo!

// _.bindAll receives an object and one or more of that object's function names (string representation)
// It then overwrites the method with a wrapped method that keeps the value of this as the object that the method belongs to

_.bindAll(bessie, 'moo');
var getBessieName = bessie.moo;
getBessieName()
//=> I am Bessie. Mooooo!
