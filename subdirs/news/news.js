function news2() {
    location.href = "articles/sad ghost/sad-ghost.html"
}

function news3() {
    location.href = "articles/discord down/discord-down.html"
    sessionStorage.setItem("clickedhome", false)
}

function news1() {
    location.href = "articles/hired/hired.html" 
}

function news_date() {
    let current_date = new Date();
    let created_date = new Date("2023-09-29");
    let current_year = current_date.getFullYear();
    let created_year = created_date.getFullYear();

    let formatted_date = created_date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById('news_date').textContent = `News as of ${formatted_date}`;

    let date_number = Number(current_date) - Number(created_date);
    let days_temp = Math.floor(date_number / 86400000);
    let days = 0;
    let months = 0;
    let years = 0;
    
    while (days_temp > 365) {
        days_temp -= 365
        years += 1  
    }
    while (days_temp > 30) {
        days_temp -= 30
        months += 1
    }

    days = days_temp
    if ( months > 1 ) { // is it outdated?
        document.getElementById('news_date').textContent += ` (Outdated by ${years} years, ${months} months, ${days} days)`;
    }
}

news_date();