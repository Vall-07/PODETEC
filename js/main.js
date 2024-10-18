console.log('Página do podcast carregada com sucesso.');

const toggleThemeButton = document.getElementById('toggle-theme');
const bodyElement = document.body;

const darkThemeStyles = {
    '--background-color': '#001430', 
    '--text-color': '#FFFFFF',       
    '--card-background': '#CF0000',  
    '--primary-color': '#CF0000',    
    '--primary-color-hover': '#CF0000', 
    '--title-color': '#FFFFFF',      
};

const lightThemeStyles = {
    '--background-color': '#FFFFFF', 
    '--text-color': '#001430',       
    '--card-background': '#F8F9FA',  
    '--primary-color': '#CF0000',    
    '--primary-color-hover': '#CF0000', 
    '--title-color': '#CF0000',      
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

function contatopagina() {
    window.location.href = "contato.html";
}
function homePagina(){
    window.location.href = "index.html";
}
