import React from 'react'
import Section from '../components/Section'

export default () => {
    return (
        <Section id="about">
            <div className="my-auto">
                <h1 className="mb-0">Lasha
                    <span className="text-primary">Kava</span>
                </h1>
                <div className="subheading mb-5">3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
                    <a href="mailto:name@email.com">lasharela@gmail.com</a>
                </div>
                <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                <div className="social-icons">
                    <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </div>
            </div>

        </Section>

    )
}
