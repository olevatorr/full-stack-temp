"use client";

import { useEffect } from 'react';
import MainBanner from '@components/common/banner/Main';
import ListCard from '@components/card/List';
import axios from 'axios';
import { POKE_API_URL } from '@config/index';

export default function Page() {
    const bannerImage = {
        src: '/default.webp',
        alt: 'default',
        fill: true
    };

    const buttons = [
        {
            title: 'Card 1',
            btn: {
                variant: 'default',
                text: 'View',
                url: '/about'
            }
        },
        {
            title: 'Card 1',
            btn: {
                variant: 'default',
                text: 'View',
                url: '/ui-kit'
            }
        }
    ];

    const cards = buttons.map((button, index) => (
        <ListCard
            data={button}
            key={index}
        />
    ));

    const fetchData = async () => {
        try {
            const response = await axios.get(`${POKE_API_URL}/pokemon`);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mx-auto">
            <MainBanner
                image={bannerImage}
                text="UI KIT List"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
                {cards}
            </div>
        </div>
    );
}