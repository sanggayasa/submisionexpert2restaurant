import RestaurantDbSource from '../../data/restaurant-source';

const Upcoming = {
  async render() {
    return `
      <h2>Upcoming page</h2>
    `;
  },

  async afterRender() {
    const movies = await RestaurantDbSource.upcomingRestaurants();
    console.log(movies);
  },
};

export default Upcoming;
