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

#### TODO - REPL

<iframe height="400px" width="100%" src="https://repl.it/@ricklopez/001-greater-than-question?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>


## <a name="solution"></a> Solution

#### TODO - REPL
<iframe height="400px" width="100%" src="https://repl.it/@ricklopez/001-greater-than-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

#### TODO - Video Walk Through


