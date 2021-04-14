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
