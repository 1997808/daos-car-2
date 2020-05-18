import React from 'react'
import CarCard from '../components/carCard'

export default function Home() {
  return (
    <div id="home" className="row">
      <div className="slide" style={styles.slide}>
        <div className="offset-1 col-3" style={styles.chooseCarContainer}>
          <div style={styles.chooseCar}>
            <h2>CHOOSE YOUR RIGHT CAR</h2>
            <div>
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button">
                  Dropdown button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* start row car */}
      <div className="container-fluid">
        <h2>Popular car of the month</h2>
        <div className="popular-car row">
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>
      {/* end row car */}

    </div >
  );
}

const styles = {
  slide: {
    width: "100%",
    height: "600px",
    backgroundImage: `url(${"images/karakoram-highway-guide-2-weeks-itinerary-main-image-op.jpg"})`,
    overflow: "hidden"
  },

  chooseCarContainer: {
    width: "auto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  chooseCar: {
    width: "100%",
    height: "80%",
    backgroundColor: "white",
  },
}
