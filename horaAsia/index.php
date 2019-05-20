<!DOCTYPE HTML>
<html>
    <head>
	<title> Parcial </title>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script language="JavaScript"> 

    function mueveReloj(){ 
        momentoActual = new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo' })
	momentoActual = new Date(momentoActual); 
        hora = momentoActual.getHours() 
        minuto = momentoActual.getMinutes() 
        segundo = momentoActual.getSeconds() 

        horaImprimible = hora + " : " + minuto + " : " + segundo 

        document.form_reloj.reloj.value = horaImprimible 

        //La función se tendrá que llamar así misma para que sea dinámica, 
        //de esta forma:

        setTimeout(mueveReloj,1000)
    }

</script>  
    </head>
        <body onload="mueveReloj()">
	<h1 align="center"> Universidad Pontificia Bolivariana </h1>
	<h3 align="center"> Ricardo Nino y Eider Ojeda </h2>
	<center>
		<img src="https://www.upb.edu.co/es/colegio/imagenes/upb-logo-1422010671195.png">
	</center>
<h3> Hora en Tokyo </h3>
<form name="form_reloj"> 
        <input type="text" name="reloj" size="10"> 
    </form> 
    </body>
</html>
