import React from 'react'

type Props = {}

function CallToAction({}: Props) {
  return (
 <section className="py-20">
 <div className="container mx-auto px-6 max-w-4xl text-center">
   <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Digital Life?</h2>
   <p className="text-gray-600 dark:text-gray-300 mb-8">
     Join thousands of users who trust SentrIQ for their cybersecurity needs
   </p>
   <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all">
     Get Started Now
   </button>
 </div>
</section>
  )
}

export default CallToAction