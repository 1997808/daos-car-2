import React from 'react'

export default function Home() {
  return (
    <div id="home" className="container-fluid">
      <div className="nav-bar">
        <h2>Daos-Car</h2>
      </div>
      <div className="slide" style={styles.slideStyle}>
        <img src={"images/karakoram-highway-guide-2-weeks-itinerary-main-image-op.jpg"} alt="highway" style={styles.slideImgStyle}></img>
      </div>

      {/* start row car */}
      <div className="popular-car row">
        <div className="carCard col-4">
          <img src={"images/Mazda3-20-1024x683.jpg"} alt="car" style={styles.carCardStyle}></img>
          <div className="carDescription">
            <h3 className="carName">Mazda 3</h3>
            <p className="carPrice">26979.89</p>
          </div>
        </div>
        <div className="carCard col-4">
          <img src={"images/Mazda3-20-1024x683.jpg"} alt="car" style={styles.carCardStyle}></img>
          <div className="carDescription">
            <h3 className="carName">Mazda 3</h3>
            <p className="carPrice">26979.89</p>
          </div>
        </div>
        <div className="carCard col-4">
          <img src={"images/Mazda3-20-1024x683.jpg"} alt="car" style={styles.carCardStyle}></img>
          <div className="carDescription">
            <h3 className="carName">Mazda 3</h3>
            <p className="carPrice">26979.89</p>
          </div>
        </div>
      </div>
      {/* end row car */}
    </div >
  );
}

var styles = {
  slideStyle: {
    width: "100%",
    height: "400px"
  },

  slideImgStyle: {
    width: "100%",
    height: "auto"
  },

  carCardStyle: {
    width: "100%",
    height: "auto"
  }
}
