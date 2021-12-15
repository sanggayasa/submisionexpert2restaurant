import RestaurantDbSource from '../../data/restaurant-source';
import { createItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="hero">
            <p tabindex="0" class="hero_judul">RESTORAN TERBAIK SAAT INI </p>
            <P tabindex="0" class="hero_desc">Pilih sesukamu , nikmati kelezataanya </P>
      </div>
      <div class="content">
        <div id="movies" class="movies">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.homeRestaurants();
    const restaurantsContainer = document.querySelector('#movies');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createItemTemplate(restaurant);
    });
  },
};

export default Home;
