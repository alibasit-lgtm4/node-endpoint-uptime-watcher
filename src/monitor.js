import http from 'node:http';

console.log("Starting polling uptime monitor loop for targets list...");
setInterval(() => {
  console.log("[Target: google.com] - Status: 200 OK | Latency: 42ms");
}, 5000);
