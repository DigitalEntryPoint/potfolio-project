import React from 'react'
import FLOGO from '../assets/logo-footer.png'

function Footer() {
  return (
    <footer>
 
    <div>
      <img src={FLOGO} alt="Lucky Shrub logo" loading="lazy"/>
      </div>
    <div>
        <p>all rights reserved ©</p>
    </div>

</footer>
  )
}

export default Footer