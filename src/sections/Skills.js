import React from 'react'
import Section from '../components/Section'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'


export default ({section}) => {
    return (
        <Section id={section.id}>
            <div className="my-auto">
                <h2 className="mb-5">Skills</h2>

                <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item">
                        <Icon icon={["fab", "html5"]} />
                    </li>
                    <li className="list-inline-item">
                        <Icon icon={["fab", "css3-alt"]} />
                    </li>
                    <li className="list-inline-item">
                        <Icon icon={["fab", "js-square"]} />
                    </li>
                    <li className="list-inline-item">
                        <Icon icon={["fab", "angular"]} />
                    </li>
                    <li className="list-inline-item">
                        <Icon icon={["fab", "react"]} />
                    </li>
                    <li className="list-inline-item">
                        <Icon icon={["fab", "node-js"]} />
                    </li>
                    <li className="list-inline-item">
                        <Icon icon={["fab", "sass"]} />
                    </li>
                    <li className="list-inline-item">
                        <Icon icon={["fab", "less"]} />
                    </li>
                    <li className="list-inline-item">
                        <Icon icon={["fab", "wordpress"]} />
                    </li>
                    <li className="list-inline-item">
                        <Icon icon={["fab", "gulp"]} />
                    </li>
                    <li className="list-inline-item">
                        <Icon icon={["fab", "grunt"]} />
                    </li>
                    <li className="list-inline-item">
                        <Icon icon={["fab", "npm"]} />
                    </li>
                </ul>

                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                    <li>
                        <Icon icon={['fas', 'check']} className='fa-li text-primary' />
                        Mobile-First, Responsive Design</li>
                    <li>
                        <Icon icon={['fas', 'check']} className='fa-li text-primary' />
                        Cross Browser Testing &amp; Debugging</li>
                    <li>
                        <Icon icon={['fas', 'check']} className='fa-li text-primary' />
                        Cross Functional Teams</li>
                    <li>
                        <Icon icon={['fas', 'check']} className='fa-li text-primary' />
                        Agile Development &amp; Scrum</li>
                </ul>
            </div>

        </Section>

    )
}
