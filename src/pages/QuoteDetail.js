import {Outlet} from 'react-router-dom'

const QuoteDetail = () => {
    // const param = useParams()
    // console.log(param.quotesID)
    return (
        <>
            <h1>Quote Detail</h1>
            <Outlet />
        </>
    )
}

export default QuoteDetail
