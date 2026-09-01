import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const script = await readFile(new URL("../content.js", import.meta.url), "utf8");

test("handles a calendar that is already present when the content script starts", () => {
  let observer;

  class MutationObserver {
    constructor() {
      observer = this;
      this.disconnected = false;
    }

    observe() {}

    disconnect() {
      this.disconnected = true;
    }
  }

  const calendar = {};
  const document = {
    body: {},
    getElementById: () => null,
    querySelector: (selector) => {
      if (selector === ".calendar-info-plates") return calendar;
      return null;
    }
  };

  assert.doesNotThrow(() => {
    vm.runInNewContext(script, { MutationObserver, console, document });
  });
  assert.equal(observer.disconnected, true);
});
