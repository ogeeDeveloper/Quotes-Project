import { Route, Routes, Navigate } from 'react-router-dom'
import AllQuotes from './pages/AllQuotes'
import QuoteDetail from './pages/QuoteDetail'
import NewQuote from './pages/NewQuote'
import Comments from './components/comments/Comments'

function App() {
  // Handling Redirects in react-router-dom v6
  // const handlingRedirectsRoute = (req,res)=>{
  //   if(req.url=== '/'){
  //     return res.redirect("/quotes")
  //   }
  // }
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes/>} exact/>
        <Route path="/quotes/*" element={<QuoteDetail/>}>
          <Route path=":id" element={<Comments/>} />
        </Route>
        <Route path="/add-quote" element={<NewQuote/>}/>
      </Routes>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
