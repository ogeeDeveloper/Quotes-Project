import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";

function App() {
  // Handling Redirects in react-router-dom v6
  // const handlingRedirectsRoute = (req,res)=>{
  //   if(req.url=== '/'){
  //     return res.redirect("/quotes")
  //   }
  // }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} exact />
        <Route path="/quotes/:quoteId" element={<QuoteDetail />} />
        <Route path="/add-quote" element={<NewQuote />} />
      </Routes>
    </Layout>
  );
}

export default App;
