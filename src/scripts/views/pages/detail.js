/* eslint-disable max-len */
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurant-source';
import {
  createDetailTemplate, createDetailFood, createDetailDrink, createDetailReview,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div tabindex="0" id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantDbSource.detailResto(url.id);
    const details = detail.restaurant;
    const { foods, drinks } = detail.restaurant.menus;
    const { customerReviews } = detail.restaurant;

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML += createDetailTemplate(detail);
    restaurantContainer.innerHTML += await createDetailFood(foods);
    restaurantContainer.innerHTML += await createDetailDrink(drinks);
    restaurantContainer.innerHTML += await createDetailReview(customerReviews);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: details.id,
        name: details.name,
        description: details.description,
        pictureId: details.pictureId,
        rating: details.rating,
      },
    });
  },
};

export default Detail;
