import React from 'react'

const api = (cb, delay) => {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(cb());
    }, delay);
  });

  return 
}

export default api