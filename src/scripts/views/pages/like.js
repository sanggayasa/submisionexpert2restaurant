import FavoriteIdb from '../../data/favorite-idb';
import { createItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Movie</h2>
        <div id="movies" class="movies">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteIdb.getAllResto();
    const restaurantContainer = document.querySelector('#movies');
    restaurants.forEach((resto) => {
      restaurantContainer.innerHTML += createItemTemplate(resto);
    });
  },
};

export default Like;
