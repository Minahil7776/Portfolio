import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Experience() {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            <div className='experience-container'>
                <div className='line'></div>
                <div className='circle'>MERN</div>
                <div className='experience'>
                    <div className='experience-text'>
                        <p>MY JOURNEY SO FAR</p>
                        <h1>Work Experinece.</h1>
                    </div>
                    <div className='date1'>October 2023 - Present</div>
                    <div className='experience-details'>
                        <div className='experience1' id='experience1'>
                            <h2>MERN Stack Developer</h2>
                            <p>Independent Developer</p>
                            <ul>
                                <li>Developed multiple dynamic web applications using MongoDB, Express.js, React, and Node.js.</li>
                                <li>Implemented user authentication and authorization systems, enhancing security and user experience.</li>
                                <li>Created RESTful APIs to handle data exchange between front-end and back-end systems.</li>
                                <li>Designed and optimized MongoDB schemas for efficient data storage and retrieval.</li>
                                <li>Worked on state management using Redux, improving the scalability and maintainability of applications.</li>
                            </ul>
                        </div>  
                        <div className='circle2'><i class="fab fa-react fa-2x"></i></div>
                        <div className='date2'>October 2022 - Present</div>
                        <div className='experience2' id='experience1'>
                            <h2>Frontend Developer</h2>
                            <p>Independent Developer</p>
                            <ul>
                                <li>Built responsive and interactive web interfaces using HTML, CSS, and JavaScript.</li>
                                <li>Developed single-page applications (SPAs) with React, improving performance and user engagement.</li>
                                <li>Utilized CSS frameworks like Bootstrap and Material-UI to streamline the design process.</li>
                                <li>Implemented client-side routing with React Router for seamless navigation.</li>
                                <li>Focused on optimizing web performance, ensuring quick load times and a smooth user experience.</li>
                            </ul>
                        </div>
                        <div className='circle3'><i class="fas fa-code fa-2x"></i></div>
                        <div className='date3'>Janruary 2022 - Present</div>
                        <div className='experience3' id='experience1'>
                            <h2>C++ Software Developer</h2>
                            <p>Independent Developer</p>
                            <ul>
                                <li>Created several software projects using C++, demonstrating proficiency in object-oriented programming.</li>
                                <li>Developed algorithms and data structures to solve complex computational problems.</li>
                                <li>Implemented efficient memory management techniques, ensuring robust and high-performance applications.</li>
                                <li>Applied principles of software engineering, such as modular design and code reuse, to improve maintainability.</li>
                                <li>Utilized version control systems like Git to manage and track changes in codebases.</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    )
}
