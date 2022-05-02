import React from 'react'
import PropTypes from 'prop-types'
import './Contact.css';
function Contact(props) {
  var cards = document.getElementById('#card-slider .slider-item').toArray();

  startAnim(cards);

  function startAnim(array) {
    if (array.length >= 4) {
      TweenMax.fromTo(array[0], 0.5, { x: 0, y: 0, opacity: 0.75 }, { x: 0, y: -120, opacity: 0, zIndex: 0, delay: 0.03, ease: Cubic.easeInOut, onComplete: sortArray(array) });

      TweenMax.fromTo(array[1], 0.5, { x: 79, y: 125, opacity: 1, zIndex: 1 }, { x: 0, y: 0, opacity: 0.75, zIndex: 0, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: Cubic.easeInOut });

      TweenMax.to(array[2], 0.5, { bezier: [{ x: 0, y: 250 }, { x: 65, y: 200 }, { x: 79, y: 125 }], boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', zIndex: 1, opacity: 1, ease: Cubic.easeInOut });

      TweenMax.fromTo(array[3], 0.5, { x: 0, y: 400, opacity: 0, zIndex: 0 }, { x: 0, y: 250, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut },);
    } else {
      $('#card-slider').append('<p>Sorry, carousel should contain more than 3 slides</p>')
    }
  }

  function sortArray(array) {
    clearTimeout(delay);
    var delay = setTimeout(function () {
      var firstElem = array.shift();
      array.push(firstElem);
      return startAnim(array);
    }, 3000)
  }

  return (
    <div className="slider-wrap">
      <div id="card-slider" className="slider">
        <div className="slider-item">
          <div className="animation-card_image">
            <img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt="" />
          </div>
          <div className="animation-card_content">
            <h4 className="animation-card_content_title title-2">Charlize Theron 1</h4>
            <p className="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
            <p className="animation-card_content_city">New York, NY</p>
          </div>
        </div>
        <div className="slider-item">
          <div className="animation-card_image">
            <img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt="" />
          </div>
          <div className="animation-card_content">
            <h4 className="animation-card_content_title title-2">Charlize Theron 2</h4>
            <p className="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
            <p className="animation-card_content_city">New York, NY</p>
          </div>
        </div>
        <div className="slider-item">
          <div className="animation-card_image">
            <img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt="" />
          </div>
          <div className="animation-card_content">
            <h4 className="animation-card_content_title title-2">Charlize Theron 3</h4>
            <p className="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
            <p className="animation-card_content_city">New York, NY</p>
          </div>
        </div>
        <div className="slider-item">
          <div className="animation-card_image">
            <img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt="" />
          </div>
          <div className="animation-card_content">
            <h4 className="animation-card_content_title title-2">Charlize Theron 4</h4>
            <p className="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
            <p className="animation-card_content_city">New York, NY</p>
          </div>
        </div>
        <div className="slider-item">
          <div className="animation-card_image">
            <img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt="" />
          </div>
          <div className="animation-card_content">
            <h4 className="animation-card_content_title title-2">Charlize Theron 5</h4>
            <p className="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
            <p className="animation-card_content_city">New York, NY</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact.propTypes = {}

export default Contact
