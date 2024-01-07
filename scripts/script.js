// 1

function numSum(numList) {
    let numSum = 0;
    for (let i of numList) {
        numSum += i
    }
    return numSum;
}
console.log(numSum([10, 50, 6, 7, 8, 11, 6, 3, 9]))

// 2 

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }


function userInfo(cheeck) {
    if (cheeck.isloggedin === true) {
        return `${user.firstname} ${user.lastname}`
    } else {
        return false;
    }
}

console.log(userInfo(user));


// 3


// ვერ გავიგე  :(


// 4


function oddOrEven(number) {
    return number %2 == 0 ? "this number is even" : "this number is odd";
}
 console.log(oddOrEven(7));

// 5


//ვერ გავიგე ვერც ეს და დასაწყისში იქნებ ავხსნათ


// 6


let ages = (birthYear,yearNow) => yearNow - birthYear;

let userAge = ages(2000, 2023);
 let result = userAge > 18 ? "adult": "underAge"             //ეს დავალება იმედია არ არის შეცდომით
 console.log(result)
