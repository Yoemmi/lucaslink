const fs = require("fs");

const cfg = process.env.FIREBASE_WEBAPP_CONFIG; // lo da App Hosting en BUILD
if (!cfg) {
  console.log("No FIREBASE_WEBAPP_CONFIG in env (local build ok).");
  process.exit(0);
}

// Escribimos un .env.production.local para que Next lo inlinee como NEXT_PUBLIC_*
const line =
  "NEXT_PUBLIC_FIREBASE_WEBAPP_CONFIG='" +
  cfg.replace(/'/g, "\\'") +
  "'\n";

fs.writeFileSync(".env.production.local", line, "utf8");
console.log("OK: wrote .env.production.local with NEXT_PUBLIC_FIREBASE_WEBAPP_CONFIG");
