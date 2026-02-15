import React, { useRef } from 'react';

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'TrackMyQuest - Job Application Tracker',
            description: 'A simple tool that helps recent graduates organize and track their job applications in one place. Instead of losing track of which companies you\'ve applied to, been interviewed, accepted and rejected, this app keeps everything organized.',
            link: 'https://track-my-quest-34.vercel.app/',
            tags: ['Productivity', 'Job Tracker', 'Web App']
        },
        {
            title: 'GDG-on-Campus-Kabarak Website',
            description: 'As the lead of GDG on Campus Kabarak, I developed a website that explains more about the community. GDG on Campus Kabarak is a project-driven community dedicated to turning innovative ideas into real-world solutions.',
            link: 'https://gdg-on-campus-kabarak.vercel.app/',
            tags: ['Community', 'Web Development', 'Leadership']
        },
        {
            title: 'Student Performance Analysis',
            description: 'A data analysis project that examines how students\' backgrounds affect their academic performance in Math, Reading, and Writing. It analyzes test scores, compares performance by demographics, creates visual charts, and calculates average scores to reveal patterns.',
            link: 'https://github.com/HopeFlynn/student-performance-analysis',
            tags: ['Data Analysis', 'Python', 'Data Visualization']
        },
        {
            title: 'My 21st Birthday Quiz',
            description: 'A fun, interactive quiz site created for my 21st birthday where friends tested how well they know me. It features 15 questions about my personality and habits, a message board, and a leaderboard, all wrapped in a clean, purple-themed design.',
            link: '#',
            tags: ['Interactive Web App', 'Gamification', 'Personal Project']
        },
        {
            title: 'Simple Python Games',
            description: 'A collection of beginner-friendly Python programs built to practice coding fundamentals and problem-solving. Includes Tic-Tac-Toe, a Calculator, a Random Jokes Generator, and a Quiz Game.',
            link: 'https://github.com/HopeFlynn/Simple-games',
            tags: ['Python', 'Game Development', 'Algorithm Practice']
        },
        {
            title: 'SocialHub - Social Media Platform UI',
            description: 'A demo social media platform created as a class project for User Interface and Design. It showcases modern social networking features with a clean, user-friendly design, demonstrating understanding of user interaction patterns and engaging experiences.',
            link: '#',
            tags: ['UI/UX Design', 'Social Media', 'Class Project']
        },
        {
            title: 'KidKinder - Holiday Tutoring Website',
            description: 'A website that helps parents find tutors for their kids during school holidays. Children aged 6-13 can learn new skills like Math, Coding, Robotics, Martial Arts, Dance, and Gymnastics to stay engaged during long breaks.',
            link: 'https://kidkinder-eight.vercel.app/',
            tags: ['EdTech', 'Web Development', 'Tutoring Platform']
        }
    ];

    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        target.style.setProperty('--mouse-x', `${x}px`);
        target.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <section id="projects" ref={containerRef} style={{
            minHeight: '100vh',
            padding: '6rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative'
        }}>
            {/* Background Glow */}
            <div className="glow-orb orb-2" style={{ top: '20%', right: '10%', opacity: 0.2 }}></div>

            <h2 style={{
                textAlign: 'left',
                marginBottom: '3rem',
                fontSize: '2.5rem',
                color: 'white',
                textShadow: '0 0 10px rgba(255,255,255,0.3)',
                paddingLeft: '1rem',
                borderLeft: '4px solid #f9a8d4', // Pink border
                fontFamily: 'serif',
                letterSpacing: '2px'
            }}>Projects I have worked on 🚀</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '6rem 2rem', position: 'relative', zIndex: 10 }}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="glass-card project-card"
                        onMouseMove={handleMouseMove}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100%',
                            position: 'relative',
                            overflow: 'hidden',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderColor: 'rgba(244, 114, 182, 0.2)'
                        }}
                    >
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>{project.title}</h3>
                            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.8)' }}>
                                {project.description}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        padding: '0.2rem 0.8rem',
                                        borderRadius: '20px',
                                        fontSize: '0.8rem',
                                        border: '1px solid rgba(244, 114, 182, 0.2)', // Pink tint
                                        color: '#fbcfe8'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                alignSelf: 'start',
                                marginTop: 'auto',
                                padding: '0.5rem 1rem',
                                background: 'rgba(244, 114, 182, 0.2)', // Pink glass
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                transition: 'all 0.3s',
                                border: '1px solid rgba(244, 114, 182, 0.3)'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = 'rgba(244, 114, 182, 0.4)';
                                e.currentTarget.style.boxShadow = '0 0 10px rgba(244, 114, 182, 0.3)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = 'rgba(244, 114, 182, 0.2)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            View Project &rarr;
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
