// If you export a function...
exports.yourFunction = function functionName() {
  // to do ... //
};


// If you export a class...

/**
 * Explain class.
 * @example
 * new classToExport(params)
 */
class classToExport {
    
  constructor(name) {
    this.attribute1 = '';
    this.attribute2 = '';
  }

  /**
   * classFunction1
   * @param {} - Explain param
   * @param {} - Explain param
   * @return {} - Explain what the function returns...
   */
  classFunction1() {}
  /**
   * classFunction2
   * @param {} - Explain param
   * @param {} - Explain param
   * @return {} - Explain what the function returns...
   */
  classFunction2() {}
  /**
   * classFunction3
   * @param {} - Explain param
   * @param {} - Explain param
   * @return {} - Explain what the function returns...
   */
  classFunction3() {}
}

module.exports = classToExport;
