import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";
import QuoteDetail from "./pages/QuoteDetail";
import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AllQuotes = lazy(() => import("./pages/AllQuotes"));
const NewQuote = lazy(() => import("./pages/NewQuote"));

function App() {
  // Handling Redirects in react-router-dom v6
  // const handlingRedirectsRoute = (req,res)=>{
  //   if(req.url=== '/'){
  //     return res.redirect("/quotes")
  //   }
  // }

  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate replace to="/quotes" />} />
          <Route path="/quotes" element={<AllQuotes />} exact />
          <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
            <Route path={`/quotes/:quoteId/comments`} element={<Comments />} />
          </Route>
          <Route path="/add-quote" element={<NewQuote />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
