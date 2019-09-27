window .onload = () => {
    
    logueado = localStorage .getItem( 'logueado' );
    logueado = JSON .parse( logueado );

    if( logueado ) {
        window .location .replace("./dashboard.html");
    }

    const 
        $buttonLogin = document .getElementById( 'btn-login' ),
        $buttonRegister = document .getElementById( 'btn-register' ),
        users = [
            { "user": "jcarlosj", "pass": "contrasenia", "state": "" },
            { "user": "elimagiraldo", "pass": "contrasenia", "state": "" }
        ];

    localStorage .setItem( 'usuarios', JSON .stringify( users ) );

    $buttonLogin .addEventListener( 'click', ( e ) => {
        e .preventDefault();   
        login();
    });
    $buttonRegister .addEventListener( 'click', ( e ) => {
        e .preventDefault();   
        register();
    });

    let 
        login = _ => {
            let user = document .getElementById( 'user-login' ),
                pass = document .getElementById( 'pass-login' ),
                usuarios = localStorage .getItem( 'usuarios' );

            //console .log( user );
            //console .log( pass );

            usuarios = JSON .parse( usuarios );

            usuarios .forEach( data => {

                if( data .user == user .value ) {
                    if( data .pass == pass .value ) {
                        
                        localStorage .setItem( 'logueado', JSON .stringify( data ) );
                        
                        window .location .replace("./dashboard.html");
                    }
                }
            });
            usuarios = localStorage .getItem( 'usuarios' );
            console .log( usuarios );

            console .log( `Se mantiene en el Home` );
        },
        register = _ => {
            let user = document .getElementById( 'user-register' ),
                pass = document .getElementById( 'pass-register' ),
                usuarios = localStorage .getItem( 'usuarios' ),
                newUser = {
                    user: user .value,
                    pass: pass .value,
                    state: ''
                };

                usuarios = JSON .parse( usuarios );
                usuarios .push( newUser );
                localStorage .setItem( 'usuarios', JSON .stringify( usuarios ) );

            
            alert( 'Registro exitoso!' );
        }


}