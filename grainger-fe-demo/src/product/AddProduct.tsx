import { useState } from "react";

export const AddProduct = () => {
    const [ supplier, setSupplier ] = useState<string>('')
    const [ productName, setProductName ] = useState<string>('')
    
    const onSupplierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setSupplier(val);
    }
    const onProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setProductName(val);
    }

    const onClick = () => {
        fetch('http://localhost:8080/product', { 
           headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({supplier, productName}) 
        })
    }
    return (
        <div>
            <label>Supplier</label>
            <input onChange={onSupplierChange} value={supplier}/>
            <br/>
            <label>Product Name</label>
            <input onChange={onProductNameChange} value={productName}/>
            <br/>
            <button onClick={onClick}>Submit</button>
        </div>
    )
}