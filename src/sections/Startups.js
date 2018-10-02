import React from 'react'
import Section from '../components/Section'


export default ({section}) => {
  return (
    <Section id={section.id} isVisible={false}>
      <div className="my-auto">
        <h2 className="mb-5">My Startups</h2>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
                <h3 className="mb-0">Senior Web Developer</h3>
                <div className="subheading mb-3">Intelitec Solutions</div>
                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
            </div>
            <div className="resume-date text-md-right">
                <span className="text-primary">March 2013 - Present</span>
            </div>
        </div>
      </div>

    </Section>
  )
}
