import {useEffect, useRef, useState} from 'react';
import Image from "next/image";
const AutoCarousel = ({ slides, styles }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalId = useRef(null);

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        clearInterval(intervalId.current)
        
        intervalId.current = setInterval(goToNext, 3000)
        
        return () => clearInterval(intervalId.current);  // Cleanup on unmount
    }, [currentIndex]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={`${styles} relative max-w-4xl mx-auto mt-10`}>
            {/* Carousel Frame */}
            <div className="mx-auto overflow-hidden rounded-lg h-fit w-fit shadow-lg">
                <div className="relative w-[480px] max-w-[480px] h-[270px] max-h-[270px] overflow-hidden">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${currentIndex === index ? 'opacity-100 z-1' : 'opacity-0 z-0'}`}
                            style={{pointerEvents: currentIndex === index ? 'auto' : 'none'}}  // Prevent interaction with hidden slides
                        >
                            {slide.type === 'image' && (
                                <Image
                                    src={slide.src}
                                    alt={slide.alt}
                                    layout="fill"
                                    className="object-contain"
                                />
                            )}
                            {slide.type === 'video' && (
                                <div className="relative w-full pt-[56.25%]">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src={slide.src}
                                        title={slide.title}
                                        allow="autoplay; encrypted-media; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* Dots Navigation */}
            <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default AutoCarousel;