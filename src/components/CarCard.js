import React from 'react'

export default function CarCard() {
  return (
    <div className="col-3" style={styles.carCard}>
      <img src={"images/Mazda3-20-1024x683.jpg"} alt="car" style={styles.carCardImg}></img>
      <div className="carDescription">
        <h3 style={styles.carName}>Mazda 3 1.5L Luxury 2020</h3>
        <p style={styles.carPrice}>669.000.000 VNĐ</p>
      </div>
    </div>
  );
}

var styles = {
  carCard: {
    width: "100%",
    height: "auto",
    textAlign: "center",
    overflow: "hidden"
  },

  carCardImg: {
    width: "100%",
    padding: "15px 0"
  },

  carName: {
    fontSize: 16,
  },

  carPrice: {
    fontSize: 20
  }
}
