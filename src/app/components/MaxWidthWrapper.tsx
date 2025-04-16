//This component is used to adjust and ensure consistent width across the application

import React from 'react'

interface MaxWidthWrapperProps{
    children: React.ReactNode;
    className?: string;
}

const MaxWidthWrapper = ({children, className} : MaxWidthWrapperProps) => {
  return (
    <div className={`max-w-7xl mx-auto md:px-6 ${className}`}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper;