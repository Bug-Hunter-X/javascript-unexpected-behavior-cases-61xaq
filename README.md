# Unexpected 'this' behavior in JavaScript

This repository demonstrates a common JavaScript bug related to the unexpected behavior of the `this` keyword.

The `bug.js` file contains a function `myFunc` that logs the value of `this`.  When called directly, as in `myFunc()`, the value of `this` is unexpected in non-strict mode. In strict mode, it will log `undefined`.

The `bugSolution.js` file provides a solution to the problem using `bind`, demonstrating how to explicitly set the value of `this`.