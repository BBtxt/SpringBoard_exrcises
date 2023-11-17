new Set([1,1,2,2,3,4]) //{0:1,1:2,2:3,3:4}

let ex = [...new Set("referee")].join("") // ref

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
console.log(m) // { [ 1, 2, 3 ] => true, [ 1, 2, 3 ] => false }

const hasDuplicate =(arr) =>{
    let set = new Set(arr);
    if(set.size === arr.length){
        return true
    } else {
        return false
    }
}
console.log(hasDuplicate([1,2,3,4,4]))

const vowelCount = (str) =>{
    const vowels = "aeiou"
    const vowelMap = new Map()
    for(let char of str){
        let lowerCaseChar = char.toLowerCase();
        if(vowels.includes(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1)
            } else {
                vowelMap.set(lowerCaseChar,1)
            }
        }
    }
    return vowelMap
}

console.log(vowelCount('Bradon boober udoggie'))