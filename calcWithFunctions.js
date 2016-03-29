// This time we want to write calculations using functions and get the results. 
// Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand


function zero(operation) { return recur(0, operation); }
function one(operation) { return recur(1, operation); }
function two(operation) { return recur(2, operation); }
function three(operation) { return recur(3, operation); }
function four(operation) { return recur(4, operation); }
function five(operation) { return recur(5, operation); }
function six(operation) { return recur(6, operation); }
function seven(operation) { return recur(7, operation); }
function eight(operation) { return recur(8, operation); }
function nine(operation) { return recur(9, operation); }


function recur(n, op) { return (op) ? op.call(op, n) : n; }

function plus(a) { return function(b) { return b + a; }; }
function minus(a) { return function(b) { return b - a; }; }
function times(a) { return function(b) {return b * a; }; }
function dividedBy(a) { return function(b) {return b / a; }; }
