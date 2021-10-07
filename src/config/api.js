import { create } from 'apisauce';
import { CamelcaseSerializer, SnakecaseSerializer } from 'cerealizr';

const baseURL = 'https://books-training-rails.herokuapp.com/api/v1';

if (baseURL === 'http://wolox.com') {
  console.warn('API baseURL has not been properly initialized'); // eslint-disable-line no-console
}

const STATUS_CODES = {
  unauthorized: 401
};

const snakecaseSerializer = new SnakecaseSerializer();
const camelcaseSerializer = new CamelcaseSerializer();

const api = create({
  /*
   * TODO Add this if you need it
   * baseURL: process.env.API_BASE_URL,
   */
  baseURL,
  timeout: 15000
});

// If you need to add more monitors consider calling api.addMonitor from your component
// eslint-disable-next-line no-unused-vars, prettier/prettier, @typescript-eslint/no-unused-vars
export const apiSetup = (unauthorizedCallback, networkErrorCallback) => {
  api.addMonitor((response) => {
    if (response.status === STATUS_CODES.unauthorized) {
      /*
       * TODO: These callbacks should only be called if no other callback was asigned for the response.
       * - i.e: unauthorizedCallback?.(response)
       */
    }
  });

  api.addMonitor((response) => {
    if (response.problem === 'NETWORK_ERROR') {
      /*
       * TODO: These callbacks should only be called if no other callback was asigned for the response.
       * - i.e: networkErrorCallback?.(response)
       */
    }
  });
};

api.addRequestTransform(request => {
  if(request.data) {
    request.data = snakecaseSerializer.serialize(request.data);
  }
});

api.addResponseTransform(response => {
  if(response.data) {
    response.data = camelcaseSerializer.serialize(response.data);
  }
})

export default api;
