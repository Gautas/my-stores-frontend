const localHost = typeof window !== 'undefined'
  && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

export const API_URL = localHost
  ? 'http://localhost:8080/api'
  : 'https://my-stores-backend.onrender.com/api';
