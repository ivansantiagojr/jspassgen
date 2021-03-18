function password(length, num = false, strength = "weak") {
  var lower = "abcdefghijklnmopqrstuvwxyz";
  var upper = lower.toUpperCase();
  var letters = lower + upper;
  var digits = "0123456789";
  var specialChars = "{}[]´`~^:;.,/?+=-!@#$%&*()";
  var pwd = "";

  if (strength == "weak") {
    if (num) {
      length -= 2;

      for (let i = 0; i <= 2; i++) {
        pwd += digits.charAt(Math.floor(Math.random() * digits.length));
      }
    }
    length -= 2;
    for (let j = 0; j <= length; j++) {
      pwd += lower.charAt(Math.floor(Math.random() * lower.length));
    }
  } else if (strength == "strong") {
    if (num) {
      length -= 2;
      for (let k = 0; k <= 2; k++) {
        pwd += digits.charAt(Math.floor(Math.random() * digits.length));
      }
    }
    length -= 2;
    for (let j = 0; j <= length; j++) {
      pwd += letters.charAt(Math.floor(Math.random() * letters.length));
    }
  } else if (strength == "very") {
    var ran = Math.floor(Math.random() * 4);
    if (ran < 2) {
      ran = 2;
    } else if (ran > 4) {
      ran = 4;
    }

    if (num) {
      length -= ran;
      for (let i = 0; i < ran; i++) {
        pwd += digits.charAt(Math.floor(Math.random() * digits.length));
      }
    }
  }
  length -= ran;
  for (let j = 0; j < length; j++) {
    pwd += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  for (let k = 0; k < ran; k++) {
    pwd += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
  }

  pwd = pwd.split("");

  const shuffleArray = (array) => {
    for (let i = array.length; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  shuffleArray(pwd);
  pwd = pwd.join("");

  return pwd;
}

console.log(password(8, (num = true), (strength = "weak")));
console.log(password(8, (num = true), (strength = "strong")));
console.log(password(8, (num = true), (strength = "very")));
