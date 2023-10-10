import { Link } from "react-router-dom";
import {AppLayout} from "../../layouts/AppLayout";
import { AppHome } from "../../components";

const HomePage = () => {
  return (
    <AppLayout>
      <AppHome></AppHome>
    </AppLayout>
  )
}

export default HomePage;