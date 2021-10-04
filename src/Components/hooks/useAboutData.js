import { useEffect } from 'react';
import { useState } from 'react';

const useAboutData = () => {
    const [aboutData, setAboutData] = useState([]);
    useEffect(() => {
        fetch('Aboutdata.JSON')
            .then(res => res.json())
            .then(data => setAboutData(data))

    }, [])
    return [aboutData];
};

export default useAboutData;