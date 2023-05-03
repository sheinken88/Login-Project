// import { useState, createContext } from "react";

// const initialState = {
//   id: "",
//   name: "",
//   email: "",
//   age: "",
//   nationality: "",
//   isAuthenticated: false,
//   logUser: () => null,
//   logOut: () => null,
// };

// export const AuthContext = createContext(initialState);

// export const AuthContextProvider = ({ children }) => {
//   const [auth, setAuth] = useState({
//     id: "",
//     name: "",
//     email: "",
//     age: "",
//     nationality: "",
//     isAuthenticated: false,
//   });
//   const logUser = (user) => {
//     setAuth({
//       id: user.id,
//       name: user.name,
//       email: user.email,
//       age: user.age,
//       nationality: user.nationality,
//       isAuthenticated: true,
//     });
//   };

//   const logOut = () => {
//     setAuth({
//       name: "",
//       email: "",
//       age: "",
//       nationality: "",
//       isAuthenticated: false,
//     });
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         name: auth.name,
//         email: auth.email,
//         age: auth.age,
//         nationality: auth.nationality,
//         isAuthenticated: auth.isAuthenticated,
//         logUser,
//         logOut,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
