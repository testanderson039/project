import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the base URL for our API
const baseUrl = 'http://localhost:12000/api';

// Create the API service
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      // Get the token from localStorage
      const token = localStorage.getItem('token');
      
      // If we have a token, add it to the headers
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      
      return headers;
    },
  }),
  tagTypes: ['User', 'Shop', 'Product', 'Order'],
  endpoints: (builder) => ({}),
});

// Export hooks for each endpoint
export const {} = api;