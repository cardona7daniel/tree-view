/**
 * Created by ldcardona on 18/10/2016.
 */


$(function () {



        var sw=0, a=0;
        $.getJSON("package.json", function (json) {
            $.each(json.informacion, function (i, v) {

                $('.b1').click(function () {
                    alert("dasdasd")
                    if(sw==0){
                        $('.f1').append($('<div class="f2"><ul><li class="frutas"><button class="b2">+</button>'+v.id+'</li></ul></div>'))

                        sw=1;
                    }else{
                        if(sw==1){
                            $('.frutas').slideToggle();
                        }
                    }

                    $('.b2').click(function () {
                        if (a == 0) {
                            $('.f2').find('li').append($('<ul><li class="fru">' + v.Frutas[0].Nombre + '</li>' +
                                '<li class="fru">' + v.Frutas[1].Nombre + '</li>' +
                                '<li class="fru">' + v.Frutas[2].Nombre + '</li>' +
                                '<li class="fru">' + v.Frutas[3].Nombre + '</li></ul>'))

                            a = 1;
                        } else {
                            if (a == 1) {
                                $('.fru').slideToggle();
                            }
                        }

                    })
                })



            });

        });

})

































            // $('.b1').click(function () {
            //     if(sw==0){
            //         $('.f1').append($('<div class="f2"><ul><li class="frutas"><button class="b2">+</button>'+v.frutas+'</li></ul></div>'))
            //
            //         sw=1;
            //     }
            //     // else{
            //     //     if(sw==1){
            //     //         $('.frutas').slideToggle();
            //     //     }
            //     // }
            //
            //     $('.b2').click(function () {
            //         if (a == 0) {
            //             $('.f2').find('li').append($('<ul>' +
            //                 '<li class="fru">' + v.Frutas[0].Nombre + '</li>' +
            //                 '<li class="fru">' + v.Frutas[1].Nombre + '</li>' +
            //                 '<li class="fru">' + v.Frutas[2].Nombre + '</li>' +
            //                 '<li class="fru">' + v.Frutas[3].Nombre + '</li></ul>'));
            //
            //             a = 1;
            //         }
            //         // else {
            //         //     $('.fru').slideToggle();
            //         // }
            //
            //     })
            //
            //
            //
            //
            //
            //
            // })










    // var frutas = JSON.parse('{"nombre":"manzana","cantidad": 3}');
    // console.log(frutas.cantidad);


    // $.getJSON("package.json", function (json) {
    //     console.log(json.Informacion[0].Deportes[0].Nombre);
    //     // console.log(json.Informacion[0].Deportes[1].Nombre)
    //
    //     // var lista=informacion
    //     //
    //     //
    //     // $('section').append(lista)
    //
    // });


    // $('.b1').click(function () {
    //     $('.f2 ').slideToggle();
    // });
    //
    // $('.b2').click(function () {
    //     $('.f3 ').slideToggle();
    // });


    // var informacion=`<ul>
    //     <li class="informacion">
    //         <input type="checkbox"/>
    //         Informacion
    //
    //         <ul>
    //             <li class="frutas"><input type="checkbox"/> :Frutas:
    //
    //                 <ul>
    //                     <li><input type="checkbox"/>:Nombre:</li>
    //                     <li><input type="checkbox"/>:Color:</li>
    //                 </ul>
    //             </li>
    //
    //             <li class="animales"><input type="checkbox"/>:Animales:
    //                 <ul>
    //                     <li><input type="checkbox"/>:Nombre:</li>
    //                     <li><input type="checkbox"/>:Sonido:</li>
    //                 </ul>
    //             </li>
    //             <li class="deportes"><input type="checkbox"/>:Deportes:
    //                 <ul>
    //                     <li><input type="checkbox"/>:Nombre: </li>
    //                     <li><input type="checkbox"/>:Herramienta:</li>
    //                 </ul>
    //             </li>
    //         </ul>
    //
    //     </li>
    // </ul>`;














