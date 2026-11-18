const { spawn } = require("node:child_process");
const { execSync } = require("node:child_process");
const path = require("node:path");

const port = process.env.PORT || "3000";
const root = path.resolve(__dirname, "..");

function findPid() {
  try {
    const output = execSync(`netstat -ano | findstr LISTENING | findstr :${port}`, { encoding: "utf8", windowsHide: true });
    const match = output.match(/LISTENING\s+(\d+)\s*$/m);
    return match?.[1];
  } catch {
    return undefined;
  }
}

const pid = findPid();
if (pid && pid !== String(process.pid)) {
  try {
    execSync(`taskkill //PID ${pid} //T //F`, { stdio: "ignore", windowsHide: true });
    console.log(`Stopped the old process on port ${port}.`);
  } catch {
    console.warn(`Could not stop the old process on port ${port}; starting Next.js anyway.`);
  }
}

const next = spawn(process.platform === "win32" ? "npx.cmd" : "npx", ["next", "dev", "-p", port], {
  cwd: root,
  stdio: "inherit",
  shell: false,
  windowsHide: false,
});

next.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 0);
});
