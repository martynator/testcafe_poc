import {Selector} from 'testcafe';

fixture`Getting Started`
    .page('http://devexpress.github.io/testcafe/example');

test('First test case', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button');

    const articleHeader = await Selector('.result-content').find('h1');

    // Obtain the text of the article header
    let headerText = await articleHeader.innerText;

});

test('Second test case', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .debug()
        .click('#submit-button')
        .expect();
});

test.only('sdfsdf test case', async t => {
    const header = await Selector('header').child('h1');
    const headerText = await header.innerText;
    console.log('--------------------' + headerText + '---------------------');
});
