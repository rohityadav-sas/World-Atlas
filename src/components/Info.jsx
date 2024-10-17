import { useEffect, useState } from 'react';
import { Tooltip as ReactToolTip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export default function Info({ label, value, link = null }) {
    const [isMobile, setIsMobile] = useState(false);
    const [tappedLink, setTappedLink] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLinkClick = (e, index) => {
        if (isMobile) {
            e.preventDefault();
            if (tappedLink === index) {
                window.open(e.currentTarget.href, '_blank');
            } else {
                setTappedLink(index);
                setTimeout(() => {
                    setTappedLink(null);
                }, 2000);
            }
        }
    };

    if (link) {
        return (
            <p>
                <span className="text-gray-400 font-bold">{label}: </span>
                {
                    link.map((attr, index) => (
                        <span key={index}>
                            <a
                                href={attr}
                                data-tooltip-id={value[index]}
                                data-tooltip-content={value[index]}
                                target="_blank"
                                className="text-purple-400 hover:underline"
                                onClick={(e) => handleLinkClick(e, index)}
                            >
                                {isMobile && value[index].length > 5
                                    ? value[index].slice(0, 5).concat("..")
                                    : value[index]}
                            </a>
                            <ReactToolTip id={value[index]} place="top" />
                            {index < link.length - 1 && <span className="text-purple-400">, </span>}
                        </span>
                    ))
                }
            </p>
        );
    }

    return (
        <p>
            <span className="text-gray-400 font-bold">{label}: </span>
            {Array.isArray(value) ? (
                value.map((item, index) => (
                    <span key={index}>
                        {item}
                        {index < value.length - 1 && <span className="text-white">, </span>}
                    </span>
                ))
            ) : value}
        </p>
    );
}
