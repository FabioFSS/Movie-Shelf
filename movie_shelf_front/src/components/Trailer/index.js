import React, { useEffect, useRef } from 'react'
import './styles.scss'

export const Trailer = ({ trailerId }) => {
    
    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 25 / 25 + 'px';
        const width = iframeRef.current.offsetWidth * 25 / 15 + 'px';
        iframeRef.current.setAttribute('height', height);
        iframeRef.current.setAttribute('width', width);
    }, []);

    return (
        <div className="video">
            <iframe
                src={`https://www.youtube.com/embed/${trailerId}`}
                ref={iframeRef}
                width="100%"
                title="video"
            ></iframe>
        </div>
    )    
}