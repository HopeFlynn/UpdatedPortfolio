import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
    const navigate = useNavigate();
    const [terminalInput, setTerminalInput] = useState('');
    const [terminalOutput, setTerminalOutput] = useState<string[]>(['Welcome! Type /help for commands.', 'Want a programming joke? Type joke']);
    const outputRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of terminal output
    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [terminalOutput]);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            let cmd = terminalInput.trim().toLowerCase();
            // Allow commands without the leading '/'
            if (cmd.startsWith('/')) {
                cmd = cmd.substring(1); // remove '/'
            }

            const newLines: string[] = [`visitor@hope-portfolio:~$ ${cmd}`];

            switch (cmd) {
                case 'projects':
                    newLines.push('Navigating to Projects...');
                    setTimeout(() => navigate('/projects'), 800);
                    break;
                case 'about':
                    newLines.push('Navigating to About...');
                    setTimeout(() => navigate('/about'), 800);
                    break;
                case 'certificates':
                    newLines.push('Navigating to Certificates...');
                    setTimeout(() => navigate('/certificates'), 800);
                    break;
                case 'gallery':
                    newLines.push('Navigating to Gallery...');
                    setTimeout(() => navigate('/gallery'), 800);
                    break;
                case 'contact':
                    newLines.push('Connect with me on social media above! ☝️');
                    break;
                case 'help':
                    newLines.push('Available commands:');
                    newLines.push('  /projects, /about, /gallery');
                    newLines.push('  /certificates, /contact');
                    newLines.push('  /skills, /joke, /coffee, /clear');
                    break;
                case 'skills':
                    newLines.push('🚀 Tech Stack:');
                    newLines.push('  Frontend: React, TypeScript, Tailwind');
                    newLines.push('  Backend: Node.js, Python');
                    newLines.push('  Tools: Git, Vite, Figma');
                    break;
                case 'joke':
                    const jokes = [
                        "Why do programmers prefer dark mode? Because light attracts bugs.",
                        "There are 10 types of people in the world: those who understand binary, and those who don't.",
                        "Why did the developer go broke? Because he used up all his cache.",
                        "How do you comfort a JavaScript bug? You console it."
                    ];
                    newLines.push(jokes[Math.floor(Math.random() * jokes.length)]);
                    break;
                case 'coffee':
                    newLines.push('Here is your virtual coffee! ☕');
                    newLines.push('  ( (');
                    newLines.push('   ) )');
                    newLines.push('........');
                    newLines.push('| .--. |');
                    newLines.push('|      |');
                    newLines.push('`------`');
                    break;
                case 'clear':
                    setTerminalOutput(['Welcome! Type /help for commands.', 'Want a programming joke? Type joke']);
                    setTerminalInput('');
                    return; // Return early to avoid adding the command to history
                default:
                    newLines.push(`Command '${cmd}' not found. Try /help`);
            }

            setTerminalOutput(prev => [...prev, ...newLines]);
            setTerminalInput('');
        }
    };

    return (
        <section id="hero" style={{
            height: isMobile ? 'auto' : '100vh',
            minHeight: '100vh',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            padding: isMobile ? '80px 1rem 2rem' : '0 5%',
            background: '#2D1B3D',
            color: 'white',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: isMobile ? 'center' : 'space-between',
            gap: isMobile ? '2rem' : '0'
        }}>
            {/* Rotating Badge - Now on the Left Side */}
            <div style={{
                position: 'absolute',
                top: isMobile ? '2%' : '15%',
                left: isMobile ? '50%' : '2%', // Pushed to the left edge
                transform: isMobile ? 'translateX(-50%)' : 'none',
                zIndex: 30,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: isMobile ? '100px' : '180px',
                height: isMobile ? '100px' : '180px',
            }}>
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    animation: 'spin 20s linear infinite'
                }}>
                    <svg viewBox="0 0 200 200" width="100%" height="100%">
                        <path id="textPath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="none" />
                        <text fill="#f472b6" fontSize="24" fontFamily="monospace" fontWeight="bold" letterSpacing="4">
                            <textPath href="#textPath" startOffset="0%">
                                HOPE MWANGI • PORTFOLIO •
                            </textPath>
                        </text>
                    </svg>
                </div>
                <div style={{ fontSize: isMobile ? '2rem' : '3rem', animation: 'pulse 2s ease-in-out infinite' }}>💖</div>
            </div>

            {/* Left Content Side */}
            <div style={{
                flex: isMobile ? 'none' : '1 1 50%',
                width: isMobile ? '100%' : 'auto',
                order: isMobile ? 2 : 1,
                zIndex: 20,
                textAlign: 'left',
                paddingLeft: isMobile ? '0' : '5%', // Add padding to not overlap with badge
                animation: 'fadeInLeft 1.5s ease-out',
                alignSelf: isMobile ? 'center' : 'flex-end', // Align this container to the bottom
                paddingBottom: isMobile ? '0' : '8%', // Give it some space from the bottom edge
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div style={{ maxWidth: '600px', width: '100%' }}>

                    {/* Terminal Command Prompt */}
                    <div style={{
                        marginTop: '2rem',
                        background: 'rgba(20, 20, 35, 0.8)',
                        backdropFilter: 'blur(10px)',
                        padding: '1rem',
                        borderRadius: '10px',
                        border: '1px solid rgba(244, 114, 182, 0.3)',
                        fontFamily: "'Fira Code', 'Courier New', monospace",
                        maxWidth: '450px',
                        width: '100%',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                        animation: 'fadeInUp 2s ease-out',
                        fontSize: '0.9rem',
                        margin: isMobile ? '0 auto' : '2rem 0 0 0'
                    }}>
                        <div
                            ref={outputRef}
                            style={{
                                marginBottom: '0.5rem',
                                height: '80px',
                                overflowY: 'auto',
                                color: '#a7f3d0',
                                scrollbarWidth: 'thin'
                            }}
                        >
                            {terminalOutput.map((line, i) => (
                                <div key={i} style={{ marginBottom: '4px' }}>{line}</div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.5rem' }}>
                            <span style={{ color: '#f472b6', marginRight: '10px', fontWeight: 'bold' }}>visitor@hope-portfolio:~$</span>
                            <input
                                type="text"
                                value={terminalInput}
                                onChange={(e) => setTerminalInput(e.target.value)}
                                onKeyDown={handleCommand}
                                placeholder="type command (e.g. /projects)..."
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'white',
                                    fontFamily: 'inherit',
                                    width: '100%',
                                    outline: 'none',
                                    fontSize: '0.9rem'
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Right Side: Image Pushed to the Edge */}
            <div style={{
                flex: isMobile ? 'none' : '1 1 50%',
                width: isMobile ? '100%' : 'auto',
                order: isMobile ? 1 : 2,
                position: 'relative',
                height: isMobile ? '400px' : '100%',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: isMobile ? 'center' : 'flex-end', // Push to edge
                zIndex: 10,
                marginTop: isMobile ? '2rem' : '0'
            }}>
                {/* Drifting Code Snippets - Background */}
                <div style={{ position: 'absolute', top: '10%', right: '60%', color: 'rgba(244, 114, 182, 0.2)', fontFamily: 'monospace', fontSize: '1.2rem', animation: 'float 8s ease-in-out infinite' }}>&lt;Code /&gt;</div>
                <div style={{ position: 'absolute', top: '30%', right: '80%', color: 'rgba(167, 139, 250, 0.2)', fontFamily: 'monospace', fontSize: '1.5rem', animation: 'float 10s ease-in-out infinite 2s' }}>{`{ creativity }`}</div>
                <div style={{ position: 'absolute', bottom: '40%', right: '50%', color: 'rgba(251, 207, 232, 0.15)', fontFamily: 'monospace', fontSize: '1rem', animation: 'float 12s ease-in-out infinite 1s' }}>git commit -m "magic"</div>

                {/* Decorative Elements Behind Image */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    right: isMobile ? '50%' : '10%',
                    transform: isMobile ? 'translateX(50%)' : 'none',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'conic-gradient(from 0deg, transparent 0%, rgba(244, 114, 182, 0.1) 50%, transparent 100%)',
                    animation: 'spin 15s linear infinite',
                    zIndex: -1
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '30%',
                    right: '25%',
                    width: '200px',
                    height: '200px',
                    border: '1px dashed rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    animation: 'spin 20s reverse linear infinite',
                    zIndex: -1
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: '40%',
                    right: '40%',
                    width: '20px',
                    height: '20px',
                    background: '#f472b6',
                    borderRadius: '50%',
                    boxShadow: '0 0 20px #f472b6',
                    animation: 'float 3s ease-in-out infinite'
                }}></div>

                {/* Social Links Row - Bottom of Photo */}
                <div style={{
                    position: 'absolute',
                    bottom: isMobile ? '-0.5rem' : '5%', // Adjusted to be visible below image on mobile
                    left: '0',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: isMobile ? '0.5rem' : '1rem',
                    zIndex: 30,
                    flexWrap: 'wrap',
                    padding: '0 1rem'
                }}>
                    <a href="https://www.instagram.com/hope.flynn_/?hl=en" target="_blank" rel="noopener noreferrer"
                        style={{ padding: '0.5rem 1rem', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(5px)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'white', textDecoration: 'none', fontSize: '0.85rem', transition: 'transform 0.3s' }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        Instagram 📸
                    </a>
                    <a href="https://www.tiktok.com/@_hope.flynn_?_r=1&_t=ZS-93pVjcQjlT7" target="_blank" rel="noopener noreferrer"
                        style={{ padding: '0.5rem 1rem', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(5px)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'white', textDecoration: 'none', fontSize: '0.85rem', transition: 'transform 0.3s' }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        TikTok 🎵
                    </a>
                    <a href="https://github.com/HopeFlynn" target="_blank" rel="noopener noreferrer"
                        style={{ padding: '0.5rem 1rem', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(5px)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'white', textDecoration: 'none', fontSize: '0.85rem', transition: 'transform 0.3s' }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        GitHub 🐙
                    </a>
                    <a href="https://nakuru.mtaawangu.co.ke/categories/people/electronic-voting-system-digitizes-elections-for-nakuruand39s-universities-4686632" target="_blank" rel="noopener noreferrer"
                        style={{ padding: '0.5rem 1rem', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(5px)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'white', textDecoration: 'none', fontSize: '0.85rem', transition: 'transform 0.3s' }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        Read More 📰
                    </a>
                </div>

                {/* Resume Button - Top Right Above Head */}
                <a href="/resume.pdf" download="Hope_Mwangi_Resume"
                    style={{ position: 'absolute', top: '15%', right: isMobile ? '5%' : '20%', zIndex: 20, padding: isMobile ? '0.5rem 1rem' : '0.6rem 1.2rem', background: 'linear-gradient(90deg, #f472b6, #a78bfa)', borderRadius: '25px', color: 'white', textDecoration: 'none', fontSize: isMobile ? '0.8rem' : '0.9rem', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(244, 114, 182, 0.4)', transition: 'transform 0.3s', animation: 'float 6s ease-in-out infinite' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
                    Resume 📄
                </a>

                {/* Image Container */}
                <div style={{
                    height: isMobile ? '100%' : '92%', // Slightly taller
                    width: 'auto',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: isMobile ? 'center' : 'flex-end',
                    animation: 'fadeInRight 1.5s ease-out'
                }}>
                    <img
                        src="/images/profile.png"
                        alt="Hope Mwangi"
                        decoding="async"
                        fetchPriority="high"
                        style={{
                            height: '100%',
                            width: 'auto',
                            objectFit: 'contain',
                            maskImage: 'linear-gradient(to bottom, black 92%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 92%, transparent 100%)',
                            filter: 'drop-shadow(-20px 0 30px rgba(244, 114, 182, 0.3))'
                        }}
                    />
                </div>
            </div>

            {/* Floating Sparkles - Distributed across the whole section */}
            <div style={{ position: 'absolute', top: '15%', left: '45%', fontSize: '1.5rem', zIndex: 5, animation: 'float 4s ease-in-out infinite' }}>✨</div>
            <div style={{ position: 'absolute', top: '40%', left: '5%', fontSize: '1.2rem', zIndex: 5, animation: 'float 6s ease-in-out infinite 1s' }}>⭐</div>
            <div style={{ position: 'absolute', bottom: '20%', left: '40%', fontSize: '1.3rem', zIndex: 5, animation: 'float 5s ease-in-out infinite 2s' }}>⚡</div>
            <div style={{ position: 'absolute', top: '25%', right: '35%', fontSize: '1rem', zIndex: 5, animation: 'float 7s ease-in-out infinite 1.5s' }}>💫</div>
        </section>
    );
};

export default Hero;
