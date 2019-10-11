function rot13(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    var strValue = str[i].charCodeAt();

    if (strValue >= 65 && strValue <= 77) {
      newStr += String.fromCharCode(strValue + 13);
    }

    else if (strValue >= 78 && strValue <= 90) {
      newStr += String.fromCharCode(strValue - 13);
    }
    else {
      newStr += str[i];
    }
  }
  return newStr;
}