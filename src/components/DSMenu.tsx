import React from "react";

interface DSMenuProps {
  menuState: string
  setMenuState: (menuState: string) => void
}

export default function DSMenu( {menuState, setMenuState} : DSMenuProps) {

  function getClassNames(buttonName: string) {
    if (buttonName === menuState) {
      return "active text-grey"
    }

    else return "text-grey"
  }


  return (
    <div className="ds-menu-buttons row">
              <div className="col-xs-6">
                <button className={getClassNames("home")} onClick={() => {
                  setMenuState("home")
                }}>
                  Home
                </button>
              </div>
              <div className="col-xs-6">
                <button className={getClassNames("howToBuy")} onClick={() => {
                  setMenuState("howToBuy")
                }}>
                  How to buy or claim
                </button>
              </div>
      </div>
  );
}
