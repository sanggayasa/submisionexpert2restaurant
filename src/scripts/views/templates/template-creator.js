/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable comma-spacing */
/* eslint-disable no-unused-expressions */
import CONFIG from '../../globals/config';

const createMovieDetailTemplate = (detail) => `
  <h2 class="movie__title">${detail.restaurant.name}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + detail.restaurant.pictureId}" alt="${detail.restaurant.title}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>alamat</h4>
    <p>${detail.restaurant.address}</p>
    <h4>Kota</h4>
    <p>${detail.restaurant.city}</p>
    <h4>Description</h4>
    <p>${detail.restaurant.description} minutes</p>
    <h4>Rating</h4>
    <p>${detail.restaurant.rating}</p>
  </div>
`;

const createMovieItemTemplate = (restaurant) => `
  <div class="movie-item">
    <div class="movie-item__header">
        <img class="movie-item__header__poster" alt="${restaurant.title}"
            src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="movie-item__header__rating">
            <p>⭐️<span class="movie-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="movie-item__content">
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

export {
  createMovieItemTemplate, createMovieDetailTemplate, createDetailFood, createDetailDrink,createDetailReview
};
