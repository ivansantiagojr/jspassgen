function password(length, num = false, strength = 'weak'){
	var lower = "abcdefghijklnmopqrstuvwxyz"
	var upper = lower.toUpperCase()
	var letters = lower + upper
	var digits = "0123456789"
	var specialChars = "{}[]´`~^:;.,/?+=-!@#$%&*()"
	var pwd = ""

	if(strength == 'weak'){
		if(num){
			length -= 2
		
			for(let i = 0; i <= 2; i++){
				pwd += digits.charAt(Math.floor(Math.random() * digits.length))
			}
			for(let j = 0; j <= length; j++){
				pwd += lower.charAt(Math.floor(Math.random() * lower.length))
			}
		}
	 } else if(strength == 'strong'){
		if(num){
			length -=2
			for(let k = 0; k <= 2; k++){
				pwd += digits.charAt(Math.floor(Math.random() * digits.length))
			}

			for(let j = 0; j <= length; j++){
				pwd += letters.charAt(Math.floor(Math.random() * letters.length))
			}

	}
return pwd
}}

console.log(password(8, num = true, strength = 'strong'))
