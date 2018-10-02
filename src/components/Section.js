import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Section extends Component {

    static defaultProps = {
      isVisible: true
    }
  
    constructor(props) {
      super(props)
    
      this.id = this.props.id || Math.random
      this.sectionClass = this.props.sectionClass || ''
    }
    
    
  render() {
    if (this.props.isVisible) {
      return (
          <section className={`${this.sectionClass} resume-section p-3 p-lg-5 d-flex flex-column`} id={this.id}>
              {this.props.children}
          </section>
      )
    }
    else {
      return null
    }
  }
}

Section.propTypes = {
  isVisible: PropTypes.bool
}

export default Section

