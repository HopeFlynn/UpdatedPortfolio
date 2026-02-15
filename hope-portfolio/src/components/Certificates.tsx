import React, { useRef, useState } from 'react';

const CertificateCard: React.FC<{
    cert: { title: string; issuer: string; date: string; link: string; tags: string[] };
}> = ({ cert }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const isPdf = cert.link.toLowerCase().endsWith('.pdf');
    const isImage = cert.link.toLowerCase().match(/\.(jpg|jpeg|png|gif|webp)$/);

    return (
        <div
            className={`flip-card ${isFlipped ? 'flipped' : ''}`}
            onClick={handleFlip}
            style={{
                height: '280px',
                width: '100%',
                maxWidth: '320px',
                cursor: 'pointer',
                perspective: '1000px'
            }}
        >
            <div className="flip-card-inner" style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                textAlign: 'left',
                transition: 'transform 0.6s',
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}>
                {/* Front */}
                <div className="flip-card-front glass-card" style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(244, 114, 182, 0.2)',
                    borderRadius: '20px',
                    zIndex: 2
                }}>
                    <div>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#fff' }}>{cert.title}</h3>
                        <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#fbcfe8', fontWeight: 'bold' }}>{cert.issuer}</p>
                        <p style={{ fontSize: '0.8rem', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.7)' }}>Completed: {cert.date}</p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                            {cert.tags.map((tag, i) => (
                                <span key={i} style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '20px',
                                    fontSize: '0.7rem',
                                    border: '1px solid rgba(244, 114, 182, 0.2)', // Pink tint
                                    color: '#fbcfe8'
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div style={{ marginTop: 'auto', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>
                        Click to view preview ↺
                    </div>
                </div>

                {/* Back */}
                <div className="flip-card-back glass-card" style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: 'white', // White background for content
                    border: '1px solid rgba(244, 114, 182, 0.2)',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                }}>
                    {isImage ? (
                        <img
                            src={cert.link}
                            alt={cert.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain', // Ensures whole cert is visible
                                borderRadius: '20px'
                            }}
                        />
                    ) : isPdf ? (
                        <div style={{ width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', borderRadius: '20px' }}>
                            <iframe
                                src={`${cert.link}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                                style={{
                                    width: '102%',
                                    height: '102%',
                                    border: 'none',
                                    position: 'absolute',
                                    top: '-1%',
                                    left: '-1%'
                                }}
                                title="Certificate Preview"
                                scrolling="no"
                            />
                        </div>
                    ) : (
                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(20, 20, 20, 0.95)',
                            color: 'rgba(255,255,255,0.5)'
                        }}>
                            <p>Preview Image Not Available</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Certificates: React.FC = () => {
    // List of certificates including new additions
    const certificates = [
        {
            title: 'Python For Data Science',
            issuer: 'Badge',
            date: '2024',
            link: '/certificates/Python Certificate.png',
            tags: ['Python', 'Data Science']
        },
        {
            title: 'Global Mentorship Initiative Certificate',
            issuer: 'Microsoft',
            date: '2025',
            link: '/certificates/GMI Certificate.png',
            tags: ['Certification', 'GMI']
        },
        {
            title: 'Data Science Africa Certificate',
            issuer: 'Data Science Africa',
            date: '2025',
            link: '/certificates/DSA Cert.png',
            tags: ['Data Science', 'Machine Learning', 'DSA']
        },
        {
            title: 'Data Science Africa 2023',
            issuer: 'Data Science Africa',
            date: '2023',
            link: '/certificates/DSA 2023 Cert.png',
            tags: ['Data Science', 'Machine Learning']
        },
        {
            title: 'Generative AI Bootcamp',
            issuer: 'Google / Andela',
            date: '2025',
            link: '/certificates/Generative AI Bootcamp.png',
            tags: ['Generative AI', 'Bootcamp']
        },
        {
            title: 'Google Developer Groups Certificate',
            issuer: 'Google Developer Groups',
            date: '2025',
            link: '/certificates/GDG Certificate.png',
            tags: ['Community', 'Leadership', 'GDG']
        },
        {
            title: 'Central Rift Innovation Week 2025 ',
            issuer: 'Kabarak University (CRIW)',
            date: '2025',
            link: '/certificates/CRIW 2025.png',
            tags: ['Research', 'Innovation', 'CRIW']
        },
        {
            title: 'CRIW 2024 Participation',
            issuer: 'Kabarak University (CRIW)',
            date: '2024',
            link: '/certificates/CRIW 2024.png',
            tags: ['Research', 'Innovation', 'CRIW']
        }
    ];

    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="certificates" ref={containerRef} style={{
            minHeight: '100vh',
            padding: '6rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative'
        }}>
            {/* Background Glow */}
            <div className="glow-orb orb-1" style={{ top: '80%', right: '20%', opacity: 0.4 }}></div>
            <div className="glow-orb orb-2" style={{ top: '20%', left: '10%', opacity: 0.3 }}></div>

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
            }}>
                Certifications 🏆
            </h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem 2rem', position: 'relative', zIndex: 10 }}>
                {certificates.map((cert, index) => (
                    <CertificateCard key={index} cert={cert} />
                ))}
            </div>
        </section>
    );
};

export default Certificates;
