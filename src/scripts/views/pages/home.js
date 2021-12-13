import RestaurantDbSource from '../../data/restaurant-source';

const Home = {
  async render() {
    return `
      <h2>Home</h2>
    `;
  },

  async afterRender() {
    const movies = await RestaurantDbSource.nowPlayingMovies();
    console.log(movies);
  },
};

export default Home;
