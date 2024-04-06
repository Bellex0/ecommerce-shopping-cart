import React, {Suspense} from "react";
import OpenCart from "@/components/cart/open-cart";
import Cart from "@/components/cart";

export default function Navbar() {
    return (
        <nav className="relative flex items-center justify-between p-4 lg:px-6 bg-black-100">
            <div className="flex w-full h-24 items-center text-black text-xl">
                    <img className="h-12" src="/images/logo.png" />
                <div className="md:w-1/2">
                    <span className="text-pink-700 text-3xl">Apex Theory</span>
                </div>
                <div className="flex justify-end md:w-1/2">
                    <Suspense fallback={<OpenCart/>}>
                        <Cart/>
                    </Suspense>
                </div>
            </div>
        </nav>
    )
}