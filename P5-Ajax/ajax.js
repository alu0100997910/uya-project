'use strict'

$("#petajax").click(() => {
    if ($("#postId").val()) {
        $("#content").html(`
        <div class="preloader-wrapper small active">
            <div class="spinner-layer spinner-green-only">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div>
                <div class="gap-patch">
                    <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
            </div>
        </div>`);


        let params = $("#formulario").serialize();
        $.get("https://jsonplaceholder.typicode.com/comments", params, (data) => {
            let texto = `<div><ul class="collapsible">`;
            for (let i in data) {
                texto += `
                    <li>
                        <div class="collapsible-header">ID: ${data[i].id}</div>
                        <div class="collapsible-body left-align">
                            <span>ID: ${data[i].name}</span><br>
                            <span>Email: ${data[i].email}</span><br>
                            <span>Body: ${data[i].body}</span><br>
                        </div>
                    </li>`
            }
            texto += `</ul></div>`;
            $("#content").html(texto);
            
            $(document).ready(function () {
                $('.collapsible').collapsible();
            });
        });
    }
    else {
        $("#content").html(`
        <div class="row">
            <div class="col s10 push-s1">
                <div class="card-panel #b71c1c red darken-4">
                    <span class="white-text">No se ha expecificado postID</span>
                </div>
            </div>
    </div>
        `);
    }
});




/*

*/