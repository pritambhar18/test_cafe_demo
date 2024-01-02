
fixture("Start test").page("https://www.google.com/");


test('1st test',async t => {
    await t.typeText('#APjFqb', 'testing');
    await t.click('.gNO89b');
    await t.wait(2000);

});

test('2nd test',async t => {

});