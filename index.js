//Problem 1 --> Is Unique?
//Implement an algorithm that determines if a string has all unique characters

const isUnique = s => {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        return false;
      }
    }
  }
  return true;
};

//isUnique('abcdefg') returns true
//isUnique('abccdefg') returns false

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

//Problem 2 --> Check Permutation
//Given two strings, write a method to decide if one is a permutation of the other.

//sorts the strings alphabetically
const sortByLetter = str => {
  return str
    .split('')
    .sort()
    .join('');
};

const isPerm = (s1, s2) => {
  sortS1 = sortByLetter(s1);
  sortS2 = sortByLetter(s2);
  //return false if they are varying lengths
  if (s1.length !== s2.length) {
    return false;
  }
  //if sortS1 and sortS2 are triple equals, true will be returned, else we will get false
  return sortS1 === sortS2;
};
//isPerm('god', 'dog'); returns true
//isPerm('catd', 'dfads'); returns false

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

//Problem 3 --> URLify
//Write a method to replace all spaces in a string with '%20'
//Ex. Input 'John Smith', Output 'John%20Smith'

const urlMaker = s => {
    const spaces = new RegExp(/\s/g);    
  //if there are no spaces, just return the string
  if (!spaces.test(s)) return s;
  //otherwise go through and replace all the spaces
  return s.replace(spaces, '%20');
};
//urlMaker('I like waffles.'); returns 'I%20like%20waffles.'
//urlMaker('Iamaperson.'); returns 'Iamaperson'

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

//Problem 4 --> Palindrome Permutation
//Given a string, write a function to check if it is a permutation of a palindrome
//Palindromes are words or phrases that are the same backwards and forwards
//Permutations are rearrangements of letters
//Since palindromes are the same forwards and backwards, ex. nurses run, there must be two of each character except for the middle one which //will only have one in an odd length string and there will be two of everything in an even length string

const palPerm = (s) => {    
   let noSpaces = (s.replace(/\s/g, ''));
   let count = {};

   for(let i = 0; i < noSpaces.length; i ++){
       count[noSpaces[i]] = count[noSpaces[i]] || 0;
   }
    console.log(count);
    

    
    

}

// console.log(palPerm('Tact Coa'));


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//Problem 5 -> Factorials 
//Take a number into a function and return the factorial for that number

//Basic Solution
const factorial = (n) => {
  let answer = 1;
  for(let i = 2; i <= n; i++){
    answer *= i;
  }
  return answer;

}

//console.log(factorial(5));

//Recursive Solution
//the function calls itself against n like so 5 * 4 * 3 * 2 * 1 and then exits with a total of 120.
//The Big O time complexity would be linear because the function calls itself in relation to the size of the input.
const recurFact = (n) => {
  //base case
  if(n === 0) return 1;
  //otherwise, if n is not 0:
  return n * recurFact(n-1);  
}

// console.log(recurFact(5));

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//Problem 6 --> Disemvowel Trolls
//Take in a string and remove all of the vowels from the string, return whatever is left
function removeVowels(str){
  //regex checks for a,e,i,o,u and then if it finds them, replaces with ''
  return str.replace(/[aeiou]/gi, '');

}

// console.log(removeVowels('I love to play with puppies and kittens.'));


