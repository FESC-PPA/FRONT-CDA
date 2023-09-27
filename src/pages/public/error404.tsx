import { Link } from "react-router-dom";
import Layout from "../layout";

const Error404Page = () => {
  return (
    <Layout>
      <section className="not-found pt-5 pb-5 d-flex flex-column align-items-center justify-content-center">
        404
        <Link to="/" className="button button--dark">atrás</Link>
      </section>
    </Layout>
  )
}

export default Error404Page;