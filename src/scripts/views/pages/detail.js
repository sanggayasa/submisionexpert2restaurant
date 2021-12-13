import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurant-source';

const Detail = {
  async render() {
    return `
      <h2>Detail Page</h2>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await RestaurantDbSource.detailMovie(url.id);
    console.log(movie);
  },
};

export default Detail;
