import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { formatNumber } from '../utils'; // Adjust the path as needed

const Counters = () => {
  const counters = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      counters.current.forEach(counter => {
        if (counter && isInViewport(counter)) {
          animateCounter(counter);
        }
      });
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const animateCounter = (counter) => {
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
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="counters">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="counter" data-target="300" ref={el => counters.current[0] = el}>
              <div className="counter-number">0</div>
              <div className="counter-title">Projects Completed</div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="counter" data-target="10000" ref={el => counters.current[1] = el}>
              <div className="counter-number">0</div>
              <div className="counter-title">Leads Generated</div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="counter" data-target="15" ref={el => counters.current[2] = el}>
              <div className="counter-number">0</div>
              <div className="counter-title">Years of Expertise</div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pb-5">
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
