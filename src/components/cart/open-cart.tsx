import {ShoppingCartIcon} from "@heroicons/react/24/outline";

export default function OpenCart({ count }: { count: number }) {
    return (
        <>
        <div
            className="relative left-14 mb-2 sm:left-0 flex h-11 w-11 items-center justify-center rounded-md border text-black transition-colors dark:border-white-700 dark:text-white cursor-pointer">
            <ShoppingCartIcon className="w-5 h-5 transition-all ease-in-out hover:scale-110"/>
        </div>
            <p className="text-white text-sm">{count} items</p>
        </>
    )
}