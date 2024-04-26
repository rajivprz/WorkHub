import React from 'react'
import "./gig.css"
import Slider from 'infinite-react-carousel';
const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">
            WorkHub // Graphics and design //
          </span>
          <h1>I will create ai generated rt for you.</h1>
          <div className="user">
            <img src="" alt="" />
            <span>Rajiv Parajuli</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowScroll={1}>
            <img src="/img/design1.png" alt="" />
            <img src="/img/design2.png" alt="" />
            <img src="/img/design3.png" alt="" />
          </Slider>
          <h2>About this gig</h2>
          <p>I use an AI program to create images based on text prompts. This means I can help you to create a vision you have through a textual description of your scene without requiring any reference images.
             Some things I've foung it often excels at are: Character portraits (E.g. a picture to go with your DnD character) Landscapes (E.g. wallpapers, illustrations to compliment a story) Logos (E.g. Esports team, business, profile picture)
             You can be as vague or as descriptive as you want. Being more vague will allow the AI to be more creative which can sometimes result in some amazing images. You can also be incredibly precise if you have a clear image of what you want in mind. 
             All of the images I create are original and will be found nowhere else. If you have any questions you're more than welcome to send me a message.
             </p>
             <div className="seller">
              
             </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Gig
