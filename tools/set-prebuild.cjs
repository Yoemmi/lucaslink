const fs = require("fs");

const path = "package.json";
let raw = fs.readFileSync(path, "utf8");
if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1); // remove BOM

const pkg = JSON.parse(raw);
pkg.scripts = pkg.scripts || {};

pkg.scripts.prebuild = `node -e "const fs=require('fs'); fs.rmSync('.next',{recursive:true,force:true}); fs.rmSync('.turbo',{recursive:true,force:true});"`;
pkg.scripts.build = pkg.scripts.build || "next build";

fs.writeFileSync(path, JSON.stringify(pkg, null, 2) + "\n", "utf8");
console.log("OK: prebuild set");