/* eslint-disable react/prop-types */


const Product = ({ product }) => {
    return (
        <div className='container'>
            <div className='product_image'>
                <img src={product.image} />
                <div className='product_rating'>
                    <span>&#9733;</span><span>{product?.rating?.rate}</span>
                </div>
            </div>
            <div className='product_title'>
                <p>{product.title}</p>
                <span>&#x20b9;{product.price}</span>
            </div>
        </div>
    )
}

export default Product