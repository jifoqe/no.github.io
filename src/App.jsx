import { useState } from 'react';
import './App.css';
import Head from './component/head';
import Mean from './component/mean';
import Foot from './component/foot';

function App() {
  const [money, setMoney] = useState(0);
  const [orders, setOrders] = useState([]);
  const [lar, setLar] = useState(false);

  const change = (amount) => {
    setMoney((prevMoney) => prevMoney + amount);
  };

  const handleOrder = (item, value) => {
    setOrders((prevOrders) => [...prevOrders, { item, value }]);
    setLar(true);
  };

  return (
    <>
      <Head money={money} orders={orders} lar={lar} />
      <Mean change={change} handleOrder={handleOrder} />
      <Foot lar={lar} />
    </>
  );
}

export default App;
