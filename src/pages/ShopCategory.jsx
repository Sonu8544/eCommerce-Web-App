import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <>
      <section className="page-width shop-category">
        <img className='shopCatogryBanner' src={props.banner} alt="" />
        <div className="shopCategory-indexSort">
          <p> <span>Showing 1-12</span> out of 36 product</p>
          <div className="shopcategory-sort">
            Sort By: V
          </div>
        </div>
        <div className="shopcategory-products">
          {all_product.map((item, index) => {
            if (props.category === item.category) {
              return (
                <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              )

            } else {
              return null
            }
          })}
        </div>
        <div className="shopCatogiry-loadMore">
          Explore More
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ShopCategory;
