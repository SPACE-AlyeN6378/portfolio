function getTimeline(releaseDate) {
    let currentYear = new Date().getFullYear();
    
    if (releaseDate == currentYear) {
        return `${currentYear}`;
    }
    else {
        return `${releaseDate}-${currentYear}`;
    }
}

const footerElement = document.querySelector('footer');
footerElement.innerHTML = `© ${getTimeline(2023)} Aly Mooltazeem. All rights reserved.`;