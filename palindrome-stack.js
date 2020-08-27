class Stack {
  constructor() {
    this.stack = [];
    this.top = 0;
  }

  push(element) {
    this.stack[this.top++] = element;
  }

  pop() {
    return this.stack[--this.top];
  }

  peek() {
    return this.stack[this.top - 1];
  }

  isEmpty() {
    return this.top === 0;
  }
}

function isPalindrome(string) {
  let stack = new Stack();
  let stringArr = string.split("");
  let reversedString = "";

  // put all letters into the stack
  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }
  // making the reverse of the input string by popping off the last
  // letter in the stack until it is empty
  while (stack.isEmpty() === false) {
    reversedString += stack.pop();
  }

  if (reversedString === string) {
    return true;
  } else {
    return false;
  }
}

// testing odd number of letters
if (isPalindrome("racecar") === true) {
  console.log("Yes");
} else {
  console.log("No");
}

// testing even number of letters
if (isPalindrome("abbbba") === true) {
  console.log("Yes");
} else {
  console.log("No");
}

// testing odd non-palindrome
if (isPalindrome("hello") === true) {
  console.log("Yes");
} else {
  console.log("No");
}

// testing even non-palindrome
if (isPalindrome("code") === true) {
  console.log("Yes");
} else {
  console.log("No");
}
