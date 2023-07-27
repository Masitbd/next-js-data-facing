import ProductDetails from '@/components/UI/ProductDetails';
import React from 'react';

const ProductDetailPage = async({params}) => {
    console.log('Hello',params.id)
   const res = await fetch(`https://next-js-data-facing-mjp2-807c9bv9r-masitbd.vercel.app/watches/${params.id}`, {
    cache: 'no-store'
   })
   const data = await res.json()
    
    return (
        <div>
            <ProductDetails product={data} />
        </div>
    );
};

export default ProductDetailPage;