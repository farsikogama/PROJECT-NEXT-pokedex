/* eslint-disable comma-dangle */
/* eslint-disable semi */
import axios, { Method } from 'axios'

/**
 * Under the hood doing axios request to the API endpoint
 *
 * @param {string} endpoint the API endpoint
 * @param {boolean} withToken need token or not / API endpoint protected or not
 * @param {object} options options for request with two properties: method and body, i.e. { method: 'POST', body: { title: 'Task 1', description: 'Lorem ipsum' } }
 * @param {object} head headers for request, e.g. { 'Content-Type' : 'application/json'  }
 * @returns
 */

export async function fetchFrom({
  endpoint,
  options,
}: {
  endpoint: string
  options: { method: Method; body?: string }
}) {
  try {
    const method = options ? options.method : 'GET'
    const data = options ? options.body : ''

    const response = await axios({
      method,
      url: `${endpoint}`,
      data,
    })

    return {
      ...response.data,
      status: response.status,
      statusText: response.statusText,
    }
  } catch (err) {
    console.error(err.message)
  }
}

export const getAllPoke = (endpoint: string) => {
  return fetchFrom({ endpoint, options: { method: 'GET' } })
}

export const getPokeDetail = (endpoint: string) => {
  return fetchFrom({ endpoint, options: { method: 'GET' } })
}
