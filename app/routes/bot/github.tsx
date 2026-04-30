import { useEffect } from 'react';

export default function Invite() {
    useEffect(() => {
        window.location.replace(
            'https://github.com/quest-organization/quest-bot.git'
        );
    }, []);
    
    return <p>Redirecting to Github...</p>;
}