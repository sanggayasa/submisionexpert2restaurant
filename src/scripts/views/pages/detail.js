import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurant-source';
import {
  createMovieDetailTemplate, createDetailFood, createDetailDrink, createDetailReview,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantDbSource.detailMovie(url.id);

    const { foods, drinks } = detail.restaurant.menus;
    const { customerReviews } = detail.restaurant;

    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML += createMovieDetailTemplate(detail);
    movieContainer.innerHTML += await createDetailFood(foods);
    movieContainer.innerHTML += await createDetailDrink(drinks);
    movieContainer.innerHTML += await createDetailReview(customerReviews);
  },
};

export default Detail;
