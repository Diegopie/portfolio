import React from 'react';
import './Services.css';

const Services = (props) => {

    return (
        <section>
            <div className='Services-container'>
                <article className='Services-card'>
                    <h3>Design</h3>
                    <div className='Services-cardBody'>
                        <p>Creating stunning, user-friendly websites that blend creativity, functionality, and your vision. Responsive, accessible, and high-performing sites are tailored to your brand’s unique identity and we can even help create that brand identity if you are just getting started. Bring your vision to life with professional design.</p>
                    </div>
                    <img src="/assets/img/services/seo.svg" />
                </article>
                <article className='Services-card'>
                    <h3>Development</h3>
                    <div className='Services-cardBody'>
                        <p>Building fast, scalable, and secure websites using the appropriate web technologies for your needs. Whether it’s a custom web app, eCommerce platform, CMS integrated systems, or just a landing page, we turn ideas into reality with maintainable code and customizable solutions so that you stay in control.</p>
                    </div>
                    <img src="/assets/img/services/seo.svg" />
                </article>
                <article className='Services-card'>
                    <h3>Accessibility</h3>
                    <div className='Services-cardBody'>
                        <p>Ensure that your website is accessible to everyone using industry standards like WCAG. Accessibility services help your business maintain inclusive, user-friendly experiences by improving navigation, readability, and compatibility with assistive technologies. Web accessibility also ensures you are compliant with the ADA and the Web Accessibility Directive, limiting you legal liability.</p>
                    </div>
                    <img src="/assets/img/services/seo.svg" />
                </article>
                <article className='Services-card'>
                    <h3>SEO</h3>
                    <div className='Services-cardBody'>
                        <p>SEO services are designed to boost your online visibility and drive more traffic to your website. By using proven strategies like keyword optimization, technical SEO, and content marketing, we help improve your search engine rankings. From on-page optimization to link-building and analytics tracking, we tailor our approach to meet your unique business goals</p>
                    </div>
                    <img src="/assets/img/services/seo.svg" />
                </article>
                <article className='Services-card'>
                    <h3>CMS</h3>
                    <div className='Services-cardBody'>
                        <p>Stay in control by utilizing powerful CMS platforms and unlock streamlining content management and seamless integration with your existing systems. <br/> Whether you're using WordPress, Shopify, or a custom CMS solution, we supply smooth integration, easy-to-use interfaces, and a flexible backend that empowers you to manage and update your site with ease. We make content control simple, so you can focus on what matters most.</p>
                    </div>
                    <img src="/assets/img/services/seo.svg" />
                </article>
            </div>
        </section>
    );
};

export default Services;