import React from "react";
import SCard from "./SCard";
import data from "../Sdata.json";
import { useNavigate } from 'react-router-dom';

import CustomCard from './CustomCard';
import cardsData from './cardData.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

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

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Swiper
            spaceBetween={1}
            slidesPerView={1}
            pagination={{ clickable: true }}
            style={{ width: '400px', height: 'auto', marginTop: '15px' }}
          >
            {cardsData.map((card, index) => (
              <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CustomCard title={card.title} content={card.content} imageurl={card.imageUrl}/>
              </SwiperSlide>
            ))}
          </Swiper>
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
