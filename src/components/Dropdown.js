import React, { useState } from 'react'

export default function Dropdown(props) {
  const { title, list } = props
  const [titleText, setTitleText] = useState(title)
  const [visible, setVisible] = useState(false)

  const clickHandler = () => {
    setVisible(!visible)
  }

  const titleHandler = (item) => {
    setTitleText(item)
  }

  return (
    <div style={styles.dropdown} onClick={() => clickHandler()}>
      <div style={styles.dropdownHeader}>
        <div style={styles.dropdownTitle}>{titleText}</div>
        <img
          src={visible ? "images/icon/regular-up.png" : "images/icon/regular-down.png"}
          alt="icon"
          style={styles.icon}
        ></img>
      </div>
      <ul
        style={styles.dropdownList}
        className={visible ? "" : "d-none"}
      >
        <li style={styles.listItem} onClick={() => titleHandler("Default")}>Default</li>
        {list.map(item => <li style={styles.listItem} onClick={() => titleHandler(item)}>{item}</li>)}
      </ul>
    </div >
  );
}

var styles = {
  dropdown: {
    width: "100%",
    height: "auto",
    position: "relative",
    margin: "10px 0",
  },

  dropdownHeader: {
    padding: "10px 15px",
    border: "1px solid #bbb",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },

  icon: {
    width: "15px",
    height: "15px"
  },

  dropdownList: {
    width: "100%",
    height: "auto",
    position: "absolute",
    border: "1px solid #bbb",
    borderRadius: "5px",
    zIndex: 2
  },

  listItem: {
    padding: "5px 15px",
    backgroundColor: "white"
  }
}
