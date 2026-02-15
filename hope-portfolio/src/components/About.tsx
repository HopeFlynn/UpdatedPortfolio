import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="about" style={{
            minHeight: '100vh',
            padding: isMobile ? '4rem 1.5rem' : '6rem 5%',
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: isMobile ? '3rem' : '4rem',
            flexWrap: 'wrap'
        }}>
            {/* Background Glow - Consistent with Hero */}
            <div className="glow-orb orb-3" style={{ top: '10%', left: '80%', opacity: 0.3 }}></div>
            <div className="glow-orb orb-1" style={{ width: '400px', height: '400px', top: '70%', left: '-10%', opacity: 0.2 }}></div>

            {/* Left Column: Who Am I Content */}
            <div style={{
                flex: isMobile ? '1 1 auto' : '1 1 500px',
                width: isMobile ? '100%' : 'auto',
                position: 'relative',
                zIndex: 10,
                textAlign: isMobile ? 'center' : 'left'
            }}>

                <h2 style={{
                    fontSize: isMobile ? '2.5rem' : '3.5rem',
                    color: 'white',
                    fontFamily: 'serif',
                    marginBottom: '2rem',
                    lineHeight: '1.2',
                    textShadow: '0 0 20px rgba(255,255,255,0.2)'
                }}>
                    WHO AM I?
                </h2>

                <p style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.8',
                    color: 'rgba(255,255,255,0.9)',
                    marginBottom: '1.5rem'
                }}>
                    <span style={{ fontSize: '1.5rem' }}>✨</span> <b>I'm a tech enthusiast</b> who thrives at the intersection of creativity and code. Whether I'm wrangling data into compelling visualizations or building software solutions, I bring both <span style={{ color: '#f9a8d4', fontWeight: 'bold' }}>technical precision</span> and a dash of <span style={{ color: '#a5b4fc', fontWeight: 'bold' }}>creative flair</span> to everything I do.
                </p>
                <p style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.8',
                    color: 'rgba(255,255,255,0.9)',
                    marginBottom: '2rem'
                }}>
                    Beyond my technical skills, you'll often find me at conferences and summits 🎤, swapping ideas with fellow innovators over good coffee (or great food—I'm a bit of an <b style={{ color: '#fbcfe8' }}>epicure 🍷</b>).
                </p>

                {/* Download Resume Button */}
                <a
                    href="/resume.pdf"
                    download="Hope_Mwangi_Resume"
                    style={{
                        padding: '0.6rem 1.5rem',
                        background: 'linear-gradient(90deg, #f472b6, #a78bfa)',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '30px',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(255,255,255,0.3)',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(244, 114, 182, 0.4)',
                        transition: 'transform 0.2s ease',
                        display: 'inline-block',
                        marginTop: '1rem'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    Download Resume 📄
                </a>

                {/* Skills Section - Tech Stack */}
                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', color: '#fbcfe8', marginBottom: '1rem', fontFamily: 'serif' }}>MY TOOLKIT 🛠️</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                        {[
                            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                            { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
                            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
                            { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
                            { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
                            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
                            { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
                            { name: 'Excel', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg' },
                            { name: 'Tableau', icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
                            { name: 'PowerBI', icon: 'https://cdn.worldvectorlogo.com/logos/power-bi.svg' },
                        ].map((skill) => (
                            <div key={skill.name} style={{
                                background: 'rgba(255,255,255,0.08)',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '0.9rem',
                                color: 'white',
                                transition: 'transform 0.2s',
                                cursor: 'default'
                            }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <img src={skill.icon} alt={skill.name} style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                                <span style={{ fontWeight: '500' }}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Right Column: Overlapping Image Design */}
            <div style={{
                flex: isMobile ? '1 1 auto' : '1 1 400px',
                width: isMobile ? '100%' : 'auto',
                position: 'relative',
                height: isMobile ? '350px' : '500px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: isMobile ? '1rem' : '0'
            }}>
                <div style={{
                    position: 'relative',
                    width: isMobile ? '300px' : '450px',
                    height: isMobile ? '300px' : '450px'
                }}>
                    {/* Back Image (Top Left) */}
                    <div style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: isMobile ? '180px' : '280px',
                        height: isMobile ? '180px' : '280px',
                        zIndex: 1,
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    }}>
                        <img src="/images/mee.jpg" alt="Profile Back" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                    </div>

                    {/* Front Image (Bottom Right) */}
                    <div style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        width: isMobile ? '180px' : '280px',
                        height: isMobile ? '180px' : '280px',
                        zIndex: 2,
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                        border: '4px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <img src="/images/profile.png" alt="Profile Front" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                    </div>
                </div>

                {/* Decorations */}
                <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '3rem', animation: 'float 4s ease-in-out infinite' }}>✨</div>
                <div style={{ position: 'absolute', bottom: '-10px', left: '-10px', animation: 'float 5s ease-in-out infinite 1s', zIndex: 10 }}>
                    <div
                        style={{ fontSize: '3rem', cursor: 'pointer', transition: 'transform 0.3s ease-in-out' }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'scale(1.4) rotate(15deg)';
                            e.currentTarget.style.filter = 'drop-shadow(0 0 10px #f472b6)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                            e.currentTarget.style.filter = 'none';
                        }}
                        onClick={() => alert("You found a hidden heart! ❤️")}
                        title="Click me!"
                    >💖</div>
                </div>
            </div>
        </section>
    );
};

export default About;
