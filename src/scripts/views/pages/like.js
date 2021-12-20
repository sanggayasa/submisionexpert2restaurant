import FavoriteIdb from '../../data/favorite-idb';
import { createItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Restaurant</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteIdb.getAllResto();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((resto) => {
      restaurantContainer.innerHTML += createItemTemplate(resto);
    });
  },
};

export default Like;
