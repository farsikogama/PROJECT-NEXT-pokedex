/* eslint-disable semi */
import axios from 'axios';

/**
 * Under the hood doing axios request to the API endpoint
 *
 * @param {string} endpoint the API endpoint
 * @param {boolean} withToken need token or not / API endpoint protected or not
 * @param {object} options options for request with two properties: method and body, i.e. { method: 'POST', body: { title: 'Task 1', description: 'Lorem ipsum' } }
 * @param {object} head headers for request, e.g. { 'Content-Type' : 'application/json'  }
 * @returns
 */

export async function fetchFrom(endpoint, token, options, head) {
  try {
    const headers = token
      ? { token: localStorage.getItem('token'), ...head }
      : { ...head };
    const method = options ? options.method : 'GET';
    const data = options ? options.body : '';

    const response = await axios({
      method,
      url: `${endpoint}`,
      headers,
      data,
    });

    return {
      ...response.data,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (err) {
    console.error(err.message);
  }
  1;
}

export const getAllPoke = (endpoint) => {
  return fetchFrom(`${endpoint}`, false);
};

export const getPokeDetail = (endpoint) => {
  return fetchFrom(`${endpoint}`, false);
};
