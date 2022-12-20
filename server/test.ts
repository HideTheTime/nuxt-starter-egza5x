interface String {
	add: () => string;
}
function init() {
	String.prototype.add = function () {
		return "hello";
	};

	console.log("hello".add());
	return 1;
}
