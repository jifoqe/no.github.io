import React from "react";
import { CiSearch } from "react-icons/ci";
import { PiHandbag } from "react-icons/pi";

function Head({ money, orders, lar }) {
    const toggleFloatMenu = () => {
        const floatMenu = document.getElementById('floatmean');
        if (floatMenu.style.display === 'none' || floatMenu.style.display === '') {
            floatMenu.style.display = 'block';
        } else {
            floatMenu.style.display = 'none';
        }
    };  

    const large = () => {
        const but = document.getElementById('bag');
        but.style.fontSize = '300%';

        // 在500ms后恢复原始大小
        setTimeout(() => {
            but.style.fontSize = '250%';
        }, 500);
    };

    React.useEffect(() => {
        if (lar) {
            large();
        }
    }, [lar]);

    return (
        <div className="hd">
            <p className="hdp">丞翔蔬菜網</p>
            <input type="text" name="" id="" />
            <button><CiSearch /></button>
            <p>總金額 : {money}</p>
            <div>
                <button className="bag" onClick={toggleFloatMenu} id="bag"><PiHandbag /></button>
            </div>
            <div className="floatmean" id="floatmean">
                {orders.map((order, index) => (
                    <div className="floatmenu" key={index}>
                        <img src={order.item.img} alt={order.item.name} />
                        <p>{order.item.name}</p>
                        <p>數量: {order.value}</p>
                        <p>金額: {order.item.price * order.value}</p>
                    </div>
                ))}
                <button>確認下單</button>
            </div>
        </div>
    );
}

export default Head;
