import { takeSnapshot } from 'testcafe-blink-diff';

fixture('Snapshots')
  .page('https://www.google.com/');

test('check something here', async t => {
  // verify anything you want before
  
    await t.typeText('#APjFqb', 'testing');
    await t.click('.gNO89b');
   

  // then pass the `t` reference to invoke the helper
  await takeSnapshot(t);
});