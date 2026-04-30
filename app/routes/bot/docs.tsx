import { useEffect } from 'react';

export default function Invite() {
    useEffect(() => {
        window.location.replace(
            'https://docs.questfoundation.dev/'
        );
    }, []);
    
    return <p>Redirecting to the Docs...</p>;
}