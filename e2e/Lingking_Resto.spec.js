/* eslint-disable no-undef */
Feature('Lingking Resto');
const assert = require('assert');

Before((I) => {
  I.amOnPage('/');
});

Scenario('linking like resto', async (I) => {
  I.seeElement('#restaurants');
  const firstResto = locate('.restaurant-item__content h3 a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const likedRestoTitle = await I.grabTextFrom('.restaurant-item__content h3');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('linking unlike resto', async (I) => {
  I.seeElement('.restaurant-item');
  I.click(locate('.restaurant-item__content h3 a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.see('', '.restaurants');
});
