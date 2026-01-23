import { useEffect, useState } from "react"

type Product = {
    supplier: string;
    productName: string;
}
export const ListProducts = () => {
    const [ products, setProducts] = useState<Product[]>([]);
    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
        fetch('http://localhost:8080/products')
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .then(() => setLoading(false))
    }, [])

    return (
        loading ? <div>Loading...</div> :
        <div>
            { products.map((product) => (
                <div>
                    <div> {`Supplier: ${product.supplier}`} </div>
                    <br/>
                    <div> {`Product Name: ${product.productName}`} </div>
                </div>
            ))}
        </div>
    )
}