import {Product} from '@/types/type'
import Image from 'next/image';
import Link from 'next/link';


import AddToCart from "@/components/cart/add-to-cart";

type Props = {
    product: Product
}

export default function ProductCard({product}: Props) {
    return (
        <div className="group">
        <Link key={product.id} href={`/products/${product.id}`} >   
            <div
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 min-h-[368px] max-h-[368px]"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(product.price / 100)}</p>
            <h3 className="mt-1 mb-2 text-sm text-gray-700 hover:text-pink-700">View more details</h3>
         </Link>
            <AddToCart product={product}/>
        </div>
    )
}