import React from 'react'
import CarCard from '../components/CarCard'
import DropDown from '../components/Dropdown'

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
            <h3>CHOOSE YOUR RIGHT CAR</h3>
            <DropDown
              title="Select location"
              list={["Option 1", "Option 2",]}
            />
            <DropDown
              title="Select location"
              list={["Option 4", "Option 5",]}
            />
            <DropDown
              title="Select location"
              list={["Option 7", "Option 8",]}
            />
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
    padding: "30px",
  },
}
