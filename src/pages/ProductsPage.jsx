import { useEffect, useState } from 'react'
import Product from '../components/Product'
import { useNavigate } from 'react-router-dom'

const ProductsPage = () => {
    const [listOfProducts, setListOfProducts] = useState([])
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setListOfProducts(json)
            })
    }, [])

    const navigateToProductDetails = (id)  => {
        navigate(`/products/${id}`)
    }

    return (
        <div>
            {
                listOfProducts?.map((product) => (
                    <div key={product.id} onClick={() => { navigateToProductDetails(product.id) }}>
                        <Product product={product} />
                    </div>
                ))
            }
        </div>
    )
}

export default ProductsPage