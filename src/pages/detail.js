import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

const Detail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.filter(product => product.slug === slug);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    }
  }, [slug]);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: detail.id,
      quantity: quantity
    }));
  };

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div>
          <img src={detail.image} alt="" className="w-full rounded-lg" />
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-2xl md:text-4xl uppercase font-bold">{detail.name}</h1>
          <p className="font-bold text-xl md:text-3xl">
            R${detail.price}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <div className="flex gap-2 justify-center items-center">
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={handleMinusQuantity}
              >
                -
              </button>
              <span className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">
                {quantity}
              </span>
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={handlePlusQuantity}
              >
                +
              </button>
            </div>
            <button
              className="bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl w-full sm:w-auto"
              onClick={handleAddToCart}
            >
              Adicionar ao carrinho
            </button>
          </div>

          <h4 className="text-lg md:text-xl font-bold">Faixas:</h4>
          {Array.isArray(detail.description) ? (
            <ol className="list-decimal pl-5">
              {detail.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          ) : (
            <p>{detail.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
