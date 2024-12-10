// ABA DE CARRINHO DE COMPRAS

import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import CartItem from "./cartItem";
import { toggleStatusTab } from "../stores/cart";

const CartTab = () => {
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();
    const handleCloseTabCart = () => {
        dispatch(toggleStatusTab());
    }
    return (
        <div className={`fixed top-0 right-0 bg-[#48435c] shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px]
        transform transition-transform duration-500
        ${statusTab === false ? "translate-x-full" : ""}
    `}>
            <h2 className="p-5 text-white text-2xl">Carrinho de Compras</h2>
            <div className="p-5">
                {carts.map((item, key) =>
                <CartItem key={key} data={item}/>
                )}
            </div>
            <div className="grid grid-cols-2">
                <button className="bg-[#5a5766] text-white" onClick={handleCloseTabCart}>FECHAR</button>
                <button className="bg-[#52489C] text-white">COMPRAR</button>

            </div>

        </div>
    )
}

export default CartTab