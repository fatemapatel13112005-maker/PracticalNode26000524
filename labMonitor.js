
console.clear();
const path = require('path');

// Define a file path
const filePath = '"D:/MscCsCoOp/Sem-1/practicalexamNode/logs/session.log"';
const fileName = "D:/MscCsCoOp/Sem-1/practicalexamNode/reports/summary.txt"

// Extract the file extension
const fileExtension = path.extname(filePath);

console.log(`Workspace created/verified:`);
console.log(`log file: ${filePath}`);
console.log(`File Extension: ${fileExtension}`);
const os = require('os');

// Basic system information
console.log(`OS Platform: ${os.platform()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Hostname: ${os.hostname()}`);

// Memory information
const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
console.log(`Memory: ${freeMemGB}GB free of ${totalMemGB}GB`);

// User information
const userInfo = os.userInfo();
console.log(`Current User: ${userInfo.username}`);
console.log(`Home Directory: ${os.homedir()}`);

const EventEmitter = require('events');

// Initialize the event emitter
const sessionEmitter = new EventEmitter();

// 1. Define the event listener (What happens when the event is triggered)
sessionEmitter.on('sessionStart', () => {
    console.log('Session started successfully');
    console.log('Total log entries');
    console.log(`Reports: ${fileName}`);
});

// 2. Trigger the custom event
sessionEmitter.emit('sessionStart');
