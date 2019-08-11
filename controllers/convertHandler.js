/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var split = input.search(/[A-z]/)
    result = input.slice(0,split)
    var temp = result
    //catching double fractions even because the test scripts said to
    if (temp.match(/\//g)) {
      if (temp.match(/\//g).length > 1) {
        result = "invalid number"
      }
    }
    if (result == "") {result = 1}
    try {
      result = eval(result)
      
    }
    catch(err) {
      result = "invalid number"
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var valid = ['gal','l','mi','km','lbs','kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG']
    var split = input.search(/[A-z]/)
    result = input.slice(split)
    if (!valid.includes(result)) {
      result = "invalid unit"
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit.toLowerCase()) {
      case "gal": 
        result = "l"
        break
      case "l": 
        result = "gal"
        break
      case "lbs": 
        result = "kg"
        break
      case "kg": 
        result = "lbs"
        break
      case "mi": 
        result = "km"
        break
      case "km": 
        result = "mi"
        break
      case "invalid unit":
        result = "invalid unit"
        break
      default: 
        result ="invalid unit"
        break
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit) {
      case "gal": 
        result = "gallons"
        break
      case "l": 
        result = "liters"
        break
      case "lbs": 
        result = "pounds"
        break
      case "kg": 
        result = "kilograms"
        break
      case "mi": 
        result = "miles"
        break
      case "km": 
        result = "kilometers"
        break
      default: 
        result ="invalid unit"
        break
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit.toLowerCase()) {
      case "gal": 
        result = initNum*galToL
        break
      case "l": 
        result = initNum/galToL
        break
      case "lbs": 
        result = initNum*lbsToKg
        break
      case "kg": 
        result = initNum/lbsToKg
        break
      case "mi": 
        result = initNum*miToKm
        break
      case "km": 
        result = initNum/miToKm
        break
      default: 
        result =0
        break
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    returnNum = returnNum.toFixed(5)
    result = `${initNum} ${initUnit} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    return result;
  };
  
}

module.exports = ConvertHandler;
