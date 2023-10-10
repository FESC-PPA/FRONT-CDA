import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import LoginForm from "../../components/LoginForm";
import {AppLayout} from "../../layouts/AppLayout";

const LoginPage = () => {
  
  return (
    <AppLayout>
          <LoginForm></LoginForm>
    </AppLayout>
  );
};

export default LoginPage;
