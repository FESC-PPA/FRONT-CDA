import { Link } from "react-router-dom";
import Layout from "../layout";

const Error404Page = () => {
  return (
    <Layout>
        404
        <Link to="/" className="button button--dark">atrás</Link>
    </Layout>
  )
}

export default Error404Page;