'use client';

import { useDebugValue, useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 0));
        }, 600);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <LoadingBar color="#c68b00" progress={progress} onLoaderFinished={() => setProgress(0)} />
    );
};
export default ProgressBar;
