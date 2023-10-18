import { AdminLayout } from "../../layouts/AdminLayout";
import { useParams } from "react-router-dom";

const BasedPage = () => {
  const { id } = useParams();
  return <AdminLayout>{id}</AdminLayout>;
};

export default BasedPage;
