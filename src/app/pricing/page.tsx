import React from 'react'
import type { Metadata } from "next";

type Props = {}

function Pricing({}: Props) {

    const metadata: Metadata = {
        title: "Pricing - SentrIQ",
        description: "Pricing for SentrIQ, the intelligent cyber security assistant powered by AI."
    }

  return (
    <section className="container mx-auto min-h-[80vh]  flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-foreground mt-10">Under Construction...</h1>
         </div>
    </section>
  )
}

export default Pricing