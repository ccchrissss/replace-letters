function replaceLetters(word) {

  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  const vowels = ['a','e','i','o','u'];

  let vowelLeftConsonant = [
    ['a', 'z'],
    ['e', 'd'],
    ['i', 'h'],
    ['o', 'n'],
    ['u', 't']
  ]

  let consonantRightVowel = [
    ['b', 'e'],
    ['c', 'e'],
    ['d', 'e'],
    ['f', 'i'],
    ['g', 'i'],
    ['h', 'i'],
    ['j', 'o'],
    ['k', 'o'],
    ['l', 'o'],
    ['m', 'o'],
    ['n', 'o'],
    ['p', 'u'],
    ['q', 'u'],
    ['r', 'u'],
    ['s', 'u'],
    ['t', 'u'],
    ['v', 'a'],
    ['w', 'a'],
    ['x', 'a'],
    ['y', 'a'],
    ['z', 'a']
  ]

  // print the arrays to see the index numbers in the console
  // console.log('vowelLeftConsonant: ', vowelLeftConsonant)
  // console.log('consonantRightVowel: ', consonantRightVowel)

  let wordArr = word.split('')
  let updatedWordArr = []

  // test my 2d array understanding
  // console.log(consonantRightVowel[3][1])


  function isItemInArray(array2D, array, outerLoopCounter) {
    for (let j = 0; j  < array2D.length; j++) {

        if (array2D[j][0] == array[outerLoopCounter]) {
          updatedWordArr.push( array2D[j][1])
          return j;   // Found it
        }

    }

    return 'not found';   // Not found

  }


  for (let i = 0; i < wordArr.length; i++) {
    // console.log('wordArr: ', i, wordArr[i])

    if (consonants.includes(wordArr[i]) == true) {
      // console.log('yes consonants includes wordArr ', i)
      // console.log('consonantRightVowel: ', isItemInArray(consonantRightVowel, wordArr, i))
      isItemInArray(consonantRightVowel, wordArr, i)
    }

    if (vowels.includes(wordArr[i]) == true) {
      // console.log('yes vowels includes wordArr ', i)
      // console.log('vowelLeftConsonant: ', isItemInArray(vowelLeftConsonant, wordArr, i))
      isItemInArray(vowelLeftConsonant, wordArr, i)
    }

  }

  return updatedWordArr.join('')

}

console.log(replaceLetters('tatooine'))


  // make a 2d array vowelLeftConsonant which has the vowel in the row position and the corresponding left consonant in the column position
  // make a 2d array consonantRightVowel which has the consonant in the row position and the corresponding right vowel in the column position
  // declare a variable wordArr set it equal to the word parameter split into an array
  // declare a variable updatedWordArr set it equal to an empty array
  // create a for loop initialized at 0
  // loop through wordArr
  // if consonants array includes wordArr[i] equals true, then push consonantRightVowel[consonantRightVowel.indexof(wordArr[i])] to updatedWordArr
  // if vowels array includes wordArr[i] equals true, then push vowelLeftConsonant[vowelLeftConsonant.indexof(wordArr[i])] to updatedWordArr

  // ...

  // return updatedWordArr





// parameter: a string
// return: a string     // vowels replaced with nearest left consonant. consonants replaced with nearest right vowel
// e.g. replaceLetters('tatooine')
// results in 'uzunnhod'
