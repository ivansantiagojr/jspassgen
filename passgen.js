function password(length, num = false, strength = "weak") {
  const lower = "abcdefghijklnmopqrstuvwxyz";
  const upper = lower.toUpperCase();
  const letters = lower + upper;
  const digits = "0123456789";
  const specialChars = "{}[]´`~^:;.,/?+=-!@#$%&*()";
  var pwd = "";

  switch (strength) {
    case "weak":
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
      break

    case "very":
      var ran = Math.floor(Math.random() * 4);
      {ran < 2 && (ran = 2)}
      {ran > 4 && (ran = 4)}
      // if (ran < 2) {
      //   ran = 2;
      // } else if (ran > 4) {
      //   ran = 4;
      // }

      if (num) {
        length -= ran;
        for (let i = 0; i < ran; i++) {
          pwd += digits.charAt(Math.floor(Math.random() * digits.length));
        }
      }
      length -= ran;
      for (let j = 0; j < length; j++) {
        pwd += letters.charAt(Math.floor(Math.random() * letters.length));
      }
      for (let k = 0; k < ran; k++) {
        pwd += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
      }
      break

      default:
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
        break
  }

pwd = pwd.split("");

shuffleArray(pwd);
pwd = pwd.join("");

return pwd;
}

const shuffleArray = (array) => {
  for (let i = array.length; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};


console.log(password(8, true, "weak"));
console.log(password(8, true, "strong"));
console.log(password(12, true, "very"));