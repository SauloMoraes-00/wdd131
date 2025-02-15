// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.hero input');
    const gameCards = document.querySelectorAll('.listing-card');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();

        gameCards.forEach(card => {
            const gameName = card.querySelector('h3').textContent.toLowerCase();
            if (gameName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("show");
});


// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.cta-button');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Login / Sign Up</h2>
            <form>
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="Password" required>
                <button type="submit">Submit</button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);

    loginButton.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    modal.querySelector('.close-modal').addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const listingsGrid = document.querySelector('.listings-grid');

    // Example data (can be replaced with an API call)
    const games = [
        { name: "Dungeons & Dragons", host: "John Doe", location: "Online", slots: "3/5" },
        { name: "Catan", host: "Jane Smith", location: "Local Cafe", slots: "1/4" },
    ];

    games.forEach(game => {
        const card = document.createElement('div');
        card.classList.add('listing-card');
        card.innerHTML = `
            <h3>${game.name}</h3>
            <p>Host: ${game.host}</p>
            <p>Location: ${game.location}</p>
            <p>Slots Available: ${game.slots}</p>
            <button type="submit" class="cta-button">Join Game</button>
        `;
        listingsGrid.appendChild(card);
    });
});

// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.modal-content form');

    form.addEventListener('submit', function (event) {
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;

        if (!email || !password) {
            alert('Please fill out all fields.');
            event.preventDefault();
        }
    });
});

// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button');
    const gameCards = document.querySelectorAll('.listing-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = button.dataset.category;

            gameCards.forEach(card => {
                const gameCategory = card.dataset.category;
                if (category === 'all' || gameCategory === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});