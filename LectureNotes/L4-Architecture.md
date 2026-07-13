

# Node.js - Blocking vs Non-Blocking Operations

## Importing Modules

```javascript
const fs = require("fs");
// const os = require("os");
```

* `fs` (File System) module is used to interact with files.
* `os` module provides information about the operating system.

---

# Synchronous Operations (Blocking)

Synchronous methods execute code line by line.

The next line of code will **wait** until the current operation completes.

## Writing a File Synchronously

### Syntax

```javascript
fs.writeFileSync("fileName", "data");
```

### Example

```javascript
fs.writeFileSync(
  "./ArchitectureFile.txt",
  "hello sync"
);
```

### Explanation

* Creates a file if it does not exist.
* Overwrites existing content if the file already exists.
* Blocks execution until the file is completely written.

---

## Reading a File Synchronously

### Example

```javascript
console.log("1");

const result = fs.readFileSync(
  "./ArchitectureFile.txt",
  "utf-8"
);

console.log(result);

console.log("2");
```

### Output

```text
1
hello sync
2
```

### Execution Flow

```text
Step 1 → Print 1
Step 2 → Read file completely
Step 3 → Print file content
Step 4 → Print 2
```

### Why is it called Blocking?

Because JavaScript waits for the file-reading operation to finish before executing the next line.

---

# Asynchronous Operations (Non-Blocking)

Asynchronous methods do not stop the execution of the remaining code.

Instead, they register a callback function that will run when the operation completes.

---

## Writing a File Asynchronously

### Syntax

```javascript
fs.writeFile(
  "fileName",
  "data",
  (err) => {}
);
```

### Example

```javascript
fs.writeFile(
  "./ArchitectureFile.txt",
  "hello async",
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);
```

### Explanation

* Creates a file if it does not exist.
* Overwrites existing content if the file already exists.
* Does not block the execution of other code.
* Uses a callback function for error handling.

---

## Reading a File Asynchronously

### Example

```javascript
console.log("1");

fs.readFile(
  "./ArchitectureFile.txt",
  "utf-8",
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  }
);

console.log("2");
```

### Possible Output

```text
1
2
hello async
```

### Execution Flow

```text
Step 1 → Print 1
Step 2 → Start file-reading task
Step 3 → Print 2 immediately
Step 4 → File reading completes
Step 5 → Callback function executes
Step 6 → Print file content
```

### Why is it called Non-Blocking?

Because JavaScript does not wait for the file-reading operation to finish.

The remaining code continues to execute while Node.js handles the file operation in the background.

---

# Key Difference

## Synchronous (Blocking)

```javascript
const result = fs.readFileSync(
  "./ArchitectureFile.txt",
  "utf-8"
);

console.log(result);
```

### Characteristics

* Blocking
* Returns result directly
* Throws errors directly
* Simpler syntax
* Slower for large applications

---

## Asynchronous (Non-Blocking)

```javascript
fs.readFile(
  "./ArchitectureFile.txt",
  "utf-8",
  (err, result) => {
    console.log(result);
  }
);
```

### Characteristics

* Non-blocking
* Result is available inside callback
* Errors handled in callback
* Better performance
* Preferred in real-world Node.js applications

---

# Visual Comparison

## Synchronous

```text
Read File
    ↓
Wait
    ↓
Get Result
    ↓
Execute Next Line
```

## Asynchronous

```text
Start Reading File
    ↓
Execute Next Line
    ↓
File Reading Completes
    ↓
Run Callback Function
```

---

# Extra Note

## Checking CPU Cores

```javascript
const os = require("os");

console.log(os.cpus().length);
```

### Explanation

* `os.cpus()` returns information about all CPU cores.
* `.length` gives the total number of CPU cores available on the system.

### Example Output

```text
8
```

This means the system has 8 CPU cores.

---

# Quick Revision

| Method            | Type         | Blocking? |
| ----------------- | ------------ | --------- |
| `writeFileSync()` | Synchronous  | Yes       |
| `readFileSync()`  | Synchronous  | Yes       |
| `writeFile()`     | Asynchronous | No        |
| `readFile()`      | Asynchronous | No        |

## Rule of Thumb

* **Sync = Blocking**
* **Async = Non-Blocking**
* Node.js applications usually prefer **Async APIs** because they provide better performance and scalability.
