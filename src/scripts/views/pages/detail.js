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
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantDbSource.detailResto(url.id);
    const details = detail.restaurant;
    const { foods, drinks } = detail.restaurant.menus;
    const { customerReviews } = detail.restaurant;

    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML += createDetailTemplate(detail);
    movieContainer.innerHTML += await createDetailFood(foods);
    movieContainer.innerHTML += await createDetailDrink(drinks);
    movieContainer.innerHTML += await createDetailReview(customerReviews);
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
