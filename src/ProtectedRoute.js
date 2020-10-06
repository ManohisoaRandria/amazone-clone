import React from "react";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { useStateValue } from "./StateProvider";

function ProtectedRoute({ component: C, ...props }) {
  const [{ user }] = useStateValue();

  return (
    <Route
      {...props}
      render={(prop) => {
        if (user != null) return <C {...prop} />;
        else return <Redirect to="/login" />;
      }}
    />
  );
}

export default ProtectedRoute;
