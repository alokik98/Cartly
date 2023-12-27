import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    let { id } = useParams();
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => { setProduct(json) })
            .catch(error => {console.log(error); setProduct({})})
    }, [id])
   
    return (
        <div className='product_container'>
            {
                Object.keys(product).length > 0 ? (
                    <>
                        <div className='product_image'>
                            <img src={product.image} />
                        </div>
                        <div className='product_details'>
                            <div className='product_title'>
                                <p>{product?.title}</p>
                            </div>
                            <div className='product_rating_and_price'>
                                <p>&#x20b9;{product?.price}</p> <span>&#9733;</span>
                                <span>{product?.rating?.rate}</span>
                            </div>
                            <div className="product_description">
                                <p>{product?.description}</p>
                            </div>
                        </div>
                        <div className="product_add_to_cart">
                            <button>Add To Cart</button>
                        </div>
                    </>
                ) : (
                    <p>No Data Found</p>
                )
            }
        </div>
    )
}

export default ProductDetails