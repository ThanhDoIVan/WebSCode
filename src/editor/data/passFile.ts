export const file1 = {
	name: 'test.cpp',
	value: 
`#include <iostream>

int factorial(int n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

int main() {
  int n = 5;
  int result = factorial(n);
  std::cout << "Факториал числа " << n << " равен " << result << std::endl;
  return 0;
}

`
}

export const file2 = {
	name: 'index4.html',
	value: 
`<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Welcome to my page!</h1>
  <img src="image.jpg" alt="My Image">
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</body>
</html>
`

}

export const file3 = {
    name: 'index5.js',
    value: 
`const person = {
	firstname: "John",
	lastname: "Doe",
	age: 50,
	eyecolor: "blue"
	};
	
document.getElementById("demo").innerHTML = person.firstname + " is " + person.age + " years old.";
`
}
