// 1. Question: Reverse a string without using the built-in reverse() method.

const reverseSTR = (data) => {
    let element = "";
    for (let i = data.length - 1; i >= 0; i--) {
        element += data[i];
    }
    return element;
}

let result = reverseSTR("hello");
// document.write("1- Reverse String hello into: <br>"+result);

// 2. Question: Count the number of vowels in a given string.

const vowel = (data) => {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i of data.toLowerCase()) {
        if (vowels.includes(i)) {
            count++;
        }
    }
    return count;
}

let result2 = vowel("hello");
// document.write("2- Count the number of vowels in hello: " + result2);

// 3. Question: Convert the first letter of each word in a sentence to uppercase.

const cap = (data) => {
    let arr = data.toLowerCase().split(" ");
    let element = "";
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }
    return arr.join(" ");
}

let result3 = cap("hello world!")
// document.write("Convert the first letter of each word in hello world into uppercase: <br>" + result3)

// 4. Question: Check if a string is a palindrome.

const palindrome = (data) => {
    let element = "";
    for (let i = data.length - 1; i >= 0; i--) {
        element += data[i];
    }
    if (data == element) {
        return true;
    }
    else {
        return false;
    }
}

// let result4 = palindrome("hello");
// document.write("4- Check if hello is a palindrome: <br>" + result4)

const polindrome = (data) => {
    if (reverseSTR(data) == data.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
}
// let result5 = polindrome("hello");
// document.write("5- Check if hello is a palindrome: <br>" + result5)


// 5. Question: Find the sum of all positive numbers in an array.

const sum_of_arr = (...item) => {
    let element = 0;
    for (const key of item) {
        element += key
    }
    return element
}

// document.write(sum_of_arr(10,10,5,20,5));


// 6. Question: Find the index of the first occurrence of a specific element in an array.

const find_func = (arr, ele) => {
    return arr.indexOf(ele);
}

const numb = [1, 3, 4, 6, 8, 9, 2, 2, 6, 4, 4, 1, 5, 9]
const element = 9;

// document.write(find_func(numb, element))

// 7. Question: Remove all duplicates from an array without built-in methods.

const remove_duplicates = (arr) => {
    const uniqueArr = [];

    for (const i in arr) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

const fruits = ["apple", "orange", "banana", "grapes", "apple"];
document.write(remove_duplicates(fruits))

// 8. Question: Sort the array in ascending and descending without built-in methods.