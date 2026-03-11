
import { test, expect } from '@playwright/test';

//this runs ONCE before all tests in this file
test.beforeAll(async () => {
  console.log('Test - BEFORE ALL');
});

//this runs BEFORE EACH test (even when tests run in parallel)
test.beforeEach(async () => {
  console.log('Test - BEFORE EACH');
});

//this runs AFTER EACH test (even when tests run in parallel)
test.afterEach(async () => {
  console.log('Test - AFTER EACH');
});

//Test 1, 2 & 3 run in PARALLEL (concurrently)
test.describe.parallel('DESCRIBE block', () => {
  test('Test 1 - descriptive test to show', async () => {
    console.log('Test 1 - doing something');
    await new Promise(r => setTimeout(r, 100)); //short wait to see exe order
  });

  test('Test 2 - descriptive test to show', async () => {
    console.log('Test 2 - doing something else');
    await new Promise(r => setTimeout(r, 100));
  });

  test('Test 3 - descriptive test to show', async () => {
    console.log('Test 3 - doing something ELSE');
    await new Promise(r => setTimeout(r, 100));
  });
});
