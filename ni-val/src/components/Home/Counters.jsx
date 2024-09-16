import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { formatNumber } from '../utils'; // Adjust the path as needed

const Counters = () => {
  const counters = useRef([]);
  const hasAnimated = useRef([]); // Tracks whether the counter has already been animated

  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };
  useEffect(() => {
    const handleScroll = debounce(() => {
      counters.current.forEach((counter, index) => {
        if (counter && !hasAnimated.current[index] && isInViewport(counter)) {
          animateCounter(counter, index);
        }
      });
    }, 100); // Debounce scroll events for better performance

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) && // Partial visibility
        rect.bottom > 0
      );
    };

    const animateCounter = (counter, index) => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const speed = 200; // Adjust speed of the counter increment
      const increment = target / speed;

      const updateCounter = () => {
        count += increment;
        if (count < target) {
          counter.querySelector('.counter-number').textContent = formatNumber(Math.ceil(count));
          requestAnimationFrame(updateCounter);
        } else {
          counter.querySelector('.counter-number').textContent = formatNumber(target);
        }
      };

      updateCounter();
      hasAnimated.current[index] = true; // Mark as animated
    };



    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case the counters are already in the viewport

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="counters">
      <div className="container">
        <div className="row text-center">
          <div
            className="col-md-6 col-lg-3 pb-5 pb-md-0"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="counter" data-target="300" ref={el => counters.current[0] = el}>
              <div className="counter-number">0</div>
              <div className="counter-title">Projects Completed</div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3 pb-5 pb-md-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="counter" data-target="10000" ref={el => counters.current[1] = el}>
              <div className="counter-number">0</div>
              <div className="counter-title">Leads Generated</div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3 pb-5 pb-md-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="counter" data-target="15" ref={el => counters.current[2] = el}>
              <div className="counter-number">0</div>
              <div className="counter-title">Years of Expertise</div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3 pb-5 pb-md-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <div className="counter" data-target="95" ref={el => counters.current[3] = el}>
              <div className="counter-number">0</div>
              <div className="counter-title">Client Satisfaction (%)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counters;
