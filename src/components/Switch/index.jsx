import React from 'react'
import { StSwitch, StEmoji } from './style.css'
import sleep from '@/images/333.svg'
import scream from '@/images/334.svg'

const Switch = ({ isOn, handleToggle }) => {
  return (
    <StSwitch>
      <StEmoji className="emoji1">
        <img src={scream} alt="" />
      </StEmoji>
      <StEmoji className="emoji2">
        <img src={sleep} alt="" />
      </StEmoji>
      <input
        checked={isOn}
        onChange={handleToggle}
        type="checkbox"
        id="aroldo" />
      <label htmlFor="aroldo">
        <span />
      </label>
    </StSwitch>
  )
}

export default Switch