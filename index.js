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

console.log(palPerm('Tact Coa'));
