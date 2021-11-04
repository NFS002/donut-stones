import { useWeb3React } from "@web3-react/core";
import React from "react";

import { Account } from "./Account";
import { Balance } from "./Balance";
import { ChainId } from "./ChainId";



export default function CardText() {

  return (
    <div className='ds-card-text'>
                <p>
                  Donut Stones is an ERC20 cryptographic token created as solution to the 
                  problem of the limits of economic growth, and the traditional
                  economic mechanisms of distrubuting value within a population.
                  Partially inspired by the growing popular research
                  on <a className="text-italic" href="https://doughnuteconomics.org/about-doughnut-economics">
                  doughnut economics by Kate Raworth</a> that illlustrates many of the flaws in traditional growth-based economies. 
                  As these economies grow and scales, maginalised portions of the population become larger and increasingly neglected 
                  whilst environmental resoured become abused and increasingly degraded. 
                  Donut Stones (ⅅ) is a solution to this problem, and is designed to be a <span className='text-italic'>secondary currency</span>, 
                  to circulate alongside traditional fiat currencies such as GBP or USD.
                  According to the Economic Policy Institute, as of 2019, the average wage of the top 1% was $758,434. 
                  However, the 1% is not necessarily a reference to top 1% of wage earners, but a reference to the top 1% of individuals by net worth, 
                  of which earned wages are only a fraction of the many factors that contribute to their wealth. 
                  Underlying this is the simple fact that money makes money, and so as more bank notes are printed, for example 
                  during the COVID-19 pandemic, this inequality actually worsens.
                  So if we imagine the distribution of wealth within an economy as a doughut shape whereby
                  the largest proportion of the population is concentrated at the center along with the 
                  most severe inequalities and basic human necessities, whilst excess
                  wealth and environmental degrdation marks 
                  the perimeter, then <span className="text-bold text-italic">Donut Stones follows the inverse model</span> concentrated 
                  at the center of the doughut, and becoming increasingly scarce and more tightly regulated towards the perimeter. 
                  Of course, to achieve this, the distribution, exchange and spending of Donut Stones must be very tightly regulated
                  and a variable exchange where the price depends on the person exchanging.
                  A cryptocurrency therefore may seem like a very odd choice of iplementation for any currency that requires such strict regulation. 
                  However, I actually believer that ERC20 tokens and smart contracts provide some very interesting and useful properties that could 
                  fit this use case very well. Donut Stones is still its very early stages, and so as of yet, no variable exchange rate or any of the other
                  required infrastructure has been implemented, and so you can buy donutstones below for a negligble rate. To show your support for the 
                  project, leave a comment below or email me at <a href="mailto:info@donutstones.org" className="text-italic">info@donutstones.org</a>, and I will aim to keep this page updated.
                  <br></br>
                </p>
              </div>
  )
}