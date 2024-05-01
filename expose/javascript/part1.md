1. values added: 20
2. final result: 20
3. values added: 20
4. The code returns an error, because there is a scoping issue. We used `let`, so the `result` variable is only defined and intialized within the if block, and thus only accessed within the if statement. Because line 13 tries to access it outside the if statement, there is an error.
5. The code returns an error, because we defined `result` to be a `const` and thus cannot be reassigned, so there is an error in line 7 before we can even reach line 9.
6. Same thing as question 5. Also, even if `result` was defined with `let`, line 13 would still return an error for the same reason as question 4 - `let` and `const` have the same scope.

