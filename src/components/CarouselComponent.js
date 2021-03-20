import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import React, {useState} from 'react';

const items = [
    {
        src: "/assets/images/K_Kitchen.jpeg",
        altText: "Kitchen",
        caption: 'cooking range',
        header: 'Kitchen'
    },
    {
        src: "/assets/images/K_Front Yard.jpg",
        altText: 'Front Yard',
        caption: 'Spacious area',
        header: 'Front Yard'
    },
    {
        src: "/assets/images/K_Living Room.jpeg",
        altText: 'Living Room',
        caption: 'Heater, carpet',
        header: 'Living Room',
    },
];

const ApartImages = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
            >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.header} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default ApartImages;