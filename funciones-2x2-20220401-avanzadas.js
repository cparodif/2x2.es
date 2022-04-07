
function IPTD(fun_puesto){
	var f = new Date();
	var m = f.getMonth() + 1;
  var mes = (m < 10) ? '0' + m : m;
  var_dia = f.getDate() + "/" + mes + "/" + f.getFullYear();
	var_diai = f.getFullYear() + "" + mes + "" + f.getDate();
	var var_diamilisegundo = var_diai + ""+f.getHours()+"" +f.getMinutes()+""+f.getMilliseconds();
  if (fun_puesto !=""){
		TEXTO("<td align='center' width='300' height='250' valign='bottom' style='background-image: url(images/fondoLogo.png); background-repeat: no-repeat; '>");
    //TEXTO("<a href='"+urlDestino+"fotojpg.php?fotojpg="+fun_puesto+var_diamilisegundo+"' target='_blank'>");
		TEXTO("<img src='"+urlDestino+"fotojpg.php?fotojpg="+fun_puesto+var_diamilisegundo);
		//TEXTO("' alt='Esperamos que los propietarios de este puesto nos faciliten los precios. ' width='300' border='0'></a><br>" + var_dia +" puesto nº "+fun_puesto+ ".</td>");
		TEXTO("' alt='Esperamos que este puesto facilite los precios de hoy. ' width='300' border='0'><br>" + var_dia +" puesto nº "+fun_puesto+ ".</td>");
	}else{
		TEXTO("<td align='center'>-</td>");
	}
}

function VIDEOTD(par_dia,par_puesto){
	var f = new Date();
	var var_diamilisegundo = par_dia + ""+f.getHours()+"" +f.getMinutes()+""+f.getMilliseconds();
	if (par_puesto !=""){
    TEXTO("<video controls width='300'>");
    //TEXTO("<source src='"+urlDestino+"videomp4.php?videomp4="+fun_puesto+var_diamilisegundo);
		TEXTO("<source src='"+urlDestino+"videos/"+par_puesto+".mp4"+"' type='video/mp4' >");
		//TEXTO("<source src='http://localhost/123abc.es/precios/videos/"+par_puesto+".mp4"+"' type='video/mp4' >");
    TEXTO("Este navegador no implementa la etiqueta video.");
    TEXTO("</video>"+"<br>Video:" + par_dia +" puesto nº "+par_puesto+ ".");
  }else{
	  TEXTO("<td align='center'>-</td>");
  }
}
function VTD(fun_dia,fun_puesto){
  TEXTO("<td align='center' width='300' height='250' valign='top' style='background-image: url(images/fondoLogo.png); background-repeat: no-repeat; '>");
  VIDEOTD(fun_dia,fun_puesto);
	TEXTO("</td>");
}

function TX($parNumFilas,contenidoPrecios){
	TEXTO("<td rowspan='"+$parNumFilas+"' width='300' height='250' align='left'  valign='top'>");
	TEXTO(unescape(contenidoPrecios));
	TEXTO("</td> ");
}