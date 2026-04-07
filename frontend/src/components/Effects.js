import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Effects = () => {
    const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <>
        { init && (<Particles
            id="tsparticles"
            className="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: false
                },
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 5,
                        },
                        grab: {
                            distance: 200,
                            duration: 0.4,
                            links: {
                                color: "#a7a8aa",
                                opacity: 0.8,
                                blink: false,
                                consent: false
                            }
                        },
                    },
                },
                particles: {
                    shadow: {
                    enable: true,
                    color: "#899092",
                    blur: 10
                },
                    number: { 
                        value: 250, 
                        density: { 
                            enable: true,
                            area: 800 
                        } 
                    },
                    color: {
                        // value: ["#f95252", "#f9a676"] 
                        value: ["#52b6f9", "#f976f0", "#fe858b"] 
                    }, 
                    shape: { 
                        type: "circle" 
                    }, 
                    opacity: {
                        value: 1 
                    },
                    size: { 
                        value: { 
                            min: 1, 
                            max: 3 
                        } 
                    }, 
                    // links: { 
                    //     enable: true, 
                    //     distance: 150, 
                    //     color: "#808080", 
                    //     opacity: 0.4, 
                    //     width: 1 
                    // }, 
                    move: { 
                        enable: true, 
                        speed: 1, 
                        direction: "none", 
                        random: false, 
                        straight: false, 
                        outModes: { 
                            default: "bounce" 
                        } 
                    } 
                },
                detectRetina: true,
        }}
        />
    )}
    </>
    );
}

export default Effects;