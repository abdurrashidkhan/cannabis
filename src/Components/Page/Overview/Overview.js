import React from 'react';
import { MdMyLocation } from 'react-icons/md';
import FlitterInfo from './FlitterInfo';
import ProductsInfo from './ProductsInfo';

const Overview = () => {
  return (
    <div>
      <div className="">
        {/* 2-coll */}
        <div className="block md:flex gap-4 pt-8 ">
          <FlitterInfo />
          <ProductsInfo />
        </div>
      </div>
    </div>
  );
};

export default Overview;