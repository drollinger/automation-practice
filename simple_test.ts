import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("Test that always passes", () => {
  const a = 5;
  const b = 10;
  const sum = a + b;

  // Assertion
  assertEquals(sum, 15);
});
