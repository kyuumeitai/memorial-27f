import React from "react"

const defaultState = {
  phase: 'phase1',
  style: 'dark',
  setPhase: () => {},
  setStyle: () => {},
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends React.Component {
  state = {
    phase: 'phase1',
  }

  setPhase = (phase) => {
    if(phase !== this.state.phase){
      this.setState({ phase })
      if(phase === 'phase1'){
        this.setState({ style: 'dark' })
      } else
      if(phase === 'phase2'){
        this.setState({ style: 'dark' })
      } else
      if(phase === 'phase3'){
        this.setState({ style: 'dark' })
      } else
      if(phase === 'phase4'){
        this.setState({ style: 'dark' })
      } else
      if(phase === 'phase5'){
        this.setState({ style: 'dark' })
      } else
      if(phase === 'phase6'){
        this.setState({ style: 'dark' })
      } else
      if(phase === 'phase7'){
        this.setState({ style: 'dark' })
      } else
      if(phase === 'phase8'){
        this.setState({ style: 'dark' })
      } else
      if(phase === 'phase9'){
        this.setState({ style: 'clear' })
      } else
      if(phase === 'phase10'){
        this.setState({ style: 'clear' })
      }
    }
  }

  setStyle = (style) => {
    if (style !== this.state.style) {
      this.setState({ style })
    }
  }

  render() {
    const { children } = this.props
    const { phase, style } = this.state
    return (
      <ThemeContext.Provider
        value = {{
          phase,
          style,
          setPhase: this.setPhase,
          setStyle: this.setStyle,
        }}
        >
          {children}
        </ThemeContext.Provider>
    )
  }
}

export default ThemeContext
export { ThemeProvider }