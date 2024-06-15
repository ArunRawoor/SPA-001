// src/localStorage.js
export const saveUser = (user) => {
    localStorage.setItem(user.email, JSON.stringify(user));
  };
  
  export const getUser = (email) => {
    return JSON.parse(localStorage.getItem(email));
  };
  
  export const updateUserPassword = (email, newPassword) => {
    const user = getUser(email);
    if (user) {
      user.password = newPassword;
      saveUser(user);
    }
  };
  