import React from 'react'

function Productpage({params}:{params: {slug: string}}) {
  return (
    <div>
      {params.slug}
    </div>
  )
}

export default Productpage
