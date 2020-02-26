import styled from 'styled-components'

const StSwitch = styled.div`
  position: relative;

  input {
    height: 0;
    width: 0;
    visibility: hidden;
    position: absolute;
  }
  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 50px;
    height: 25px;
    background: grey;
    border-radius: 25px;
    position: relative;
    transition: background-color .2s;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    span{
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 21px;
      height: 21px;
      border-radius: 21px;
      transition: 0.2s;
      background: #fff;
      box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
      z-index: 3;
    }
  }

  input:checked + label span {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
  label:active span {
    width: 30px;
  }

`

const StEmoji = styled.div`
  position: absolute;
  top: 8px;
  width: 20px;
  height: 20px;
  z-index: 2;
  display: block;
  font-size: 18px;
  >img{
    display: block;
    max-width: 100%;
  }

  &.emoji1{
    left: 3px;
  }
  &.emoji2{
    right: 4px;
  }

`

export { StSwitch, StEmoji }