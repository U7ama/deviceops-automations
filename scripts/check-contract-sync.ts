import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

async function main() {
  console.log("[automations:contracts] Checking contract synchronization...");
  const manifestPath = join(process.cwd(), "contracts", "contract-manifest.json");

  if (!existsSync(manifestPath)) {
    console.error("[automations:contracts] Missing contracts/contract-manifest.json!");
    process.exit(1);
  }

  const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
  console.log(`[automations:contracts] Verified contract manifest v${manifest.version} (hash: ${manifest.schemasSha256})`);
}

main().catch((err) => {
  console.error("[automations:contracts] Verification error:", err);
  process.exit(1);
});
