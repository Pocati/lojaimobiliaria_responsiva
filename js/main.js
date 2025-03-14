$(document).ready(function(){
    $('#carrossel').slick({
        autoplay: true
    }, 0.5
    )

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle()

    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })

    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem:{
                required: true
            },
            veiculoDeInteresse:{
                required: false,
            }
        },
        messages: {
            nome:'Por favor insira o seu nome.'
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos em branco.`)
            }
        }
    })

    $('#button-form').click(function(){
        const destino = $('#contato')

        const nomeImovel = $(this).parent().find('h3').text()

        $('#imovelDeInteresse').val(nomeImovel)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

})