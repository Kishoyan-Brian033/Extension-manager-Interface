
document.addEventListener('DOMContentLoaded', function() {
   
    const themeToggle = document.querySelector('.theme');
    const sunIcon = document.querySelector('.theme img');
    const body = document.body;
    const main = document.querySelector('.main');
    const header = document.querySelector('header');
    const cards = document.querySelectorAll('.card-item');
    const toggleIcons = document.querySelectorAll('.fa-toggle-off, .fa-toggle-on');
    const filterButtons = document.querySelectorAll('.actions li');
   
    let isDarkMode = true;
    applyTheme(isDarkMode);

    themeToggle.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        applyTheme(isDarkMode);
        updateThemeIcon();
    });
    
    function applyTheme(darkMode) {
        if (darkMode) {
            body.style.backgroundColor = 'var(--Neutral-900)';
            main.style.background = 'var(--Neutral-900)';
            header.style.backgroundColor = 'var(--Neutral-700)';
            
            cards.forEach(card => {
                card.style.backgroundColor = 'var(--Neutral-700)';
            });
            
         
            document.querySelectorAll('h2, p, span, a').forEach(element => {
                element.style.color = element.tagName === 'H2' || element.tagName === 'A' ? 
                    'var(--Neutral-200)' : 
                    'var(--Neutral-300)';
            });

            document.querySelectorAll('button').forEach(button => {
                button.style.borderColor = 'var(--Neutral-200)';
                button.style.color = 'var(--Neutral-200)';
            });
        } else {
            body.style.backgroundColor = 'var(--Neutral-300)';
            main.style.background = 'var(--Neutral-300)';
            header.style.backgroundColor = 'var(--Neutral-0)';
            
        
            cards.forEach(card => {
                card.style.backgroundColor = 'var(--Neutral-0)';
            });
            
            document.querySelectorAll('h2, p, span').forEach(element => {
                element.style.color = element.tagName === 'H2' || element.tagName === 'N' ? 
                    'var(--Neutral-800)' : 
                    'var(--Neutral-600)';
            });

            document.querySelectorAll('li').forEach(li =>{
                 li.style.backgroundColor= 'var(--Neutral-0)';
                 li.style.color = 'var(--Neutral-900)';
                 
            })
            
            document.querySelectorAll('button').forEach(button => {
                // button.style.borderColor = 'var(--Neutral-0)';
                button.style.color = 'var(--Neutral-900)';
                button.style.border = '2px solid var(--Neutral-800)';
            });
        }
    }
    
    function updateThemeIcon() {
        if (isDarkMode) {
            sunIcon.src = './assets/images/icon-sun.svg';
            sunIcon.alt = 'Light mode';
        } else {
            sunIcon.src = './assets/images/icon-moon.svg';
            sunIcon.alt = 'Dark mode';
        }
    }
    document.querySelectorAll('.fa-toggle-off, .fa-toggle-on').forEach(icon => {
        icon.addEventListener('click', function() {
            const card = this.closest('.card-item');
            if (this.classList.contains('fa-toggle-off')) {
                this.classList.remove('fa-toggle-off');
                this.classList.add('fa-toggle-on');
                card.classList.add('active');
            } else {
                this.classList.remove('fa-toggle-on');
                this.classList.add('fa-toggle-off');
                card.classList.remove('active');
            }
        });
    });
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          
            filterButtons.forEach(btn => btn.classList.remove('active'));
           
            this.classList.add('active');
            
            const filter = this.textContent.trim();
            filterCards(filter);
        });
    });
    
    function filterCards(filter) {
        cards.forEach(card => {
            const isActive = card.querySelector('.fa-toggle-on') !== null;
            
            switch(filter) {
                case 'All':
                    card.style.display = 'block';
                    break;
                case 'Active':
                    card.style.display = isActive ? 'block' : 'none';
                    break;
                case 'Inactive':
                    card.style.display = isActive ? 'none' : 'block';
                    break;
            }
        });
    }
  
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card-item');
            card.remove();
        });
    });
});