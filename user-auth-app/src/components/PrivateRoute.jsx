// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { isAuthenticated } = useAuth();

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? <Component /> : <Navigate to="/login" />}
//     />
//   );
// };

// export default PrivateRoute;






// // src/components/PrivateRoute.js
// import React from 'react';
// import { Navigate, Route } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const PrivateRoute = ({ element: Element, ...rest }) => {
//   const { isAuthenticated } = useAuth();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   return <Route {...rest} element={<Element />} />;
// };

// export default PrivateRoute;











// // src/components/PrivateRoute.js
// import React from 'react';
// import { Navigate, Route } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const PrivateRoute = ({ element: Element, ...rest }) => {
//   const { isAuthenticated } = useAuth();

//   return isAuthenticated ? <Route {...rest} element={<Element />} /> : <Navigate to="/login" replace />;
// };

// export default PrivateRoute;
















// PrivateRoute.jsx

// import React from 'react';
// import { Navigate, Route } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const PrivateRoute = ({ element, ...props }) => {
//   const { isAuthenticated } = useAuth();

//   return isAuthenticated ? (
//     <Route {...props} element={element} />
//   ) : (
//     <Navigate to="/login" />
//   );
// };

// export default PrivateRoute;






// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  console.log(isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

