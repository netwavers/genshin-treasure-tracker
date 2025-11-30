import { useState, useEffect } from 'react';
import { initialRegions } from '../data/regions';

export const useTracker = () => {
    const [regions, setRegions] = useState(() => {
        const saved = localStorage.getItem('genshin-tracker-data');
        return saved ? JSON.parse(saved) : initialRegions.map(r => ({
            ...r,
            currentChest: 0,
            currentSeelie: 0,
            currentElectro: 0,
            currentTime: 0
        }));
    });

    useEffect(() => {
        localStorage.setItem('genshin-tracker-data', JSON.stringify(regions));
    }, [regions]);

    const updateCount = (id, type, value) => {
        setRegions(prev => prev.map(r => {
            if (r.id !== id) return r;
            return { ...r, [type]: Math.max(0, parseInt(value) || 0) };
        }));
    };

    const addRegion = (newRegion) => {
        setRegions(prev => [...prev, { ...newRegion, currentChest: 0, currentSeelie: 0, currentElectro: 0, currentTime: 0 }]);
    };

    const resetData = () => {
        if (window.confirm('本当にリセットしますか？')) {
            setRegions(initialRegions.map(r => ({
                ...r,
                currentChest: 0,
                currentSeelie: 0,
                currentElectro: 0,
                currentTime: 0
            })));
        }
    };

    return { regions, updateCount, addRegion, resetData };
};
