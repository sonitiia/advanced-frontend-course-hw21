import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  MAIN_ROUTE,
  NOT_FOUND_ROUTE,
  PROFILE_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_OUT_ROUTE,
  SIGN_UP_ROUTE,
} from "./Routes";

import PageNotFoundRoute from "../routes/PageNotFoundRoute";
import SignInRoute from "../routes/SignInRoute";
import SignUpRoute from "../routes/SignUpRoute";
import ProfileRoute from "../routes/ProfileRoute";
import NarrowLayout from "../layouts/NarrowLayout";
import useAuth from "../auth/useAuth";
import RequireAuth from "../auth/RequireAuth";
import SignOutRoute from "../routes/SignOutRoute";

const Router = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {!isAuthenticated ? (
        <Route path={MAIN_ROUTE} element={<NarrowLayout />}>
          <Route index element={<Navigate to={SIGN_IN_ROUTE} replace />} />
          <Route path={SIGN_IN_ROUTE} element={<SignInRoute />} />
          <Route path={SIGN_UP_ROUTE} element={<SignUpRoute />} />
          <Route path={SIGN_OUT_ROUTE} element={<SignOutRoute />} />
          <Route
            path={SIGN_OUT_ROUTE}
            element={<Navigate to={SIGN_IN_ROUTE} />}
          />
          <Route path="*" element={<Navigate to={SIGN_IN_ROUTE} replace />} />
        </Route>
      ) : (
        <Route element={<RequireAuth authRoute={SIGN_IN_ROUTE} />}>
          <Route path={MAIN_ROUTE} element={<NarrowLayout />}>
            <Route index path={PROFILE_ROUTE} element={<ProfileRoute />} />
            <Route element={<Navigate to={PROFILE_ROUTE} replace />} />
            <Route path={SIGN_OUT_ROUTE} element={<SignOutRoute />} />
            <Route path={SIGN_IN_ROUTE} element={<SignInRoute />} />
            <Route path={SIGN_UP_ROUTE} element={<SignUpRoute />} />
            <Route path={NOT_FOUND_ROUTE} element={<PageNotFoundRoute />} />
            <Route
              path="*"
              element={<Navigate to={NOT_FOUND_ROUTE} replace />}
            />
          </Route>
        </Route>
      )}
    </Routes>
  );
};

export default Router;
