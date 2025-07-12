// src/services/authService.js
export const login = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@demo.com' && password === '123456') {
        
        localStorage.setItem('token', 'mock-token-123');
        resolve('mock-token-123');
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};
