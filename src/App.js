import React from 'react';

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Tangled Up In Green</h1>
        <p>Tangled Up In Green, a vision of Total Environment, is a luxury plotted development nestled amidst the lush landscapes of Devanahalli. This peaceful hideaway in North Bangalore sits on 115 acres and has exclusive residential plots with a modern design and green living blend. The plots range from 1800 sq. ft. to 7200 sq. ft. You could be fascinated by the botanical wonders found at the Tree Museum or...</p>
      </div>
      <div className="details">
        <div className="detail">
          <h3>₹ 1.4 Cr</h3>
          <p>(₹ 6,990 / Sq Ft)</p>
        </div>
        <div className="detail">
          <h3>Plot Size</h3>
          <p>1,800 to 7,200 Sq Ft</p>
        </div>
        <div className="detail">
          <h3>Area</h3>
          <p>115 Acres</p>
        </div>
      </div>
      <div className="details">
        <div className="detail">
          <h3>Total Units</h3>
          <p>968</p>
        </div>
        <div className="detail">
          <h3>Project Type</h3>
          <p>Plotted Development</p>
        </div>
        <div className="detail">
          <h3>Status</h3>
          <p>Newly Launched</p>
        </div>
      </div>
      <div className="amenities">
        <h2>30+ Amenities</h2>
        <div className="amenity">
          <img src="amenity-icon.png" alt="Amenity Icon" />
          <p>Children's Liberary</p>
        </div>
        <div className="amenity">
          <img src="amenity-icon.png" alt="Amenity Icon" />
          <p>Basket ball, volley ball,</p>
        </div>
        <div className="amenity">
          <img src="amenity-icon.png" alt="Amenity Icon" />
          <p>Tree Museum</p>
        </div>
        <div className="amenity">
          <img src="amenity-icon.png" alt="Amenity Icon" />
          <p>Jogging track</p>
        </div>
        <div className="amenity">
          <img src="amenity-icon.png" alt="Amenity Icon" />
          <p>Ampitheare</p>
        </div>
        <div className="amenity">
          <img src="amenity-icon.png" alt="Amenity Icon" />
          <p>Heated pool</p>
        </div>
        <div className="amenity">
          <img src="amenity-icon.png" alt="Amenity Icon" />
          <p>Cycling track</p>
        </div>
        <div className="amenity">
          <img src="amenity-icon.png" alt="Amenity Icon" />
          <p>Pet park,</p>
        </div>
      </div>
      <div className="buttons">
        <button className="chat-now">Chat Now</button>
        <button className="call-now">Call Now</button>
        <button className="schedule-site-visit">Schedule Site Visit</button>
      </div>
      <div className="images">
        <img src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
        <img src="image3.jpg" alt="Image 3" />
        <img src="image4.jpg" alt="Image 4" />
      </div>
      <div className="map">
        <img src="map.jpg" alt="Map" />
      </div>
      <p className="footer">RERA ID: PRM/KA/RERA/1250/303/PR/080124/006538</p>
    </div>
  );
};

export default App;