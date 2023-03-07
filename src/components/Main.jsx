import React from 'react'
import GARDEN from "../assets/images/garden-design.jpg"
import LANDSCAPE from "../assets/images/landscape-design.jpg" 
import INDOOR from "../assets/images/indoor-plants.jpg"


function Main() {
  return (
    <main>
    <section>
        <article className="promotion">
            <h1>Transform any space into an oasis you can be proud of</h1>
            <p>
                Based in Tuscon, Arizona, Lucky Shrub is a medium-sized garden design firm that specializes in garden design and creation, maintenance and landscaping. The company also runs a small plant nursery that sells indoor and outdoor plants, making them a one-stop
                shop for clients to "transform any space into an oasis you can be proud of".
            </p>
        </article>
    </section>

    <section className="services">
        <article>
            <img src={GARDEN} loading="lazy" />
            <h2>Garden Design</h2>
            <p>amet consectetur adipisicing elit. Dicta consequuntur, eos facere accusantium possimus laboriosam illo recusandae neque totam nostrum provident alias id accusamus nulla necessitatibus nobis omnis vitae quasi!</p>
            <a href="#">read more..</a>
        </article>

        <article>
            <img src={LANDSCAPE} alt="landscape-design" loading="lazy"/>
            <h2>Landscaping</h2>
            <p>amet consectetur adipisicing elit. Dicta consequuntur, eos facere accusantium possimus laboriosam illo recusandae neque totam nostrum provident alias id accusamus nulla necessitatibus nobis omnis vitae quasi!</p>
            <a href="#">read more..</a>
        </article>

        <article>
            <img src={INDOOR} alt="indoor-plants" loading="lazy" />
            <h2>Buy Plants</h2>
            <p>amet consectetur adipisicing elit. Dicta consequuntur, eos facere accusantium possimus laboriosam illo recusandae neque totam nostrum provident alias id accusamus nulla necessitatibus nobis omnis vitae quasi!</p>
            <a href="#">read more..</a>
        </article>
    </section>
</main>
    
  )
}

export default Main