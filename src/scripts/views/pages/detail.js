import TheRestaurantDbSorce from '../../data/restaurantdb-sorce';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../template/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <section class="content detail">
        <div id="detail-resto" class="resto-detail"></div>
      </section>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDbSorce.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail-resto');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
