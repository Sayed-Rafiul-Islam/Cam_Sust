import './module.productSlugPage.css'
import { getProduct } from '@/sanity/sanity-utils'
import Product from '@/components/Product'

export default async function ProductSlugPage({params}) {
    const product = await getProduct(params.slug)
    
    
  return (
    <div className='product-body h-screen w-screen'>
      <div className='product-bg w-screen h-full'></div>
      <Product
      key={product._id}
      product = {product}
      />

    </div>
  )
}
