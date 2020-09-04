import React from 'react'
function Product(props){
return(
	<div>
	<h2>{props.product.name}</h2>
	<h3>{props.product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h3>
	</div>
)
}
export default Product