import React, {useEffect, useRef, useState} from 'react';
import './App.scss';

function App() {
    const refContainer = useRef<HTMLElement>(null);
    const [scrollValue, setScrollValue] = useState<number>(0)

    const scrollStrength = 300

    // Todo : Timeout entre chaque tick de scroll pour ne pas aller trop vite

    // On load
    useEffect(() => {
        let scrollableContainer = refContainer

        // Check if ref is loaded
        if (scrollableContainer.current && scrollableContainer.current instanceof HTMLElement) {
            const getUpdatedScrollValue = (delta: number) => {
                const min = 0
                const max = scrollableContainer.current!.offsetWidth

                return delta > 0 ?
                    scrollValue + scrollStrength > max ? max : scrollValue + scrollStrength
                    :
                    scrollValue - scrollStrength < min ? min : scrollValue - scrollStrength
            }

            const onScroll = (e: WheelEvent) => {
                const newValue = getUpdatedScrollValue(e.deltaY)

                scrollableContainer.current!.scrollTo({
                    left: newValue,
                    behavior: 'smooth'
                });
                console.log(e)
                setScrollValue(newValue)
                console.log(newValue)
            }

            // Update horizontal scroll value on mouse wheel
            scrollableContainer.current.addEventListener("wheel", onScroll, false);

            // Cleanup
            return () => {
                scrollableContainer.current!.removeEventListener("wheel", onScroll, false)
            }
        }
    }, [scrollValue]);

    return (
        <main>
            <header>HOCHET Dylan</header>
            <section className="horizontal-scrollable" ref={refContainer}>
                <div className="box">content</div>
                <div className="box">content</div>
                <div className="box">content</div>
                <div className="box">content</div>
                <div className="box">content</div>
                <div className="box">content</div>
            </section>
        </main>
    );
}

export default App;
