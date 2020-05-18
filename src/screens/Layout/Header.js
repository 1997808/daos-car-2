import React from 'react';

export default function Header() {
  return (
    <div className="row" style={styles.header}>
      <div className="col-2" style={styles.logo}>
        <h1 style={styles.logoBrand}>DAOSCAR</h1>
        <img src={"images/97a06670427da80e0349b7c478e9fcd1-racing-car-outline-by-vexels.png"} alt="icon" style={styles.logoImage}></img>
      </div>
      <div className="col-7" style={styles.menu}>
        <li>HOME</li>
        <li>FIND</li>
        <li>HOT</li>
        <li>COMPARE</li>
        <li>BLOG</li>
        <li>GALLERY</li>
        <li>VIDEO</li>
        <li>NEWS</li>
      </div>
      <div className="nav-search col-3" style={styles.search}>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  header: {
    width: "100%",
    height: "60px",
    alignItems: "center"
  },

  logo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  logoBrand: {
    fontSize: 32,
    fontWeight: 700
  },

  logoImage: {
    width: "60px",
    marginLeft: "15px"
  },

  menu: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  search: {
    display: "flex",
    justifyContent: "flex-end",
  }
}