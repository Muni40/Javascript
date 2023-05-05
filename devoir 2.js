Equation du second degré: 
    
    
    let x1,x2;
    let a = 10;
    let b = 8;
    let c = 1;

    let delta = ( ( b * b ) - ( 4 * a * c ) );
    console.log( "Delta=" + delta );

    if ( delta > 0 )
     {
        x1 = ( -b + Math.sqrt( delta ) ) / ( 2 * a );
        x2 = ( -b - Math.sqrt( delta ) ) / ( 2 * a );
        console.log( "Les racines de l'équation sont: x1 = " + x1.toFixed( 2 ) + ", x2 = " + x2.toFixed( 2 ) );
    }
    else if ( delta < 0 )
    {
        console.log( "impossible" );                                                }
    else{
        x1 = x2 = -b / ( 2 * a );
        console.log( "X1=X2=" + x2 );  
    }



--------------------------------------------------------------------------------------------------------------------------------------------------

    Table de Multiplication de 5 (pairs)
    for (i=0 ;i<=100;i+=2){          
    result = i * 5 ;
    console.log("5*" +i+ "=" +result)
    }

    Table de multiplication de 5 (impairs)
    for (i=0 ;i<100;i+=2){                                                                    
    result = i * 5 ;
    console.log("5*" +(i+1)+ "=" +result)
    }