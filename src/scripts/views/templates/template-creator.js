/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable comma-spacing */
/* eslint-disable no-unused-expressions */
import CONFIG from '../../globals/config';

const createDetailTemplate = (detail) => `
  <h2 tabindex="0" class="restaurant__title">${detail.restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + detail.restaurant.pictureId}" alt="${detail.restaurant.title}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4 tabindex="0">alamat</h4>
    <p tabindex="0">${detail.restaurant.address}</p>
    <h4 tabindex="0">Kota</h4>
    <p tabindex="0">${detail.restaurant.city}</p>
    <h4 tabindex="0">Description</h4>
    <p tabindex="0">${detail.restaurant.description} minutes</p>
    <h4 tabindex="0">Rating</h4>
    <p tabindex="0">${detail.restaurant.rating}</p>
  </div>
`;

const createItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img loading="lazy" width="100%" height="100%" class="restaurant-item__header__poster" alt="${restaurant.title}"
            src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createDetailFood = (foods) => {
  let text = '<h4>Makanan</h4>';
  foods.forEach((food) => {
    text += `<p>${food.name}</p>`;
  });
  return text;
};

const createDetailDrink = (drinks) => {
  let text = '<h4>Minuman</h4>';
  drinks.forEach((drink) => {
    text += `<p>${drink.name}</p>`;
  });
  return text;
};

const createDetailReview = (customerReviews) => {
  let text = '<h4>Review</h4>';
  customerReviews.forEach((review) => {
    text += `<p>nama : ${review.name}</p>
             <p>review : ${review.review}</p>
             <p>Date : ${review.date}</p>
    `;
  });
  return text;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createItemTemplate, createDetailTemplate, createDetailFood, createDetailDrink,createDetailReview,createLikeButtonTemplate,
  createLikedButtonTemplate
};
