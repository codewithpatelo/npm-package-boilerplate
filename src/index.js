// If you export a function...
exports.yourFunction = function functionName() {
  // to do ... //
};


// If you export a class...
class classToExport {
  constructor(name) {
    this.attribute1 = '';
    this.attribute2 = '';
  }

  classFunction1() {}

  classFunction2() {}

  classFunction3() {}
}

module.exports = classToExport;
