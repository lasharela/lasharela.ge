import React from 'react'
import Section from '../components/Section'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'

export default () => {
    return (
        <Section id="about">
            <div className="my-auto">
                <h1 className="mb-0">
                    <span className="pr-3">Lasha</span>
                    <span className="text-primary">Kava</span>
                </h1>
                <div className="subheading mb-5">
                    <span>Ocean Pkwy,  Brooklyn, NY</span>
                    <span className="px-2">·</span>
                    <span>(317) 585-8468</span> 
                    <span className="px-2">·</span>
                    <a href="mailto:name@email.com">lasharela@gmail.com</a>
                </div>
                <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                <div className="social-icons">
                    <a href="#">
                        <Icon icon={["fab", "linkedin-in"]} />
                    </a>
                    <a href="#">
                        <Icon icon={["fab", "github"]} />
                    </a>
                    <a href="#">
                        <Icon icon={["fab", "twitter"]} />
                    </a>
                    {/* <a href="#">
                        <Icon icon={["fab", "facebook"]} />                    
                    </a> */}
                </div>
            </div>

        </Section>

    )
}
