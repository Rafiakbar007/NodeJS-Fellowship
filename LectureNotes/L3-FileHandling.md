# Node.js File System (fs) Module Notes

## What is fs?

`fs` (File System) is a built-in Node.js module used to interact with files and directories.

```javascript
const FileHandling = require("fs");
```

---

# 1. Create a File and Write Data

## Synchronous Method

### Syntax

```javascript
FileHandling.writeFileSync("fileName", "data");
```

### Example

```javascript
FileHandling.writeFileSync(
  "./test.txt",
  "Hello, I am studying file handling in Node.js"
);
```

### Explanation

* Creates a new file if it does not exist.
* Overwrites existing content if the file already exists.
* Synchronous (blocking) operation.

---

## Asynchronous Method

### Syntax

```javascript
FileHandling.writeFile(
  "fileName",
  "data",
  (err) => {}
);
```

### Example

```javascript
FileHandling.writeFile(
  "./test.txt",
  "Hello, I am an asynchronous file",
  (err) => {
    if (err) {
      console.log("Error:", err);
    }
  }
);
```

### Explanation

* Creates a new file if it does not exist.
* Overwrites existing content if the file already exists.
* Asynchronous (non-blocking) operation.
* Uses a callback function for error handling.

---

# 2. Read a File

## Synchronous Method

### Syntax

```javascript
const result = FileHandling.readFileSync(
  "fileName",
  "encoding"
);
```

### Example

```javascript
const result = FileHandling.readFileSync(
  "./contacts.txt",
  "utf-8"
);

console.log(result);
```

### Explanation

* Returns file content directly.
* Throws an error if something goes wrong.
* Synchronous (blocking) operation.

---

## Asynchronous Method

### Syntax

```javascript
FileHandling.readFile(
  "fileName",
  "encoding",
  (err, result) => {}
);
```

### Example

```javascript
FileHandling.readFile(
  "./contacts.txt",
  "utf-8",
  (err, result) => {
    if (err) {
      console.log("Error:", err);
    } else {
      console.log(result);
    }
  }
);
```

### Explanation

* Does not return data directly.
* Result is received inside the callback function.
* Error handling must be done manually.
* Asynchronous (non-blocking) operation.

---

# Blocking vs Non-Blocking Requests

## Synchronous Methods

* Blocking operations.
* Execute line by line.
* Wait until the current task finishes before moving to the next line.

## Asynchronous Methods

* Non-blocking operations.
* Do not stop the execution of the remaining code.
* Use callbacks to handle results and errors.

---

# 3. Append Data to a File

## Syntax

```javascript
FileHandling.appendFileSync(
  "fileName",
  "data"
);
```

## Example

```javascript
FileHandling.appendFileSync(
  "./contacts.txt",
  `Log in date: ${Date.now()}\n`
);
```

## Explanation

* Adds data at the end of the file.
* `\n` moves the content to the next line.

---

# 4. Copy a File

## Syntax

```javascript
FileHandling.cpSync(
  "sourceFile",
  "destinationFile"
);
```

## Example

```javascript
FileHandling.cpSync(
  "./contacts.txt",
  "./test.txt"
);
```

## Explanation

* Creates a copy of the source file.

---

# 5. Delete a File

## Syntax

```javascript
FileHandling.unlinkSync("fileName");
```

## Example

```javascript
FileHandling.unlinkSync("./test.txt");
```

## Explanation

* Permanently deletes the specified file.

---

# Quick Revision

| Method             | Purpose                   |
| ------------------ | ------------------------- |
| `writeFileSync()`  | Create/Write File (Sync)  |
| `writeFile()`      | Create/Write File (Async) |
| `readFileSync()`   | Read File (Sync)          |
| `readFile()`       | Read File (Async)         |
| `appendFileSync()` | Append Data to File       |
| `cpSync()`         | Copy File                 |
| `unlinkSync()`     | Delete File               |

---

## Note

The following line is not needed unless you are specifically working with the `File` class:

```javascript
const { File } = require("buffer");
```

For these examples, only this import is required:

```javascript
const FileHandling = require("fs");
```
