// Before you get started, we're going to load this file into our index.html file so we can see our console.logs show up in the browser like we did yesterday! 
  // To do this, open up your index.html file in your favorite text editor. 
  // You'll notice that we're loading up several script files already, for the exercises we've done over the past two days. 
  //     <script type="text/javascript" src="day3Callbacks.js"></script>
  // What the browser is doing is going off and loading/executing them in the order we give these files. 
    // So first it's going to go through and load up the day3Callbacks.js file, and execute all the code we've written in there. 
    // Then, after we've already run all of day3Callbacks.js, it's going to go through and run day4Underscore.js, with all the results from day3Callbacks.js available to us since it's already been run!
    // You can roughly think of this as if we just copied and pasted the code from these two files into the same file, in the order that we gave the file names. 
  // Let's go throguh and duplicate one of these lines, changing the name of the file to day4Underscore.js.
  // Now just make sure that your day4Underscore.js file is saved in the same location as your other two .js files, and you should be good to go!


//map: turn an array of colors into an array of objects with a color property
//add 5 to each item in an array. 
//categories: create an object that maps from shortened city names to full city names. 
  var cityMapper = {
    SF: 'San Francisco',
    NYC: 'New York City',
    Chi: 'Chicago',
    Oak: 'Oakland',
    SJ: 'San Jose'
  };
  //now take an array of short city names and return an array of full city names for each one. 
  //Note that there are two different returns inside map:
    //The one you declare manually in the callback function
    //The one map does for you automatically returning the array at the end. 
    //The callback function in map does three things: 
      //1. It takes in an item. 
      //2. It transforms that item in some way. 
      //3. It returns the transformed item. 

//filter: filter through that array and return only the objects that have the purple color
//

//each: have them create a function outside of each and invoke that on each item. 

//each: really hammer home on the anonymous function part. 
  //all the callback is is a block of code that you get to run on each item in the array. 
  //you can define this block of code elsewhere (a named function), or you can define it right inside of the each statement (an anonymous function). 
//NOTE: You never need to use the index to access the value. Underscore's each already gives you the value! 
//Use the index as a practice to change only every other thing? We haven't introduced them to modulus yet...
//Have them write a for loop. Now have them write an each loop that does the exact same thing. Note how in the for loop, what we're given each time is i, which is just a number we have to use to access the valeu stored at that position. But with each, we're given that value directly as our first parameter! 

// Each is just a more semantic way of doing a for loop. Much as a for loop just lets you define a block of code to be run the same number of times as we have items in our array, each defines a block of code (a function) that gets run once on each item. 
// The key difference is what's available for you on each iteration, or each time that block of code is run. 
// With a for loop for arrays, you're given a number i each time. You then use this number to request the value stored at the i position within your array, like so: arr[i]
// With each, you're given the value directly. While we are still given i if we want it, we don't need it, and using it to access the value stored at that position is an anti-pattern inside each, because the first parameter we take in is already the value. 
// We'll revisit this throughout these exercises, but let's just hammer this home one more time because it's a common point of confusion. With a for loop, you're given i each time, and i is just a number. With each, what we're given each time is the value directly. We don't need to use an index number to get to it. 

// Let's revisit our looping exercises from before, and refactor them to use each. 
// We've created an array and an object for you to practice with below. 
var arr = [100,200,300,400,500];
var obj = {
  city: 'Oakland',
  slingsCode: true,
  excitementLevel: 10
};

// 1. invoke _.each to iterate through our arr. 
  // Inside the callback function, console log the string 'hi, I'm inside the callback!'
  // You should see this pop up 5 times in your console. 
  // This should tell you that the function is being invoked 5 times. And all it's doing is running the body of the function once on every iteration. There's no magic there. 
  // The body of the callback function is just a block of code the same number of times are there are items in the array.
    // If we have 5 items in our array, we will run this block of code 5 times. 

// 2. Cool, now let's console.log what item, the first parameter our callback takes in, is for each iteration.
  // You should see 
  // 100
  // 200
  // 300
  // 400
  // 500
  // in your console.
  // Whoa, this is really different from what we saw in our for loop! In our for loop, we just got i, which is a number from 0 - 4. But now, we're getting the values directly; we don't need i anymore!
  // Remember that a callback function is just a block of code that we execute the same number of times as we have items in the array. 
    // The key thing that changes each time is what the item is. 


// 3. Declare a variable called count that exists in the global scope, and set it equal to 0. Now that you're comfortable accessing each item in arr, let's console log both count (which will represent the index of that item) and the relevant value stored in arr. So with each iteration we'll want to increase count by 1. 
  // So what we'd expect to see in our console is:
  // 'the value of count is: 0, the value we're accessing in the array is 100'
  // 'the value of count is: 1, the value we're accessing in the array is 200'
  // 'the value of count is: 2, the value we're accessing in the array is 300'
  // 'the value of count is: 3, the value we're accessing in the array is 400'
  // 'the value of count is: 4, the value we're accessing in the array is 500'

// 4. Great! Now you've figured out that our callback function is just a block of code that gets run once on each item in an array. 
  // Now let's use a new each invocation to modify the array. Let's add 1 to each item in arr. 
  // Now that you've added 1 to each item in arr, console.log it to see the results. 
    // We expect to see [101, 201, 301, 401, 501]
  // Have some fun doing this a few more times. Try multiplying each item in arr by some number. Then try dividing it by some number. 
    // Write entirely new _.each invocations every time, don't just change the '+' to a '/'. 
    // We want to get practice typing out _.each invocations as many times as possible. 

// By this point you should be feeling pretty good on iterating through arrays using each! Now let's look into iterating through objects. 

// 5. Create a for loop for objects, to iterate through our obj. 
  // Inside the body of the for loop, console.log the string 'hi, i'm inside the for loop for objects!''
  // You should see this pop up 3 times in your console.
  // This should tell you that the for loop for our object is running 3 times. And, much like our array for loop, 
    // all it's doing is running the body of the for loop once on each iteration. 
// 6. Now let's check out what key is on each iteration.
  // If you console.log the key in the for loop body, you should see 
  // 'city'
  // 'slingsCode'
  // 'excitementLevel' 
  // in your console.
  // key is just a variable, that is set equal to each of the keys in our object one at a time. 
    // Just as i is a varaible that is set equal to each of the numerical indices of our arr. 
  // Just for fun, let's create an empty array outside of our for loop called arrayOfKeys. 
    // On each iteration, let's push the key into this arrayOfKeys. After your for loop, console.log the arrayOfKeys. 
    // You should see ['city', 'slingsCode', 'excitementLevel']. Note that they may not be in this order, 
    // since we can't guarantee the order that an object's keys are in. 
// 7. Ok, now that we've figured out that key is just a variable that will be set equal to the name of each property in obj, 
  // let's use that to access the values stored in obj. 
  // Write a new for loop to iterate through obj, console logging each value to the console. 
  // We'd expect to see
  // 'Oakland'
  // true
  // 10
  // Now that you're comfortable accessing each value in obj, let's console log both key and the relevant value stored in obj. 
  // So what we'd expect to see in our console is:
    // 'the value of key is: city, the value we're accessing in the object is Oakland'
    // 'the value of key is: slingsCode, the value we're accessing in the object is true'
    // 'the value of key is: excitementLevel, the value we're accessing in the object is 10'
// 8. You should be feeling pretty great about iterating through objects now! 
  // So let's combine this with our if statement. 
  // Let's only log a value to the console if it equals 'Oakland'. 
  // Great! Now, let's create a new for loop for arr. Inside that for loop, let's only console.log a value 
    // if it is both greater than 100 and less than 400
    // Remember that we use && for and statements. 
  // Inside another for loop for arr, only console.log the values that are either above 400, or less than 200. 
    // Remember that we use || for or statements. 
// 9. Now let's combine an if statement with our array for loop. 
  // Let's put 
  if(arr[i]) {
    console.log(arr[i]);
  }
  // inside of our for loop. What do you expect this to log? 
  // Remember that JavaScript does type coercion, forcing whatever is in the conditional part of our if(conditional) statement to be a boolean value
  // Let's try this again:
  if(0) {
    console.log(arr[i]);
  }
  // Keep trying different combinations inside the conditional part of the if loop. Particularly, try:
  /*
  ''
  0
  1
  NaN
  'hi there'
  true
  undefined
  -1
  null
  {}
  []
  */
// 10. What's the difference between === and == and = ?
  // Try using all three of them, and explaing the results of each one to your partner. Once you've done that, some explanations are below. Be sure that you can explain these to your partner, they're important!
  // === will always return a boolean value (true, false). It checks whether two things are equal. 
    // Put another way, threequals (===) asks the question 'Are these two things the same?', and then returns the results of that question (true or false).
  // == YOU SHOULD NEVER USE THIS. Seriously, save yourself some serious heartache and just never use this. Also, other programmers will sometimes judge you for using ==. So really, just don't use it. 
  // = This is for assignment. When you use the single equals, you are setting the thing on the left side of the operator equal to the thing on the right side of the operator. 
    // x = 'I totally understand assignments!' means that we are overwriting any value that x had previously and setting x equal to the string 'I totally understand assignments!'. Play around with this a bit if you're curious! Curiosity is a wonderful trait in engineers :)

// Arrays extra credit: 
// Let's revisit this concept that i is just a number. What if we wanted to iterate through an array backwards? 
  // To do that with arr, all we'd need are the numbers 4,3,2,1,0 in that order. 
    // Using those, we could access arr[4], arr[3], arr[2], arr[1], and arr[0], which are the values of the array in reverse. 
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
