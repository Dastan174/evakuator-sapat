const { spawn, execFileSync } = require("node:child_process");
const path = require("node:path");

const port = process.env.PORT || "3000";
const root = path.resolve(__dirname, "..");
const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");

function findPid() {
  try {
    const output = execFileSync("cmd.exe", ["/d", "/s", "/c", `netstat -ano | findstr LISTENING | findstr :${port}`], { encoding: "utf8", windowsHide: true });
    const match = output.match(/LISTENING\s+(\d+)\s*$/m);
    return match?.[1];
  } catch {
    return undefined;
  }
}

const pid = findPid();
if (pid && pid !== String(process.pid)) {
  try {
    execFileSync("taskkill.exe", ["/PID", pid, "/T", "/F"], { stdio: "ignore", windowsHide: true });
    console.log(`Stopped the old process on port ${port}.`);
  } catch {
    console.warn(`Could not stop the old process on port ${port}; starting Next.js anyway.`);
  }
}

const next = process.platform === "win32"
  ? spawn(process.execPath, [nextCli, "dev", "-p", port], {
      cwd: root,
      stdio: "inherit",
      windowsHide: false,
    })
  : spawn(nextCli, ["dev", "-p", port], {
      cwd: root,
      stdio: "inherit",
    });

next.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 0);
});
