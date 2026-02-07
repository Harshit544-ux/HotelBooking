import React from 'react'

function Title({ title, subTitle, align = "center", font }) {
  
  const alignmentClasses = {
    left: "md:items-start md:text-left",
    center: "items-center text-center",
    right: "md:items-end md:text-right"
  }

  return (
    <div className={`flex flex-col justify-center ${alignmentClasses[align]}`}>
      <h1 className={`text-4xl md:text-[40px] ${font || "font-open-sans"}`}>
        {title}
      </h1>
      <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
        {subTitle}
      </p>
    </div>
  )
}

export default Title