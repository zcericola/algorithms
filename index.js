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


