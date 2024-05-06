import React from 'react';
import alumniData from './Alumnidata';
import './Discover.scss'

const Discover = () => {
  return (
    <div className="container">
      <h1 className="text-center mb-5">Discover Alumni</h1>
      <div className="row">
        {alumniData.map((alumnus) => (
          <div key={alumnus.id} className="col-md-4">
            <div className="card">
              <img src={alumnus.image} className="card-img-top" alt={alumnus.name} />
              <div className="card-body">
                <h5 className="card-title">{alumnus.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{alumnus.title}</h6>
                <p className="card-text">{alumnus.company}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <a href="#" className="card-link"> <button className='message-button'>Follow</button></a>
                
                  <a href="#" className="card-link"><div class="comment-react">
  <button>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
        stroke="#707277"
        stroke-width="2"
        stroke-linecap="round"
        fill="#707277"
      ></path>
    </svg>
  </button>

  <span>14</span>
</div></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;