const FileHandling = require("fs");

// ==========================================================
// FILE SYSTEM (fs) MODULE
// ==========================================================

// fs is a built-in Node.js module used to interact with files.

// ==========================================================
// 1. CREATE A FILE + WRITE DATA
// ==========================================================

// -------------------------
// SYNCHRONOUS
// -------------------------

// Syntax:
// FileHandling.writeFileSync("fileName", "data")

// Example:
// FileHandling.writeFileSync(
//   "./test.txt",
//   "Hello, I am studying file handling in Node.js"
// );

// Explanation:
// - Creates a new file if it does not exist.
// - Overwrites existing content if the file already exists.
// - Synchronous (blocking) operation.

// -------------------------
// ASYNCHRONOUS
// -------------------------

// Syntax:
// FileHandling.writeFile("fileName", "data", (err) => {})

// Example:
// FileHandling.writeFile(
//   "./test.txt",
//   "Hello, I am an asynchronous file",
//   (err) => {
//     if (err) {
//       console.log("Error:", err);
//     }
//   }
// );

// Explanation:
// - Creates a new file if it does not exist.
// - Overwrites existing content if the file already exists.
// - Asynchronous (non-blocking) operation.
// - Uses a callback for error handling.

// ==========================================================
// 2. READ A FILE
// ==========================================================

// -------------------------
// SYNCHRONOUS
// -------------------------

// Syntax:
// const result = FileHandling.readFileSync("fileName", "encoding");

// Example:
// const result = FileHandling.readFileSync(
//   "./contacts.txt",
//   "utf-8"
// );

// console.log(result);

// Explanation:
// - Returns file content directly.
// - Throws an error if something goes wrong.
// - Synchronous (blocking) operation.

// -------------------------
// ASYNCHRONOUS
// -------------------------

// Syntax:
// FileHandling.readFile(
//   "fileName",
//   "encoding",
//   (err, result) => {}
// );

// Example:
// FileHandling.readFile(
//   "./contacts.txt",
//   "utf-8",
//   (err, result) => {
//     if (err) {
//       console.log("Error:", err);
//     } else {
//       console.log(result);
//     }
//   }
// );

// Explanation:
// - Does not return data directly.
// - Result is received inside the callback.
// - Error handling must be done manually.
// - Asynchronous (non-blocking) operation.

// ==========================================================
// BLOCKING VS NON-BLOCKING
// ==========================================================

// Synchronous methods:
// - Blocking
// - Execute line by line
// - Wait until current task finishes

// Asynchronous methods:
// - Non-blocking
// - Do not stop execution of the remaining code
// - Use callbacks for handling results

// ==========================================================
// 3. APPEND DATA TO A FILE
// ==========================================================

// Syntax:
// FileHandling.appendFileSync("fileName", "data");

// Example:
// FileHandling.appendFileSync(
//   "./contacts.txt",
//   `Log in date: ${Date.now()}\n`
// );

// Explanation:
// - Adds data at the end of the file.
// - "\n" moves content to the next line.

// ==========================================================
// 4. COPY A FILE
// ==========================================================

// Syntax:
// FileHandling.cpSync("sourceFile", "destinationFile");

// Example:
// FileHandling.cpSync(
//   "./contacts.txt",
//   "./test.txt"
// );

// Explanation:
// - Creates a copy of the source file.

// ==========================================================
// 5. DELETE A FILE
// ==========================================================

// Syntax:
// FileHandling.unlinkSync("fileName");

// Example:
// FileHandling.unlinkSync("./test.txt");

// Explanation:
// - Permanently deletes the specified file.

// ==========================================================
// QUICK REVISION
// ==========================================================

// writeFileSync()  -> Create/Write File (Sync)
// writeFile()      -> Create/Write File (Async)

// readFileSync()   -> Read File (Sync)
// readFile()       -> Read File (Async)

// appendFileSync() -> Add data to existing file

// cpSync()         -> Copy file

// unlinkSync()     -> Delete file
