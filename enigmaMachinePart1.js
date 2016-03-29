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