(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('#logar').on('click', function () {
        var check = true;

        /* funcao para validacao de cada input do .input100 */
        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        //caso valido o formulário return false ou aciona a funcao valida_acesso()
        if (check == true){
            valida_acesso()
        }else{
            return false
        }
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

})(jQuery);

function valida_acesso() {
    usuario = $('input[name="username"]').val();
    senha = $('input[name="pass"]').val();

    $.ajax({
        url: "http://localhost:3030/api/user",
        type: "GET",
        //data: JSON.stringify({expression: "testexpression"}),
        success: function(data) {
            if (data.usuario == usuario && data.senha == senha){
                alert("logado porra !!")
            }else{
                alert("usuario ou senha incorreto")
            }
        },
        error: function(error) {
            alert("Algo deu errado com a API", error);
        }
    });

}