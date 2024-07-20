import { Fragment, useMemo, useState } from "react";
import "./Product.css"
import { useFetch } from "../hooks/useFetch";
import { Select, Space } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, } from 'antd';
const { confirm } = Modal; 
const Product = ({modal}) => {

     const [sort, setSorted] = useState("selected")
     const [data] = useFetch();

     const sortedProduct = useMemo(() => sortProduct(data, sort), [sort])  
     return (

     
    <div className="container">

  
          <nav className="nav">
          <button className="btn" onClick={() => modal.current.toggleModal()}>Delete</button>
          <Space wrap>
    <Select
      defaultValue="select"
      style={{
        width: 120,
      }}
      onChange={(e) => setSorted(e)}
      options={[
          {
               value: 'select',
               label: 'select',
               disabled: true
          },
        {
          value: 'cheap',
          label: 'cheap',
        },
        {
          value: 'expensive',
          label: 'expensive',
        }
      ]}
    />
           </Space>
          </nav>
      <div className="grid">
          
        {data.map((product) => {
          return (
            <Fragment key={product.id}>
              <div className="item">
          
               <div className="images">
                <img className="img" src={product.image} alt={product.title} />
               </div>
               <div className="flex items-center flex-col">
                    <h2 className="text">{product.title}</h2>
                    <p className="text-p">Category: {product.category}</p>
                    <strong className="text-strong">${product.price}</strong>
                   </div>     
              </div>
            </Fragment>
          );
        })}
      </div>
      
    </div>
  );

};
const sortProduct = (product, sort) => {
     if(sort === "cheap") {
          return product.sort((a, b) => a.price - b.price)
     }
     else if(sort === "select") {
          return product
     }
     else {
          return product.sort((a, b) => b.price - a.price)

     }

} 

export default Product;
