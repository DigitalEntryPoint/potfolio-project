import React from 'react'

function NewsLetter() {
  return (
    <div className='newsletter-container'>
        <h2>NEWS LETTER</h2>
        <p>subscribe to our news letter!</p>
        <div className='input-cotainer'>
            <input type="email" name="letteremail" id="letteremail" placeholder='Your Email Address...' />
            <input type="button" value="Subscribe" />
        </div>
    </div>
  )
}


export default NewsLetter