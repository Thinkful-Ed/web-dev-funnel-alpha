# Buy 7 Get 1 Free


- [Problem](#problem)
- [Solution](#solution)
- [Hint](#hint)
- [Extra Credit](#extra-credit)
- [Resources](#resources)

## <a name="problem"></a> Problem
Your favorite coffee shop offers a punch card loyalty program. For every seven drinks you buy, you get one free. Since you go here every day, you are very excited about this! However, you occassionally forget your punch card and always have to take a new one. After a while, you accumulate a handful of partially completed punch cards.

Write a function to figure out how many free coffees you've earned from your collection of punch cards. It should accept one argument - an array of numbers with each number representing the number of punches each card has.

### Examples
```
freeCoffees([5, 4, 7]); // Should return 2
freeCoffees([1, 1, 1, 2]); // Should return 0;
freeCoffees([2, null, null, 7, 6]); // Should return 2;
```

#### REPL
[Try It OUr Here](https://repl.it/@ricklopez/002-Free-Coffee-Total-question)
## <a name="solution"></a> Solution

#### REPL
[Try It Out Here](https://repl.it/@ricklopez/002-Free-Coffee-Total-solution)

#### TODO - Video


## <a name="hint"></a> Hint
If you're having trouble, try writing the function to only accept a single number as an argument. For example:

```
freeCoffees(15); // Should return 2
freeCoffees(false); // Should return 0;
freeCoffees(3); // Should return 0;
```

Even getting this to work will be a step in the right direction. Now, think about the additional logic you would need to incorporate to make it work with an array of numbers.

## <a name="extra-credit"></a> Extra Credit
What happens if you pass a number greater than 7? Your function will still work, but is it possible to have a punch card with more than seven punches? What would this mean in the context of an actual coffee shop and what would you expect your function to return in this case?

## <a name="resources"></a> Resources

#### TODO - additional supporting material 
