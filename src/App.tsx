import React, {useEffect, useRef, useState} from 'react';
import './App.scss';

function App() {
    const refMainWrapper = useRef<HTMLDivElement>(null);
    const refMainContainer = useRef<HTMLElement>(null);
    const [containerPosition, setContainerPosition] = useState<number>(0)

    const scrollStrength = 100

    useEffect(() => {
        let mainWrapper = refMainWrapper
        let mainContainer = refMainContainer
        let resizeTimer: NodeJS.Timeout

        // Check if ref is loaded
        if (mainContainer.current && mainWrapper.current) {

            // Prevent firing too many event for performance issues
            const onResize = () => {
                clearTimeout(resizeTimer)
                resizeTimer = setTimeout(() => {
                    calculatePosition(containerPosition)
                }, 100);
            }

            const onScroll = (e: WheelEvent) => {
                e.preventDefault()

                // Is scrolling down ?
                let newPosition = e.deltaY > 0 ?
                    containerPosition + scrollStrength : containerPosition - scrollStrength

                calculatePosition(newPosition)
            }

            const calculatePosition = (newPosition: number) => {
                const min = 0
                const max = mainContainer.current!.clientWidth - mainWrapper.current!.clientWidth

                if (newPosition > max) {
                    newPosition = max
                } else if (newPosition < min) {
                    newPosition = min
                }

                setContainerPosition(newPosition)
            }

            mainContainer.current.addEventListener("wheel", onScroll);
            window.addEventListener("resize", onResize);

            // Cleanup
            return () => {
                mainContainer.current!.removeEventListener("wheel", onScroll)
                window.removeEventListener("resize", onResize);

            }
        }
    }, [containerPosition]);

    const getContainerPosition = () => {
        return {transform: `translate(-${containerPosition}px, 0px)`}
    }

    return (
        <>
            <header>HOCHET Dylan</header>
            <div className="main-wrapper" ref={refMainWrapper}>
                <main style={getContainerPosition()} ref={refMainContainer}>
                    <section>start</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>content</section>
                    <section>end</section>
                </main>
            </div>
        </>
    );
}

export default App;
