const fs = require("fs");

const raw = process.env.FIREBASE_WEBAPP_CONFIG;
if (!raw) {
  console.log("No FIREBASE_WEBAPP_CONFIG in env (local build ok).");
  process.exit(0);
}

let cfg;
try { cfg = JSON.parse(raw); }
catch (e) {
  console.error("FIREBASE_WEBAPP_CONFIG is not valid JSON:");
  console.error(raw);
  process.exit(1);
}

const lines = [
  `NEXT_PUBLIC_FIREBASE_API_KEY=${cfg.apiKey ?? ""}`,
  `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=${cfg.authDomain ?? ""}`,
  `NEXT_PUBLIC_FIREBASE_PROJECT_ID=${cfg.projectId ?? ""}`,
  `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=${cfg.storageBucket ?? ""}`,
  `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=${cfg.messagingSenderId ?? ""}`,
  `NEXT_PUBLIC_FIREBASE_APP_ID=${cfg.appId ?? ""}`,
  `NEXT_PUBLIC_FIREBASE_DATABASE_URL=${cfg.databaseURL ?? ""}`,
  // extra compat por si tu código usa JSON completo:
  `NEXT_PUBLIC_FIREBASE_WEBAPP_CONFIG=${JSON.stringify(cfg)}`,
];

if (cfg.measurementId) lines.push(`NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=${cfg.measurementId}`);

fs.writeFileSync(".env.production.local", lines.join("\n") + "\n", "utf8");
console.log("OK: wrote .env.production.local (NEXT_PUBLIC_FIREBASE_*)");
