import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import { AppLayout } from "../../layouts/AppLayout";
import { RegisterForm } from "../../components";

const RegisterPage = () => {
  return (
    <AppLayout>
      <RegisterForm></RegisterForm>
    </AppLayout>
  );
};

export default RegisterPage;
