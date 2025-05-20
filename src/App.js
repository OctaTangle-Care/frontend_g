import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>GNANOW Store</h1>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid black",
              padding: 10,
              width: 200,
              backgroundColor: "yellow",
              borderRadius: 10,
            }}
          >
            <img src={product.image} alt={product.name} width="100%" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong>${product.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
