import { useEffect } from 'react';

export default function Invite() {
    useEffect(() => {
        window.location.replace(
            'https://docs.duckorg.com/'
        );
    }, []);
    
    return <p>Redirecting to the Docs...</p>;
}