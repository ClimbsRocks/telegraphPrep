// Loops:

// We've created an array and an object for you to practice with below. 
var arr = [100,200,300,400,500];
var obj = {
  city: 'Oakland',
  slingsCode: true,
  excitementLevel: 10
};

// 1. create a for loop for arrays, to iterate through our arr. 
  // Inside the body of the for loop, console log the string 'hi, I'm inside the for loop for arrays!'
  // You should see this pop up 5 times in your console. 
  // This should tell you that the for loop is running 5 times. And all it's doing is running the body of the for loop once on each iteration. There's no magic there. 
// 2. Cool, now let's console.log what i is in each iteration.
  // You should see 
  // 0
  // 1
  // 2
  // 3
  // 4 
  // in your console.
  // All i is is a number. Since arrays are numerically indexed, all we need to access the things stored inside them are numbered indices. 
  // Put another way, to access 100, 200, and 300 from arr, all we need are the numbers 0, 1, and 2, to access the values stored at arr[0], arr[1], and arr[2]. 
  // This is cool because it highlights how we access values from an array (just grab them by their numbered indices), and also highlights again that i is just a number in each iteration, there's nothing magical about it. It's just a number that starts at 0 (or whatever you choose to start it at), and counts up to the highest number you tell it to count to. 

// 3. Alright, now that we've figured out that i is just a number on each iteration, let's use i to access each item in our arr. 
  // Create a new for loop to iterate through arr, console logging each item to the console. We expect to see
  // 100
  // 200
  // 300
  // 400 
  // 500
  // Now that you're comfortable accessing each item in arr, let's console log both i and the relevant value stored in arr by writing a new for loop. So what we'd expect to see in our console is:
    // 'the value of i is: 0, the value we're accessing in the array is 100'
    // 'the value of i is: 1, the value we're accessing in the array is 200'
    // 'the value of i is: 2, the value we're accessing in the array is 300'
    // 'the value of i is: 3, the value we're accessing in the array is 400'
    // 'the value of i is: 4, the value we're accessing in the array is 500'

// 4. Great! Now you've figured out that i is just a number we can use to access each item in the array, one per iteration. Now let's use a new for loop to modify the array. Let's add 1 to each item in arr. 
  // Now that you've added 1 to each item in arr, console.log it to see the results. 
    // We expect to see [101, 201, 301, 401, 501]
  // Have some fun doing this a few more times. Try multiplying each item in arr by some number. Then try dividing it by some number. Write entirely new for loops each time, don't just change the '+' to a '/'. We want to get practice typing out for loops as many times as possible. 

// By this point you should be feeling pretty good on iterating through arrays using for loops! Now let's look into iterating through objects. 

// 5. Create a for loop for objects, to iterate through our obj. 
  // Inside the body of the for loop, console.log the string 'hi, i'm inside the for loop for objects!''
  // You should see this pop up 3 times in your console.
  // This should tell you that the for loop for our object is running 3 times. And, much like our array for loop, all it's doing is running the body of the for loop once on each iteration. 
// 6. Now let's check out what key is on each iteration.
  // If you console.log the key in the for loop body, you should see 
  // 'city'
  // 'slingsCode'
  // 'excitementLevel' 
  // in your console.
  // key is just a variable, that is set equal to each of the keys in our object one at a time. Just as i is a varaible that is set equal to each of the numerical indices of our arr. 
  // Just for fun, let's create an empty array outside of our for loop called arrayOfKeys. On each iteration, let's push the key into this arrayOfKeys. After your for loop, console.log the arrayOfKeys. You should see ['city', 'slingsCode', 'excitementLevel']. Note that they may not be in this order, since we can't guarantee the order that an object's keys are in. 
// 7. Ok, now that we've figured out that key is just a variable that will be set equal to the name of each property in obj, let's use that to access the values stored in obj. 
  // Write a new for loop to iterate through obj, console logging each value to the console. 
  // We'd expect to see
  // 'Oakland'
  // true
  // 10
  // Now that you're comfortable accessing each value in obj, let's console log both key and the relevant value stored in obj. So what we'd expect to see in our console is:
    // 'the value of key is: city, the value we're accessing in the object is Oakland'
    // 'the value of key is: slingsCode, the value we're accessing in the object is true'
    // 'the value of key is: excitementLevel, the value we're accessing in the object is 10'
// 8. You should be feeling pretty great about iterating through objects now! 
  // So let's combine this with our if statement. 
  // Let's only log a value to the console if it equals 'Oakland'. 
  // Great! Now, let's create a new for loop for arr. Inside that for loop, let's only console.log a value if it is both greater than 100 and less than 400
    // Remember that we use && for and statements. 
  // Inside another for loop for arr, only console.log the values that are either above 400, or less than 200. 
    // Remember that we use || for or statements. 



// Arrays extra credit: 
// Let's revisit this concept that i is just a number. What if we wanted to iterate through an array backwards? To do that with arr, all we'd need are the numbers 4,3,2,1,0 in that order. Using those, we could access arr[4], arr[3], arr[2], arr[1], and arr[0], which are the values of the array in reverse. 
  // So how can we get the number 4,3,2,1,0 in that order?
  // Well let's investigate the signature of our for loop: for (var i = 0; i < arr.length; i++) 
    // We just want to reverse this. So far we've been telling i to start at 0, and while i is less than the length of the array, increase i by 1. 
    // We could just tell i to start at it's maximum value, and while it's greater than or equal to 0, to decrease by 1. 
    // That would look like for (var i = arr.length - 1; i >=0; i--) 
    // Use this pattern to iterate through our array backwards, console logging both i and arr[i] each time, like we did above:
      // 'the value of i is: 4, the value we're accessing in the array is 500'
      // 'the value of i is: 3, the value we're accessing in the array is 400'
      // 'the value of i is: 2, the value we're accessing in the array is 300'
      // 'the value of i is: 1, the value we're accessing in the array is 200'
      // 'the value of i is: 0, the value we're accessing in the array is 100'
