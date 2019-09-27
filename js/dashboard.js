window .onload = () => {

    const 
        $divWelcome = document .getElementById( 'welcome' ),
        $buttonLogin = document .getElementById( 'btn-sign-in' );

        logueado = localStorage .getItem( 'logueado' );
        logueado = JSON .parse( logueado );

        if( logueado ) {
            $divWelcome .appendChild( document .createTextNode( `Bienvenido ${ logueado .user }` ) );
        }
        else {
            window .location .replace("./index.html");
        }

    $buttonLogin .addEventListener( 'click', ( e ) => {
        e .preventDefault();   
        signin();
    });

    let 
        signin = _ => {
            localStorage .removeItem( 'logueado' );
            
            window .location .replace("./index.html");
        }
    
}