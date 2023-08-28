'use client';
import { useEffect, useState } from 'react';
import './banner.scss';

const urls = ['banner1.png', '/banner2.png'];
export default function Banner() {
    const [urlIndex, setUrlIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = urlIndex + 1;
            if (urls.length === newIndex) {
                setUrlIndex(0);
            } else {
                setUrlIndex(newIndex);
            }
        }, 4000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [urlIndex]);

    return (
        <div className="grid place-content-center m-0 p-0 overflow-hidden">
            <div
                className="banner"
                style={{
                    backgroundImage: `url(${urls[urlIndex]})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top center',
                    backgroundSize: 'cover',
                }}
            ></div>
        </div>
    );
}
