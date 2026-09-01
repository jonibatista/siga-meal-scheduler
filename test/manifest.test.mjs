import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const manifest = JSON.parse(
  await readFile(new URL("../manifest.json", import.meta.url), "utf8")
);

test("declares the metadata required for Firefox distribution", () => {
  const gecko = manifest.browser_specific_settings?.gecko;

  assert.equal(manifest.manifest_version, 3);
  assert.match(gecko?.id ?? "", /^[a-zA-Z0-9-._]+@[a-zA-Z0-9-._]+$/);
  assert.equal(gecko?.strict_min_version, "128.0");
  assert.deepEqual(gecko?.data_collection_permissions?.required, ["none"]);
});

test("requests no unused extension permissions", () => {
  assert.equal("permissions" in manifest, false);
  assert.equal("host_permissions" in manifest, false);
});
