import React from 'react'
import CarCard from '../components/carCard'
import DropDown from '../components/dropdown'

export default function Home() {
  // const [data, setData] = useState({
  // need data, not yet
  // });

  return (
    <div id="home" className="row">
      {/* start slide */}
      <div className="slide" style={styles.slide}>
        <div className="col-3" style={styles.chooseCarContainer}>
          <div style={styles.chooseCar}>
            <h2>CHOOSE YOUR RIGHT CAR</h2>
            <DropDown />
            <DropDown />
            <DropDown />
          </div>
        </div>
      </div>
      {/* end slide */}

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
    backgroundSize: "cover"
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
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: "15px",
  },
}
