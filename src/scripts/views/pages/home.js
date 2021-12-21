import RestaurantDbSource from '../../data/restaurant-source';
import { createItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="hero">
            <picture>
                <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg" >
                <img src='./images/hero-image_4-large.jpg' alt="dirt rally poster" ></img>
            </picture>
            <p tabindex="0" class="hero_judul">RESTORAN TERBAIK SAAT INI </p>
            <P tabindex="0" class="hero_desc">Pilih sesukamu , nikmati kelezataanya </P>
      </div>
      <div class="content">
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.homeRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createItemTemplate(restaurant);
    });
  },
};

export default Home;
