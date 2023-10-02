/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');

        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }

    };

    //Red color on menu toggle function
    var removeRed = function () {

        const btnMenu = document.body.querySelector('#btnMenu');
        if (btnMenu.ariaExpanded === 'true') {
            btnMenu.classList.add('vermelho');
        } else {
            btnMenu.classList.remove('vermelho');
        }   
    }

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
    document.addEventListener('click', removeRed);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    document.getElementById('contactForm').addEventListener('submit', function (e) {
        var email = document.getElementById('email');
        var nome = document.getElementById('nome');
        var telefone = document.getElementById('telefone');
        var mensagem = document.getElementById('mensagem');
        e.preventDefault();

        Email.send({
            SecureToken : "55c86a1d-3c38-42fe-934d-bf51b6f299fe",
            To : "pcnmontagens@gmail.com",
            From : "pcnmontagens@gmail.com",
            Subject : "Mensagem de " + nome.value,
            Body : "Nome: " + nome.value + "<br/>" + "Email: " + email.value + "<br/>" + "Telefone: " + telefone.value + "<br/>" + "Mensagem: " + mensagem.value + "<br/>"
        }).then(function(message) {
            if (message == 'OK') {
                alert('Sua mensagem foi enviada com sucesso!');
            } else {
                alert('Sua mensagem não foi enviada, tente novamente!');
            }
        });
    });
//To : email.value,
});
