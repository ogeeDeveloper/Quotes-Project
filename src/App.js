import {Route, Router} from 'react-router-dom'
import {AllQuotes} from './pages/AllQuotes'
import {QuoteDetail} from './pages/QuoteDetail'
import {NewQuote} from './pages/NewQuote'

function App() {
  return (
    <div>
      <Router>
        <Route path="/quotes" element={<AllQuotes/>}/>
        <Route path="/quotes/:quotesID" element={<QuoteDetail/>}/>
        <Route path="/add-quote" element={<NewQuote/>}/>
      </Router>
      hello
    </div>
  );
}

export default App;
