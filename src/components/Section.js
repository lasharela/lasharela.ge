import React, { Component } from 'react'


export class Section extends Component {

    constructor(props) {
      super(props)
    
      this.id = this.props.id || Math.random
      this.sectionClass = this.props.sectionClass || ''
    }
    
    
  render() {
    return (
        <section className={`${this.sectionClass} p-3 p-lg-5 d-flex flex-column`} id={this.id}>
            {this.props.children}
        </section>
    )
  }
}

export default Section
