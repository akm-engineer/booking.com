import React, { useState, useEffect } from 'react';

interface AdPageProps {
    onClose: () => void;
}

const AdPage: React.FC<AdPageProps> = ({ onClose }) => {
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCount) => prevCount - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (countdown === 0) {
            onClose();
        }
    }, [countdown, onClose]);

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-80">
                <h1 className="text-2xl font-bold mb-4">Advertisement</h1>
                <p className="mb-4">Enjoy our special offer!</p>
                <p>Redirecting in {countdown} seconds...</p>
                <button
                    onClick={onClose}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default AdPage;
