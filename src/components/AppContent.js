import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";
import Private from "../privateRoute/privateRoute";
// routes config
import routes from "../routes";

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={
                    <Private>
                      <route.element />
                    </Private>
                  }
                />
              )
            );
          })}
          <Route
            path="/"
            element={
              <Private>
                <Navigate to="dashboard" replace />
              </Private>
            }
          />
        </Routes>
      </Suspense>
    </CContainer>
  );
};

export default React.memo(AppContent);
