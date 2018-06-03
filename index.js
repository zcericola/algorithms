//Problem 1
//Implement an algorithm that determines if a string has all unique characters

const isUnique = (s) => {
    for(let i = 0; i < s.length; i ++){
        for(let j = i + 1; j < s.length; j++){
            if(s[i] === s[j]){
                return false;
            }          
        }
    }
return true;
}

//isUnique('abcdefg') returns true
//isUnique('abccdefg') returns false

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

//Problem 2 
//Given two strings, write a method to decide if one is a permutation of the other.

//sorts the strings alphabetically
const sortByLetter = (str) => {
    return str.split('').sort().join('');
}

const isPerm = (s1, s2) => {
    sortS1 = sortByLetter(s1);
    sortS2 = sortByLetter(s2);
//return false if they are varying lengths
    if(s1.length !== s2.length){
        return false;
    }
    //if sortS1 and sortS2 are triple equals, true will be returned, else we will get false
    return sortS1 === sortS2;
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

//Problem 3


