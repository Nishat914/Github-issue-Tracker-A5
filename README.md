## 1. Difference between var, let, and const

 **var, let, and const** to declare variables.

* **var** is the older way to declare a variable. It is function scoped and it can be redeclared and updated.
* **let** is block scoped. That means it only works inside the block `{ }` where it is declared. It can be updated but cannot be redeclared in the same scope.
* **const** is also block scoped like let. But its value cannot be changed after it is declared.

---

## 2. What is the spread operator (...)?

The spread operator `...` is used to expand elements of an array or object.
It helps to copy or combine arrays easily.

Example:

```javascript
const numbers = [1,2,3];
const newNumbers = [...numbers,4,5];
```

---

## 3. Difference between map(), filter(), and forEach()

These are array methods used to work with arrays.

* **map()** creates a new array by changing each element of the original array.
* **filter()** returns a new array that contains elements that match a condition.
* **forEach()** just loops through the array and performs an action. It does not return a new array.

---

## 4. What is an arrow function?

An arrow function is a shorter way to write functions in JavaScript using `=>`.

Example:

```javascript
const sum = (a, b) => {
  return a + b;
};
```

It can also be written shorter:

```javascript
const sum = (a,b) => a + b;
```

---

## 5. What are template literals?

Template literals are used to create strings easily using backticks `` ` ` ``.

They allow us to use variables inside strings with `${}`.

Example:

```javascript
const name = "Nishat";
console.log(`My name is ${name}`);
```
