import "./project.css";
import Work from "./works";

import { products } from "../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Works</h1>
        <p className="pl-desc">
          What I Build So Far
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Work key={item.id} img={item.img} gitf={item.gitf} gitb={item.gitb} gits={item.gits} disc={item.disc} link={item.link} />
        ))}
          
      </div>
      
    </div>
  );
};

export default ProductList;