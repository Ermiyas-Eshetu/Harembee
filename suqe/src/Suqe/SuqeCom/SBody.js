import React from "react";
import SCard from "./SCard";
import data from "../Sdata.json";
import { useNavigate } from 'react-router-dom';

function SBody() {
  const handleAction = (productName) => {
    console.log(`${productName} action triggered!`);
  };
  const navigate = useNavigate();


  const handleChange = () => {
    navigate('/Suqe/OpenSuqe');
  };
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: '150px' }}>
        <div className="btncon">
          <button onClick={handleChange} className="btn2">Open Shop / ሱቄን ልክፍት</button>
        </div>
        {data.products.map((product) => (
          <SCard
            key={product.id}
            title={product.name}
            description={product.description}
            amount={product.amount}
            price={product.price}
            Susername = {product.Susername}
            imageUrl={product.imageUrl}
            onAction={() => handleAction(product.name)}
          />
        ))}
      </div>
    </>
  );
}

export default SBody;
