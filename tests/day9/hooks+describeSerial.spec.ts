
import { test, expect } from '@playwright/test';


//this runs ONCE before ALL tests
test.beforeAll(async () => {
  console.log("Test - BEFORE ALL");
});

//this runs BEFORE every test
test.beforeEach(async () => {
  console.log("Test - BEFORE EACH");
});

//this runs AFTER every test
test.afterEach(async () => {
  console.log("Test - AFTER EACH");
});

//tests 1, 2, 3 run one after the other as listed bellow
test.describe.serial("DESCRIBE block", () => {

  test("Simple Test 1", async () => {
    console.log("TEST 1 runs FIRST doing something");
  });

  test("Simple Test 2", async () => {
    console.log("TEST 2 runs SECOND doing something else");
  });

  test("Simple Test 3", async () => {
    console.log("TEST 3 runs THIRD doing something ELSE");
  });

});

