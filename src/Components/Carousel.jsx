import { useState } from 'react';
import Image from "next/image";
const Carousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        setCurrentIndex(isFirstSlide ? slides.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto mt-10">
            {/* Carousel Frame */}
            <div className="overflow-hidden rounded-lg shadow-lg">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            {slide.type === 'image' && (
                                <Image
                                    src={slide.src}
                                    alt={slide.alt}
                                    layout="responsive"
                                    className="w-full h-auto max-h-[32rem] mt-auto object-contain"
                                />
                            )}
                            {slide.type === 'video' && (
                                <div className="relative w-full pt-[56.25%]">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src={slide.src}
                                        title={slide.title}
                                        allow="encrypted-media; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={goToPrevious}
                className=" text-black absolute top-1/2 left-[-5rem] transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow-lg hover:bg-gray-700 hover:text-white"
            >
                ❮
            </button>
            <button
                onClick={goToNext}
                className=" text-black absolute top-1/2 right-[-5rem] transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow-lg hover:bg-gray-700 hover:text-white"
            >
                ❯
            </button>

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

export default Carousel;