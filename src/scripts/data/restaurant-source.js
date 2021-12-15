import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async homeRestaurants() {
    const response = await fetch(API_ENDPOINT.NOW_PLAYING);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async upcomingRestaurants() {
    const response = await fetch(API_ENDPOINT.UPCOMING);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantDbSource;
