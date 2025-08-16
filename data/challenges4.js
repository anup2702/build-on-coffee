const challenge4 = {
  id: 4,
  title: "⚡ Is Power of Two",
  description: "Create a function that checks whether a given number is a power of two. Return true if it is, otherwise false.",
  difficulty: "Easy",
  tags: ["JavaScript", "Math", "Bit Manipulation"],
  starterCode: `function isPowerOfTwo(n) {
  // your code here
}

console.log(isPowerOfTwo(1)); // true (2^0)
console.log(isPowerOfTwo(16)); // true (2^4)
console.log(isPowerOfTwo(18)); // false
`,
  solution: `function isPowerOfTwo(n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
}`,
};

export default challenge4;
