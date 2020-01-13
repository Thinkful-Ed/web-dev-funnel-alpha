# Greater Than


- [Problem](#problem)
- [Solution](#solution)
## <a name="problem"></a> Problem
Below we have a function that determines the greater of two values (valA and valB). 
Please update the function so that is returns the number 0 when values are equal and null when we pass NaN and true as values.

```javascript
  function checkGreaterValue(valA, valB) {
    try {

        if(valA > valB) {
          return 1;
        } else if (valA < valB) {
          return 2;
        } else if (valA === valB) {
          return 3;
        } else { // This will run when you pass a NaN and a bool value. :)
          return 4;
        }

    } catch (err) {
      return new Error("oops :/") ;
    }
  }
```

### Examples
```
checkGreaterValue(3,3); //Should return 0
checkGreaterValue(NaN,true); //Should return null;

```

#### REPL

[Try It Out Here:](https://repl.it/@ricklopez/001-greater-than-question")


## <a name="solution"></a> Solution

#### REPL
[Try It Out Here:](https://repl.it/@ricklopez/001-greater-than-solution")

#### Video Walk Through


