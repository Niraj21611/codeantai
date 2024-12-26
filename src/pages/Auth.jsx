import React from "react";
import LeftSection from "../components/Auth/LeftSection";
import RightSection from "../components/Auth/RightSection";
import AuthLayout from "../components/Auth/AuthLayout";

function Auth() {
  return (
    <AuthLayout>
      <LeftSection />
      <RightSection />
    </AuthLayout>
  );
}

export default Auth;
