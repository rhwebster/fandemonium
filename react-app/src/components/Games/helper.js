function rivalryGame(homeTeam, awayTeam) {
    if (homeTeam === yankees) {
        return (awayTeam === redSox || awayTeam === mets)
    } else if (homeTeam === redSox) {
        return (awayTeam === yankees)
    } else if (homeTeam === rays) {
        return (awayTeam === marlins)
    } else if (homeTeam ===  whiteSox) {
        return (awayTeam === cubs || awayTeam === tigers)
    } else if (homeTeam === tigers) {
        return (awayTeam === whiteSox || awayTeam === indians)
    } else if (homeTeam === indians) {
        return (awayTeam === tigers || awayTeam === reds)
    } else if (homeTeam === royals) {
        return (awayTeam === cardinals)
    } else if (homeTeam === as) {
        return (awayTeam === giants)
    } else if (homeTeam === angels) {
        return (awayTeam === dodgers)
    } else if (homeTeam === rangers) {
        return (homeTeam === astros)
    } else if (homeTeam === astros) {
        return (homeTeam === rangers)
    } else if (homeTeam === mets) {
        return (awayTeam === yankees || awayTeam === phillies || awayTeam === braves)
    } else if (homeTeam === braves) {
        return (awayTeam === mets || awayTeam === phillies || awayTeam === nationals)
    } else if (homeTeam === phillies) {
        return (awayTeam === mets || awayTeam === nationals || awayTeam === braves || awayTeam === pirates)
    } else if (homeTeam === marlins) {
        return (awayTeam === rays)
    } else if (homeTeam === nationals) {
        return (awayTeam === braves || awayTeam === phillies)
    } else if (homeTeam === cubs) {
        return (awayTeam === whiteSox || awayTeam === cardinals || awayTeam === brewers)
    } else if (homeTeam === brewers) {
        return (awayTeam === cubs)
    } else if (homeTeam === cardinals) {
        return (awayTeam === cubs || awayTeam == royals)
    } else if (homeTeam === reds) {
        return (awayTeam === indians)
    } else if (homeTeam === pirates) {
        return (awayTeam === phillies)
    } else if (homeTeam === dodgers) {
        return (awayTeam === padres || awayTeam === angels || awayTeam === giants)
    } else if (homeTeam === padres) {
        return (awayTeam === dodgers)
    } else if (homeTeam === giants) {
        return (awayTeam === dodgers || awayTeam === as)
    } else {
        return false
    }
}