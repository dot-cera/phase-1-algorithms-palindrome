function isPalindrome(word) {
  // Write your algorithm here
  const array = word.split('')
  console.log(array)

  let newArray = [];
  array.forEach(element => {
      newArray.unshift(element);
   });
  console.log(newArray);

  if(array.join('')===newArray.join('')){
    return true;
  }else{
    return false;
  }
}

isPalindrome('claries')

/* 
  Add your pseudocode here
  1. Initialize an empty array to store individual characters
  2. Iterate through each character in the word and push it to the array
  3. Initialize a new array and use a loop to unshift characters from the original array
  4. Check if the new array is equal to the original array
  5. If true, return true; if false, return false
*/

/*
  Add a written explanation of your solution here
  The solution involves the following steps:
  1. Use an array to store individual characters from the word.
  2. Create a new array by reversing the order of characters from the original array.
  3. Check if the reversed array is equal to the original array.
  4. If the arrays are equal, it means the word is a palindrome, and the function returns true.
  5. If the arrays are not equal, the word is not a palindrome, and the function returns false.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("nun"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("claries"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
