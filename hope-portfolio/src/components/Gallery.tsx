import React, { useRef } from 'react';

type GallerySection = {
    title: string;
    images: { src: string; label: string }[];
};

const Gallery: React.FC = () => {
    // Sections for the gallery
    const gallerySections: GallerySection[] = [
        {
            title: "Conferences and Summits",
            images: [
                { src: '/images/KIW Ruto.webp', label: 'Kenya Innovation Week 2023 with H.E. President William Ruto' },
                { src: '/images/ASK 2024.jpg', label: 'Agricultural Society Of Kenya 2024 with the General Chair of Police' },
                { src: '/images/ASK 2024 2.jpg', label: 'Agricultural Society Of Kenya 2024 with the General Chair of Police' },
                { src: '/images/ASK 2025 1.jpg', label: 'Agricultural Society Of Kenya 2025 Showcasing Lishe App' },
                { src: '/images/ASK 2025 3.jpg', label: 'Agricultural Society Of Kenya 2025 Moments' },
                { src: '/images/Kenya Innovation Week.webp', label: 'Kenya Innovation Week Highlights' },
                { src: '/images/DSA 2025.jpg', label: 'Data Science Africa 2025 Nigeria' },
                { src: '/images/Speaking at DSA Nigeria.jpg', label: 'Presenting at Data Science Africa (DSA) in Nigeria' },
                { src: '/images/KIW 2023.webp', label: 'Kenya Innovation Week 2023' },
                { src: '/images/DLI Rwanda.jpg', label: 'Deep Learning Indaba Rwanda 2025' },
                { src: '/images/DLI 2025.jpg', label: 'Deep Learning Indaba Rwanda 2025' },
                { src: '/images/Indaba.jpg', label: 'Deep Learning Indaba Rwanda ' },
                { src: '/images/Google Cloud Roadshow.jpg', label: 'Google Cloud Roadshow Nairobi' },
                { src: '/images/Google Cloud.png', label: 'Google Cloud Roadshow Nairobi Highlights' },
                { src: '/images/WIDS.jpg', label: 'Women in Data Science (WiDS)' },
                { src: '/images/Devfest Pwani 2024.jpg', label: 'DevFest Pwani 2024' },
                { src: '/images/GDG On Campus.jpg', label: 'GDG On Campus Event' },
                { src: '/images/Dsa 2024 Kenya.png', label: 'Data Science Africa 2024 - Nyeri, Kenya' },
                { src: '/images/dsa 2024.jpg', label: 'Data Science Africa 2024 Highlights' },
                { src: '/images/DSA 2023 Rwanda.png', label: 'Data Science Africa 2023 - Rwanda' },
                { src: '/images/Kenya Innovation Week 2025.jpg', label: 'Kenya Innovation Week 2025' }
            ]
        },
        {
            title: "Speaker Engagement",
            images: [
                { src: '/images/Speaking at DSA Nigeria.jpg', label: 'Presenting at Data Science Africa (DSA) in Nigeria' },
                { src: '/images/Speaker.jpg', label: 'Inspiring the Next Gen' },
                { src: '/images/GDG On Campus.jpg', label: 'Panel Discussion' },
                { src: '/images/Speaker 4.jpg', label: 'Code With Purpose Bootcamp' },
            ]
        },
        {
            title: "Travel",
            images: [
                { src: '/images/Mombasa.jpg', label: 'Mombasa' },
                { src: '/images/Mombasa 2.jpg', label: 'Mombasa' },
                { src: '/images/Malindi 3.jpg', label: 'Malindi' },
                { src: '/images/Malindi 2.jpg', label: 'Malindi' },
                { src: '/images/DSA 2025 Nigeria.jpg', label: 'Nigeria' },
                { src: '/images/Welcome to Nigeria.jpg', label: 'Nigeria' },
                { src: '/images/Rwanda 3.jpg', label: 'Rwanda' },
                { src: '/images/Rwanda 4.jpg', label: 'Rwanda' }
            ]
        }
    ];

    const [activeSection, setActiveSection] = React.useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="gallery" ref={containerRef} style={{
            minHeight: '100vh',
            padding: '3rem 2.5%',
            maxWidth: '100%',
            margin: '0 auto',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div className="glow-orb orb-3" style={{ top: '10%', right: '10%', opacity: 0.3 }}></div>
            <div className="glow-orb orb-1" style={{ bottom: '10%', left: '10%', opacity: 0.2 }}></div>

            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '0.5rem',
                    fontFamily: 'serif',
                    letterSpacing: '3px',
                    color: 'white',
                    textShadow: '0 0 10px rgba(255,255,255,0.3)',
                    textTransform: 'uppercase'
                }}>
                    GALLERY
                </h2>
                <p style={{
                    fontSize: '1rem',
                    color: 'rgba(255,255,255,0.8)',
                    margin: 0
                }}>
                    Yaay! Now that you know me, you get to see me too 💖
                </p>
            </div>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'flex-start',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {/* Left Side: Navigation / Categories */}
                <div style={{
                    flex: '1 1 200px',
                    position: 'sticky',
                    top: '60px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    {gallerySections.map((section, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSection(index)}
                            style={{
                                padding: '0.8rem 1rem',
                                textAlign: 'left',
                                background: activeSection === index ? 'linear-gradient(90deg, rgba(244, 114, 182, 0.4), rgba(167, 139, 250, 0.2))' : 'rgba(255, 255, 255, 0.05)',
                                border: `1px solid ${activeSection === index ? 'rgba(244, 114, 182, 0.5)' : 'rgba(255, 255, 255, 0.1)'}`,
                                borderRadius: '12px',
                                color: 'white',
                                fontSize: '1.1rem',
                                fontWeight: activeSection === index ? 'bold' : 'normal',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                backdropFilter: 'blur(10px)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                            onMouseEnter={(e) => {
                                if (activeSection !== index) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                                if (activeSection !== index) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                            }}
                        >
                            {section.title}
                            {activeSection === index && <span style={{ fontSize: '1.2rem' }}>✨</span>}
                        </button>
                    ))}
                </div>

                {/* Right Side: Image Grid */}
                <div style={{ flex: '3 1 600px', minHeight: '500px' }}>
                    <h3 style={{
                        fontSize: '2rem',
                        marginBottom: '1rem',
                        color: '#fbcfe8',
                        borderBottom: '2px solid rgba(244, 114, 182, 0.3)',
                        paddingBottom: '1rem',
                        display: 'inline-block'
                    }}>
                        {gallerySections[activeSection].title}
                    </h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                        gap: '1rem',
                        animation: 'fadeInUp 0.5s ease-out keyframe'
                    }} key={activeSection}>
                        {gallerySections[activeSection].images.map((img, imgIndex) => (
                            <div
                                key={imgIndex}
                                className="glass-card"
                                style={{
                                    padding: '0.5rem',
                                    borderRadius: '12px',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(244, 114, 182, 0.2)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                    width: '100%'
                                }}
                            >
                                <div style={{
                                    width: '100%',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    marginBottom: '1rem',
                                    aspectRatio: '4/3', // Enforce consistent aspect ratio
                                    position: 'relative'
                                }}>
                                    <img
                                        src={img.src}
                                        alt={`${gallerySections[activeSection].title} item ${imgIndex + 1}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            opacity: 0.95,
                                            transition: 'transform 0.5s ease'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </div>
                                <p style={{
                                    color: '#fbcfe8',
                                    marginTop: 'auto',
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    textAlign: 'center'
                                }}>
                                    {img.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
