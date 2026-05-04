import { useEffect } from 'react';

export default function DiscordInvite() {
    useEffect(() => {
        window.location.replace(
            'https://discord.gg/F4HYE8frK2'
        );
    }, []);

    return <p>Redirecting to Discord...</p>;
}
