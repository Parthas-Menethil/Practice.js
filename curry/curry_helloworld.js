function add(arg1, arg2) {
	if (typeof arg2 !== 'undefined'){
		return arg1 + arg2;
	}
	else {
		return function(currArg2){ return arg1 + currArg2; };
	}
}
console.log("T1:" + add(1, 2));
console.log("T2:" + add(1)(2));