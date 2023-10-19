import { AdminLayout } from "../../layouts/AdminLayout";
import { useParams } from "react-router-dom";
import { VerSede } from "../../components";

const BasedPage = () => {
  const { id } = useParams();
  return (
    <AdminLayout>
      <VerSede id={parseInt(id)} />
    </AdminLayout>
  );
};

export default BasedPage;
