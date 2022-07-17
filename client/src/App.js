import AllRoutes from "./route";
import Layout from "./layout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <AllRoutes />
      </Layout>
    </Router>
  );
}

export default App;
