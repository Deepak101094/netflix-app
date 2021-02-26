export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

export const login = ({userId, userEmail}) => {
  return {
    type: USER_LOGIN,
    payload: {
      userId,
      userEmail,
    },
  };
};

export const logout = () => {
  return {
    type: USER_LOGOUT,
  };
};
