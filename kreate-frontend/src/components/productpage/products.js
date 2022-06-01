import React,{useState,useEffect} from "react"
import "../../assets/css/productpage/products.css"
import ReactPaginate from 'react-paginate'
import axios from "axios"
import {Link} from "react-router-dom"

const Products = () => {
  
     const [products,setProducts] = useState([])
     const [offset, setOffset] = useState(0);
      const [limit] = useState(10)
     const [loading,setLoading] = useState(false)
     const [pageCount, setPageCount] = useState(0)
    
     
    //  with this part we can paginate with the help of react only

      //  const [perPage] = useState(10);
    //  useEffect(() => {

    //        setLoading(true)
    //        window.scrollTo(0, 0)
    //     axios.get("http://localhost:3001/products")
    //     .then((res) => {
    //         const data = res.data;
    //         const slice = data.slice(offset, offset + perPage)
    //         setProducts(slice)
    //         setLoading(false)
    //         setPageCount(Math.ceil(data.length / perPage))

    //     })
    //     .catch(err => console.log(err))
    // },[offset,perPage])


    useEffect(() => {
        axios.get('http://localhost:3001/products')
        .then((res) =>{
            const data = res.data
            setPageCount(Math.ceil(data.length / limit))
        })
    })

    useEffect(() => {
        setLoading(true)
        window.scrollTo(0, 0)
        axios.get(`http://localhost:3001/productsfilter?page=${offset}?limit=${limit}`)
        .then((res) => {
            setProducts(res.data)
            setLoading(false)
        }).catch((e) => console.log(e))
    },[offset,limit])

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage)
    };
    

  
    return(
        <div className="container">
            {loading && <h1>Loading</h1>}
            <div className="container__product__page">
            <div className="container__products">
                 <div className="container__products__page">
{

products && products.map((pro) => { 
    
    return(
        <React.Fragment key={pro.id}>
        <Link to={`/product/${pro.slug}`} >
      <div className="container__products__card" >  
     <img alt="" className="container__products__card__image" src={pro.productimage}/>
    <h6 className="container__products__card__productname">{pro.title}</h6>
    <p className="container__products__card__brand">{pro.vendor}</p>
    <p className="container__products__card__price">₹{pro.price}</p>
  </div>
  </Link>
  </React.Fragment>
    )})
   
}
                 </div>
            </div>
            <div>
            <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
        </div>
        </div>
        </div>
    )
}


export default Products


