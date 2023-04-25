function timeDifference(current, previous) {
    const millisecondsPerMinute = 60 * 1000;
    const millisecondsPerHour = millisecondsPerMinute * 60;
    const millisecondsPerDay = millisecondsPerHour * 24;
    const millisecondsPerMonth = millisecondsPerDay * 30;
    const millisecondsPerYear = millisecondsPerDay * 365;

    const elapsed = current - previous;

    if(elapsed < millisecondsPerMinute / 3) {
        return 'just now';
    }
    if(elapsed < millisecondsPerMinute) {
        return 'less than 1 min ago';
    }
    if(elapsed < millisecondsPerHour) {
        return (
            Math.round(elapsed / millisecondsPerMinute) +
            ' min ago'
        );
    }
    if(elapsed < millisecondsPerDay) {
        return (
            Math.round(elapsed / millisecondsPerHour) +
            ' h ago'
        );
    }
    if(elapsed < millisecondsPerMonth) {
        return (
            Math.round(elapsed / millisecondsPerDay) +
            ' days ago'
        );
    }
    if(elapsed < millisecondsPerYear) {
        return (
            Math.round(elapsed / millisecondsPerMonth) +
            ' mo ago'
        );
    }

    return (
        Math.round(elapsed / millisecondsPerYear) +
        ' year ago'
    );
}

export function timeDifferenceForDate(date) {
    const now = new Date().getTime();
    const updated = new Date(date).getTime();
    return timeDifference(now, updated);
}