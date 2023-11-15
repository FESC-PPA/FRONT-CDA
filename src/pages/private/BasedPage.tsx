import { AdminLayout } from "../../layouts/AdminLayout";
import { useParams } from "react-router-dom";
import { BasedView } from "../../components";

const BasedPage = () => {
  const { id } = useParams();
  return (
    <AdminLayout>
      <BasedView id={id} />
    </AdminLayout>
  );
};

export default BasedPage;
