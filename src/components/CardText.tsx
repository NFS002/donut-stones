import { useWeb3React } from "@web3-react/core";
import React from "react";

import CardHomeText from './CardHomeText'
import CardBuyerText from './CardBuyerText'


interface CardTextProps {
  menuState: string
}

export default function CardText( { menuState } : CardTextProps) {

  return (
    <div className='ds-card-text'>
      { menuState === "home" &&
        <CardHomeText />
      } 

      { menuState === "howToBuy" &&
        <CardBuyerText />
      }
    </div>
  )
}