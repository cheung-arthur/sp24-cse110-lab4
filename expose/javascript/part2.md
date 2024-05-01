1. The console will output 3. This is because all the variables, including `i`, are defined with `var`, so they can be accessed anywhere within the function. The for loop runs 3 times because the length of the passed in `prices` list is 3. So, after the for loop has completely run, `i` will end up to be 3.
2. The console will output 150. All the variables, including `i`, are defined with `var`, so they can be accessed anywhere within the function. The for loop runes 3 times because the length of the passed in `prices` list is 3. `discountedPrice` in the first iteration becomes 100*0.5 = 50. `finalPrice` in the first iteration becomes 50 too. Then the `discounted` list inludes 50. In the second iteration, `discountedPrice` becomes 200*0.5 = 100, and so `finalPrice` also becomes 100. In the third and last iteration, `discountedPrice` becomes 300*0.5 = 150.
3. The console will output 150. All the variables, including `i`, are defined with `var`, so they can be accessed anywhere within the function. The for loop runes 3 times because the length of the passed in `prices` list is 3. `discountedPrice` in the first iteration becomes 100*0.5 = 50. `finalPrice` in the first iteration becomes 50 too. Then the `discounted` list inludes 50. In the second iteration, `discountedPrice` becomes 200*0.5 = 100, and so `finalPrice` also becomes 100. In the third and last iteration, `discountedPrice` becomes 300*0.5 = 150 and so `finalPrice` also eventually becomes 150 as well, because the rounded integer value of (150*100)/100 is 150.
4. This function will return a list of the discounted prices, which will be [50, 100, 150], because in each time in the for loop, you calculate the finalPrice and add that to the end of the `discounted` list before proceeding to the next iteration.
5. The code will cause an error, because this time the code initializes and assigns the variable   `i` with `let`, meaning `i` is in the block scope of the for loop, so when you try access it outside the for loop, which line 12 does, a scoping issue will occur.
6. The code will cause an error. Same reason as question 5 - because this time the code initializes and assigns the variable   `discountedPrice` with `let` inside the for loop, meaning `discountedPrice` is in the block scope of the for loop, so when you try access `discountedPrice` outside the for loop, which line 13 does, a scoping issue will occur.
7. The console will output 150. Even though `finalPrice` is defined with `let`, it is done so in the block scope of the entire function, so you will be able to access `finalPrice` anywhere within the `discountPrices` function. The for loop can also thus rightly access and reassign all the variables defined in the code accordingly. As before, since the for loop will run 3 times with the final iteration dealing with `prices[2]` being 300, we apply the 0.5 discount which gives us 150.
8. The function will return the same discounted list [50, 100, 150], because the for loop can still access and modify all the variables within the function..
9. The code will cause an error. Because `let` was used to define `i`, it means `i` is in the block scope (of the for loop), and thus can only be accessed within the for loop block. Line 11 tries to access `i` outside the for loop block, and thus causes an error.
10. The console will output 3, because `length` was defined with `const` to be the length of the `prices` list, and prices had 3 elements when we called `discountPrices` in the last line. The for loop doesn't change anything (not that it could), so the console ultimately outputs 3.
11. The function will return the same discounted list [50, 100, 150], because the for loop can still access and modify all the variables within the entire function. Even though `discounted` is declared with `const`, it can be mutated (i.e remove, add, and change existing elements), you simply cannot reassign it (as per JS documentation). `discountedPrice` can also change as it is being declared and destroyed each time in for loop, so no reassignment is happening, but rather, the variable is being deleted from memory and redeclared over again. The for loop correctly applies the 0.5 discount, so we end up with the same [50, 100, 150] list.
12. A: `student.name;`
    B: `student['Grad Year'];`
    C: `student.greeting();`
    D: `student['Favorite Teacher'].name;`
    E: `student.courseLoad[0];`

13. A: `'32'`, In JavaScript, adding a number to a string results in concatenation. 
    B: `1`, The string '3' is converted to the number 3, then 2 is subtracted from 3.
    C: `3`, null is treated as 0 in numeric operations, so adding 0 to 3 give us 3.
    D: `'3null'`, null is converted to the string 'null', and concatenated to the string '3'.
    E: `4`, true is treated as 1 in numeric operations, so 1+3 gives us 4.
    F: `0`, both false and null and treated as 0 in numeric operations.
    G: `'3undefined'`, undefined is converted to the string 'undefined', and concatenated to '3'.
    H: `NaN`, Subtracting undefined from anything results in NaN (Not a Number) in numeric operations.
14. A: `true`, The string '2' is converted to the number 2, and 2 is indeed greater than 1.  
    B: `false`, When comparing strings, the comparison is lexicographical. '2' is not less than '12' as a string comparison.  
    C: `true`, `==` allows type coercion; 2 and '2' are considered equal after conversion.  
    D: `false`, `===` does not allow type coercion; it checks both value and type, so a number and a string are not strictly equal.  
    E: `false`, true is converted to 1 in numeric operations, and 1 is not equal to 2.  
    F: `true`, `Boolean(2)` is true, and `true === true` is true.  
15. `==` checks for equality after performing type conversion if necessary This means it can consider 2 and '2' to be equal because one of them will be converted into the other's type for the comparison. `===`, on the other hand, is a strict equal operator, and only checks for equality WITHOUT performing type coercion, so both the value and the type of both sides have to be the same in order for this operator to return true.

17. When `modifyArray([1, 2, 3], doSomething)` is called, the function processes the array `[1, 2, 3]` by applying the `doSomething` callback to each element. The `doSomething` function doubles the value of each element. I'll go through a step-by-step breakdown:
    - **1:** `doSomething(1)` computes `1 * 2`, resulting in `2`.
    - **2:** `doSomething(2)` computes `2 * 2`, resulting in `4`.
    - **3:** `doSomething(3)` computes `3 * 2`, resulting in `6`.
    - Therefore, the final result is the array `[2, 4, 6]`.

19. The console first outputs 1, then outputs 4 on a new line, then outputs 3 (on a new line), then outputs 4 (on a new line) after a second has passed.
So the output, after 1 second has passed, looks like:  
1  
4  
3  
2  

