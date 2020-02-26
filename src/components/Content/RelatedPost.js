import React from 'react'
import { Link } from 'gatsby'
import Image from '../Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StRelated, StFigureImage } from './style.css'

class RelatedPost extends React.Component {
  constructor(props){
    super(props)
    this.contentRef = React.createRef()
    this.state = {
      contentWidth: 0,
      contentHeight: 0
    }
  }

  componentDidMount() {
    this.setState({
      contentWidth: this.measureElement().width,
      contentHeight: this.measureElement().height
    })
  }

  measureElement = () => {
    const element = this.contentRef.current
    return {
      width: element.offsetWidth,
      height: element.offsetHeight
    }
  }

  isTaller = () => this.state.contentHeight > this.state.contentWidth

  render(){
    const {subpost} = this.props


    return (
      <StRelated className={`${this.isTaller() ? 'tall' : 'wide'}`}>
        <Link className="overallLink" to={`/${subpost.slug}/`} ref={this.contentRef}>
          {
            subpost.attached_mainimg && (
              <StFigureImage>
                <Image originalurl={subpost.attached_mainimg} alt={subpost.title} />
              </StFigureImage>
            )
          }
          <div className="subpostContent">
            <h3 className="subpostTitle">{subpost.title}</h3>
            <div className="excerpt" dangerouslySetInnerHTML={{ __html: subpost.excerpt }} />
            {/* {
              subpost.acf.autor && (
                <div className="author">Por: <strong>{subpost.acf.autor}</strong></div>
              )
            } */}
            <div className="morewrap">
              <button className="more" to={`${subpost.slug}/`}>Ver más <FontAwesomeIcon icon={['far', 'eye']} /></button>
            </div>
          </div>
        </Link>
      </StRelated>
    )
  }
}

export default RelatedPost
