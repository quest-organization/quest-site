import { useEffect, useState } from 'react';
import './statusWidget.css';

type Indicator = 'none' | 'minor' | 'major' | 'critical';

interface StatusSummary {
    status: {
        indicator: Indicator;
        description: string;
    };
}

const INDICATOR_CLASS: Record<Indicator, string> = {
    none: 'status-dot--operational',
    minor: 'status-dot--minor',
    major: 'status-dot--major',
    critical: 'status-dot--critical',
};

export function StatusWidget() {
    const [status, setStatus] = useState<StatusSummary['status'] | null>(null);

    const fetchStatus = () => {
        fetch('https://duckorg.statuspage.io/api/v2/summary.json')
            .then(r => r.json())
            .then((data: StatusSummary) => setStatus(data.status))
            .catch(() => setStatus(null));
    };

    useEffect(() => {
        fetchStatus();
        const id = setInterval(fetchStatus, 60_000);
        return () => clearInterval(id);
    }, []);

    if (!status) return null;

    return (
        <a
            href="https://duckorg.statuspage.io"
            target="_blank"
            rel="noopener noreferrer"
            className="status-widget"
            aria-label={`System status: ${status.description}`}
        >
            <span className={`status-dot ${INDICATOR_CLASS[status.indicator] ?? INDICATOR_CLASS.none}`} />
            <span className="status-label">{status.description}</span>
        </a>
    );
}
