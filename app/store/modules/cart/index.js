import cartData from './mock/cart';
import api from './../../utils/api';

export default {
  namespaced: true,
  state: {
    /**
     * @type {Object}   Stores cart items
     */
    cart: cartData, // TODO - remove mock data once we have the api

    /**
     * @type {Object} API error
     */
    apiError: null,
  },
  getters: {
    /**
     * Gets the cart
     *
     * @param   {Object}  state   Current state
     *
     * @returns  {Object}  cart   Cart data
     */
    cart: state => state.cart,
  },
  mutations: {
    /**
     * Initial cart data provided by spryker
     *
     * @param {Object} state   State
     * @param {Object} data   Cart data
     */
    data(state, data) {
      state.cart = data;
    },

    /**
     * Update totals for cart
     *
     * @param {Object} state   State object
     * @param {Object} totals   TotalsDataObject
     */
    updateTotals(state, totals) {
      state.cart.totals = totals;
    },
  },
  actions: {
    /**
     * Asynchronously add product to cart
     *
     * @param {string} quantity   Amount of product units to be added
     * @param {string} sku   Sku of the product to be added
     *
     * @returns {Promise} Promise object
     */
    addToCart({ commit }, sku, quantity) {
      return api.post('/cart/1', { sku, quantity }) // TODO - replace id of cart
        .then((response) => {
          if (response && response.data && response.data.totals && Object.keys(response.data.totals).length) {
            commit('updateTotals', response.data.totals);

            return response;
          }
          throw new Error('apiFailure');
      });
    },
  },
};
