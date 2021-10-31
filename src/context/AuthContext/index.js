import React, { createContext, useReducer, useEffect } from "react";
import * as _ from "lodash";
const initialState = {
  user: {},
  token: null,
  isAuthenticated: false,
};
export const AuthContext = createContext(initialState);

function UserReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      const { user, token } = action.payload;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      return {
        ...state,
        user: user,
        token: token,
        isAuthenticated: !_.isEmpty(user) && token,
      };
    case "LOGOUT":
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

export const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  useEffect(() => {
    login({
      user: JSON.parse(localStorage.getItem("user")),
      token: localStorage.getItem("token"),
    });
  }, []);
  // actions
  const login = async ({ user, token }) => {
    dispatch({ type: "LOGIN", payload: { user, token } });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT", payload: null });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
