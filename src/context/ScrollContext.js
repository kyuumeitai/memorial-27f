import React from "react"

const defaultState = {
  percentage: 0,
  setPercentage: () => {},
}

const ScrollContext = React.createContext(defaultState)

class ScrollProvider extends React.Component {
  state = {
    percentage: 0,
  }

  setPercentage = (value) => {
    this.setState({ percentage : value })
  }

  render() {
    const { children } = this.props
    const { percentage } = this.state
    return (
      <ScrollContext.Provider
        value = {{
          percentage,
          setPercentage: this.setPercentage
        }}
        >
        {children}
      </ScrollContext.Provider>
    )
  }
}

export default ScrollContext
export { ScrollProvider }
