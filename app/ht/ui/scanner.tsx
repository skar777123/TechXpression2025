import Image from 'next/image'
import React from 'react'

export default function Scanner() {
  return (
    <div>
        <Image 
            src="/Scanner.jpg"
            alt='Scanner'
            width={200}
            height={200}
            className='rounded-xl'
        />
    </div>
  )
}
