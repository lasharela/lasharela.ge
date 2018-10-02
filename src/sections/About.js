import React from 'react'
import Section from '../components/Section'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import HtmlParser from 'html-react-parser'
import {ABOUT} from '../config/content'

export default () => {
    return (
        <Section id="about">
            <div className="my-auto">
                <h1 className="mb-0">
                    <span className="pr-3">{ABOUT.name.firstName}</span>
                    <span className="text-primary">{ABOUT.name.lastName}</span>
                </h1>
                <div className="subheading mb-5">
                    <span>{ABOUT.contact.address}</span>
                    <span className="px-2">·</span>
                    <span>{ABOUT.contact.phone}</span> 
                    <span className="px-2">·</span>
                    <a href={`mailto:${ABOUT.contact.mail}`}>{ABOUT.contact.mail}</a>
                </div>
                <p className="lead mb-5" >{HtmlParser(ABOUT.description)}</p>
                <div className="social-icons">
                    {
                        ABOUT.socialNetworks.map((item, index) => (
                            <a href={item.url} target="_blank" key={index}>
                                <Icon icon={item.icon} />
                             </a>
                        ))
                    }

                </div>
            </div>
        </Section>
    )
}
