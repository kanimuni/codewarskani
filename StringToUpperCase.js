// Ruby and Javascript lets you re-open classes so you can add new functionality to 
// existing classes and objects.
// In this kata, you'll have to add a new method in the String class that calls 
// the upcase method (toUpperCase() in Javascript), so that:

// Ruby
// "abc".my_new_method

// JS
// "abc".myNewMethod();
// returns

// "ABC"

String.prototype.myNewMethod = function() {
  var ns = "";

  var lookUpObject = {
    a:"A",
    b:"B",
    c:"C",
    d:"D",
    e:"E",
    f:"F",
    g:"G",
    h:"H",
    i:"I",
    j:"J",
    k:"K",
    l:"L",
    m:"M",
    n:"N",
    o:"O",
    p:"P",
    q:"Q",
    r:"R",
    s:"S",
    t:"T",
    u:"U",
    v:"V",
    w:"W",
    x:"X",
    y:"Y",
    z:"Z"
  };

  for(var i=0; i<this.length; i++) {
    if(lookupObject.hasOwnProperty(this[i])) {
      ns += lookUpObject[this[i]];
    } else {
      ns += this[i];
    }
  }
  return ns;
};

var myNewMethod = function(str) {
  var lookUpObject = {
    a:"A",
    b:"B",
    c:"C",
    d:"D",
    e:"E",
    f:"F",
    g:"G",
    h:"H",
    i:"I",
    j:"J",
    k:"K",
    l:"L",
    m:"M",
    n:"N",
    o:"O",
    p:"P",
    q:"Q",
    r:"R",
    s:"S",
    t:"T",
    u:"U",
    v:"V",
    w:"W",
    x:"X",
    y:"Y",
    z:"Z"
  };

  var ns = "";
  for(var i=0; i<str.length; i++) {
    if(lookUpObject.hasOwnProperty(str[i])) {
      ns += lookUpObject[str[i]];
    } else {
      ns += str[i];
    }
  }
  return ns;
};

console.log(myNewMethod("Hello thIs is Kani, testing one two three!"));
