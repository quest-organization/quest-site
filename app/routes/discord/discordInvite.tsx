import { useEffect } from 'react';

export default function DiscordInvite() {
    useEffect(() => {
        window.location.replace(
            'https://discord.gg/ksuqZ77R88'
        );
    }, []);

    return <p>Redirecting to Discord...</p>;
}
