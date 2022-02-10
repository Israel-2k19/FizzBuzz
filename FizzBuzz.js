//This exercise is aimed at creating a function that outputs "fizz" for number 3 or "buzz" for number 5 or "fizzBuzz" for multiples of 3 and 5 and the rest of the number sets should be between 1 and 200.

    var output = [];
	var count = 1;

	function fizzBuzz() {
	while (count <= 200) {
	if (count % 3 === 0 && count % 5 === 0) {output.push(" FizzBuzz ");
	} else if (count % 3 === 0) {output.push(" Fizz ");
	}else if (count % 5 === 0) {output.push(" Buzz ");
	}else {output.push(count);
	}
	count++;
	}
	
	
	alert(output);
	
	}
	
	fizzBuzz();