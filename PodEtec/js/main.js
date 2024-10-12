console.log('Página do podcast carregada com sucesso.');

const toggleThemeButton = document.getElementById('toggle-theme');
const bodyElement = document.body;

const darkThemeStyles = {
    '--background-color': '#000000', 
    '--text-color': '#FFFFFF',       
    '--card-background': '#4B0082',  
    '--primary-color': '#4B0082',    
    '--primary-color-hover': '#6A0DAD', 
    '--title-color': '#FFFFFF',      
};

const lightThemeStyles = {
    '--background-color': '#FFFFFF', 
    '--text-color': '#000000',       
    '--card-background': '#F8F9FA',  
    '--primary-color': '#6A0DAD',    
    '--primary-color-hover': '#4B0082', 
    '--title-color': '#6A0DAD',      
};


function applyTheme(styles) {
    for (let property in styles) {
        if (styles.hasOwnProperty(property)) {
            document.documentElement.style.setProperty(property, styles[property]);
        }
    }
}


window.onload = function() {
    const savedTheme = localStorage.getItem('theme') || 'light'; 
    bodyElement.dataset.theme = savedTheme; 
    applyTheme(savedTheme === 'dark' ? darkThemeStyles : lightThemeStyles);
    console.log('Tema atual:', savedTheme);
};


toggleThemeButton.addEventListener('click', () => {
    const currentTheme = bodyElement.dataset.theme;
    if (currentTheme === 'dark') {
        applyTheme(lightThemeStyles);
        bodyElement.dataset.theme = 'light';
        localStorage.setItem('theme', 'light'); 
    } else {
        applyTheme(darkThemeStyles);
        bodyElement.dataset.theme = 'dark';
        localStorage.setItem('theme', 'dark'); 
    }
});


function linkarPagina() {
    window.location.href = "episodios.html";
}
