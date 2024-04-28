import { Button } from '@/components/ui/button'
import { CheckCheck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const stripeSuccess = () => {
    return (
        <div className='flex h-screen items-center justify-center top-0 lg:'>
        
            <section className="rounded-3xl shadow-2xl md:w-1/2 m-5 flex items-center ">
                <div className="p-8 text-center sm:p-12">
                    <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
                        Your order is on the way
                    </p>

                    <h2 className="mt-6 text-3xl font-bold">Thanks for your purchase, we're getting it ready!</h2>

                    <a
                        className="mt-8 inline-block w-full rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl"
                        href="/"
                    >
                        Return to Home
                    </a>
                </div>
            </section>
            </div>
        
    )
}

export default stripeSuccess