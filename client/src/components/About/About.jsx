import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../../utils/GlobalContext';
import './About.css';
import useDarkMode from '../../utils/DarkMode';

const About = () => {
    const [{ darkMode }] = useGlobalContext();

    const tabs = [
        {
            id: 'my-life',
            label: 'My Life',
            content: (
                <>
                    <p>
                        I grew up in a small town in Utah with hopes of getting as far away as I can. Turns out, kids are kind of dumb and that town is pretty great. Regardless, I had always wanted more and am so grateful that I am where I am now.
                    </p>
                    <p>
                        I attribute that all to my wonderful wife. She is my rock and my inspiration. My entire career is due to her encouragement, even when I was just that weird coworker that wore his Star Wars blanky as a cape.
                    </p>
                    <p>
                        We love to travel, love our kittens, and love helping people.
                    </p>
                </>
            ),
            img: useDarkMode({
                lightItem: 'about-img2-light.jpg',
                darkItem: 'about-img2-dark.jpg',
            }),
        },
        {
            id: 'pro',
            label: 'Professional/Teaching',
            content: (
                <>
                    <p>
                        I have long been passionate about teaching. It has always filled me with excitement and purpose. I am grateful I explored my other callings and became a web developer for I now have found the perfect intersection of my favorite things. As a web development instructor, I have felt tremendous joy and accelerated growth to be able to best serve the needs of my students.
                    </p>
                    <p>
                        As a developer, I won't pretend that if one does what they love they will never work a day in their life (looking at you Adobe XD). Though I do love creating and contributing to a project. Watching a website come together is thrilling, be it at the workplace, helping a student create their first site, or constructing an experience a client has dreamed about.
                    </p>
                </>
            ),
            img: useDarkMode({
                lightItem: 'about-img3-light.jpg',
                darkItem: 'about-img3-light.jpg',
            }),
        },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const tabRefs = useRef([]);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const handleKeyDown = (event, index) => {
        if (event.key === 'ArrowRight') {
            const nextIndex = (index + 1) % tabs.length;
            setActiveTab(tabs[nextIndex].id);
            tabRefs.current[nextIndex].focus();
        } else if (event.key === 'ArrowLeft') {
            const prevIndex = (index - 1 + tabs.length) % tabs.length;
            setActiveTab(tabs[prevIndex].id);
            tabRefs.current[prevIndex].focus();
        }
    };

    return (
        <div className='About-container'>
            <img
                className='About-photo'
                src={`/assets/img/${tabs.find((tab) => tab.id === activeTab).img}`}
                alt=''
            />
            <div className='About-text-body'>
                <div role='tablist' aria-label='About sections'>
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.id}
                            role='tab'
                            id={`tab-${tab.id}`}
                            aria-selected={activeTab === tab.id}
                            aria-controls={`tabpanel-${tab.id}`}
                            onClick={() => handleTabClick(tab.id)}
                            onKeyDown={(event) => handleKeyDown(event, index)}
                            ref={(el) => (tabRefs.current[index] = el)}
                            className={activeTab === tab.id ? 'active-tab' : ''}
                            tabIndex={activeTab === tab.id ? 0 : -1}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <article
                    id={`tabpanel-${activeTab}`}
                    role='tabpanel'
                    aria-labelledby={`tab-${activeTab}`}
                    className='About-text'
                >
                    {tabs.find((tab) => tab.id === activeTab).content}
                </article>
            </div>
        </div>
    );
};

export default About;