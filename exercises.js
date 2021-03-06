(function () {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  const max = function (num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

  const maxOfThree = function (num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }


  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

  const isVowel = function (c) {
    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
      return true;
    }
    return false;
  }


  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

  const rovarspraket = function(string) {
    let s = string.toLowerCase();
    let vowels = ["a", "e", "i", "o", "u", " "];
    let y = "";
    for (let i = 0; i < string.length; i++) {
       let current = s.charAt(i); 
      if (vowels.indexOf(current) != -1) {
          y = (y + (current));
      } else {
          y = (y + (current + "o" + current));
      }
    }
    return y;
  }


  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

  const sum = function(arr) {
    let newArr = arr.reduce((a, b) => a + b, 0);
    return newArr;
  }

  const  multiply = function(arr) {
    let newArr = arr.reduce((a, b) => a * b, 1);
    return newArr;  
  }


  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

const reverse = function(string) {
    let strSplit = string.split('');
    let strReverse = strSplit.reverse();
    let strJoin = strReverse.join('');
    return strJoin;
}

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

const findLongestWord = function(arr) {
  let longWord = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longWord) {
      longWord = arr[i].length;
    }
  }
  return longWord;
}

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

 const filterLongWords = function(arr, int) {
   const newArr = arr.filter(word => word.length > int);
   return newArr;
 }

  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
const  charFreq = function(s) {
  let result = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
  return result;
}

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does', 'anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does', 'anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
