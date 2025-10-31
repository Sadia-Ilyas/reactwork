
import "./testingstyle.css";


const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 59.99,
    inStock: true,
    image: "https://picsum.photos/200?random=1",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 129.99,
    inStock: false,
    image: "https://picsum.photos/200?random=2",
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Fashion",
    price: 89.99,
    inStock: true,
    image: "https://picsum.photos/200?random=3",
  },
  {
    id: 4,
    name: "Office Chair",
    category: "Furniture",
    price: 149.99,
    inStock: true,
    image: "https://picsum.photos/200?random=4",
  },
  {
    id: 5,
    name: "Coffee Maker",
    category: "Home Appliance",
    price: 39.99,
    inStock: false,
    image: "https://picsum.photos/200?random=5",
  },
  {
    id: 6,
    name: "Gaming Keyboard",
    category: "Electronics",
    price: 79.99,
    inStock: true,
    image: "https://picsum.photos/200?random=6",
  },
];

 

const ProductObject = () => {
  return (
    <div className="card">
      <h1>Products List</h1>
      <div>
        {products.map((item, index) => (
          <div className="prop" key={index}>
            <h3> {item.name}</h3>
            <h3> {item.category}</h3>

            <img src={item.image} alt={item.name} />
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default  ProductObject;

