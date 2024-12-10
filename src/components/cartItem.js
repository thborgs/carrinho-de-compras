import React, {useState, useEffect} from 'react';
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';

const CartItem = (props) => {
    const {productId, quantity} = props.data;
    const [detail, setDetail] = useState([]); 
    const dispatch = useDispatch();
    useEffect(() => {                     //pra fazer o cálculo
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail); 
    }, [productId]) 
    const handleMinusQuantity = () => { // RETIRA QUANTIDADE DO CARRINHO
      dispatch(changeQuantity({
        productId: productId, 
        quantity: quantity - 1
      }));
    }
    const handlePlusQuantity = () => {   // ADICIONAR MAIS QUANTIDADE AO CARRINHO 
      dispatch(changeQuantity({
        productId: productId, 
        quantity: quantity + 1
      }));
    }
  return (
    <div className='flex justify-between items-center bg-[#5a5766] text-white p-2 border-b-2 border-[#403e49] gap-5 rounded-md'>
        <img src={detail.image} alt="Foto Vinil" className='w-12' />
        <h3>{detail.name}</h3>
        <p>${detail.price * quantity}</p>
        <div className='w-20 flex justify-between gap-2'>
            <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinusQuantity}>-</button> {/* BOTÃO DE REMOVER QUANTIDADE DO CARRINHO */}
            <span>{quantity}</span>
            <button className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600 flex items-center justify-center text-sm leading-none" onClick={handlePlusQuantity}>+</button> {/* BOTÃO DE ADICIONAR MAIS QUANTIDADE AO CARRINHO */}
        </div>
    </div>
  )
}

export default CartItem