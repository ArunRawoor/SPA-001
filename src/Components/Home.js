import React, { useState, useEffect }  from 'react';
const Home = () => {
const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);    useEffect(() => {
        fetch("http://localhost:3001")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, []);if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {users.map(user => (
                <li key={user.ecode}>
                 
                    {user.empid}&nbsp;&nbsp;
                    {user.name} &nbsp;&nbsp;&nbsp;
                    {user.designation} &nbsp;&nbsp;&nbsp;
                    {user.salary}&nbsp;&nbsp;&nbsp;
                </li>
                ))}
            </ul>
        );
    }
}
export default Home;



/* product list with image example 

<h2>Product List</h2>
<div className="product-list">
  <div className="product-item">
    <img src={imgp1} alt="Fresh Orange" />
    <h3>Fresh Orange</h3>
    <p>₹40.99/ -- 70.99/-</p>
    <button className="add-to-cart-btn" onClick={() => addToCart({ name: 'Fresh Orange', price: '₹40.99/ -- 70.99/-', image: imgp1 })}>
      Add to Cart
    </button>
  </div>
  <div className="product-item">
    <img src={imgp2} alt="Fresh Onion" />
    <h3>Fresh Onion</h3>
    <p>₹10.99/ -- 40.99/-</p>
    <button className="add-to-cart-btn" onClick={() => addToCart({ name: 'Fresh Onion', price: '₹10.99/ -- 40.99/-', image: imgp2 })}>
      Add to Cart
    </button>
  </div>
  /* Add more product items following the same structure */
  