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
        let resizeTimer: string | number | NodeJS.Timeout | undefined

        // Check if ref is loaded
        if (mainContainer.current && mainWrapper.current) {
            const resizeHandler = () => {
                clearTimeout(resizeTimer)
                resizeTimer = setTimeout(() => {
                    onResize()
                }, 100);
            }

            const onResize = () => {
                console.log('wrapper size : ', mainWrapper.current!.clientWidth)
                calculateNewPosition(containerPosition)
            }

            const onScroll = (e: WheelEvent) => {
                e.preventDefault()

                // Is scrolling down ?
                let newPosition = e.deltaY > 0 ?
                    containerPosition + scrollStrength : containerPosition - scrollStrength

                calculateNewPosition(newPosition)
            }

            const calculateNewPosition = (newPosition: number) => {
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
            window.addEventListener("resize", resizeHandler);

            // Cleanup
            return () => {
                mainContainer.current!.removeEventListener("wheel", onScroll)
                window.addEventListener("resize", resizeHandler);

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
