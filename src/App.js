import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";

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
        <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
          <Route path={`/quotes/:quoteId/comments`} element={<Comments />} />
        </Route>
        <Route path="/add-quote" element={<NewQuote />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
