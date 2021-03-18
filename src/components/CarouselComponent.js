import { Carousel } from 'bootstrap';
import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        src: "/assets/images/K_Parking.jpg",
        altText: 'Slide 1',
        caption: 'Front Side Parking',
        header: 'Front Side Parking',
        key: '1'
    },
    {
        src: "/assets/images/K_Front Yard.jpg",
        altText: 'Slide 2',
        caption: 'Front Yard',
        header: 'Front Yard',
        key: '2'
    },
    {
        src: "/assets/images/K_Living Room.jpeg",
        altText: 'Slide 3',
        caption: 'Living Room',
        header: 'SLiving Room',
        key: '3'
    },
];

const ApartImages = () => <UncontrolledCarousel items={items} />;

export default Carousel;