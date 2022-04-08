function TEXTO(s){
	document.write(s);
}

function MARGEN() {
	TEXTO(" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ");
}

function TITULO(s) {
TEXTO("<br><h1>"+s+"</h1>");
}

function CAPITULO(s) {
cuentaCapitulo+=1;
cuenta=0;	
TEXTO("<br><h2>"+cuentaCapitulo+".- "+s+"</h2>");
}
function SUBCAPITULO(s) {
	cuenta+=1;
	TEXTO('<h3>'+cuentaCapitulo+'.'+cuenta+" "+s+'</h3>');
}
function LINEA(s) {
TEXTO(s+"<br>");
}

function LINKPPAL(fun_description, fun_url) {
	cuenta+=1;
	TEXTO('<br>'+'<a href="'+fun_url+'" target="_blank"> <b>'+cuentaCapitulo+'.'+cuenta+" "+fun_description+'</b></a><br><br>');
}

function LINK(fun_description,fun_url) {
	TEXTO('<br>-><a href="'+fun_url+'" target="_blank">'+fun_description+'</a><br>');
}
function DOCUMENTO(doc_description,doc_url,doc_extension,doc_tamanio,doc_ampliacion) {
	TEXTO('<br>-><a href="documentos/'+doc_url+doc_extension+'" target="_blank">'+doc_description+'</a> ('+doc_extension+', '+doc_tamanio+' ). '+doc_ampliacion+'<br>');
}
function TELEF(fun_tel) {
 	TEXTO('<a href="tel:'+fun_tel+'" >Tel: <b>'+fun_tel+'</b></a><br>');
}

function TDIMG3(fun_txt,fun_img){
	if (fun_img !=""){
		TEXTO("<td align='center'  valign='top' width='300' height='250'>");
		TEXTO("<img src='images/images400"+fun_img);
		TEXTO("' width='300' border='1'><br>Imagen: "+fun_txt+"</td>");
	}else{
		TEXTO("<td align='center'  valign='top' width='300' height='250'>");
		TEXTO("<img src='images/noHayImagen.jpg");
		TEXTO("' width='300' border='1'><br>Mercado Central de Cádiz </td>");
  }
}
function TDIMG9(fun_txt,fun_img){
	if (fun_img !=""){
		TEXTO("<td align='center'  valign='top' width='900' colspan='3'>");
		TEXTO("<img src='images/images900"+fun_img);
		TEXTO("' width='900' border='1'><br>Imagen: "+fun_txt+"</td>");
	}
}
function IMAGEN(descripcion_img,archivo_img){
	if (archivo_img !=""){
		TEXTO("<br>");
		MARGEN();
		TEXTO("<img src='images/"+archivo_img+"'  width='560' border='1'>");
		TEXTO("<br>");
		MARGEN();
		TEXTO(descripcion_img+"<br>");
	}
}

function IMG6(fun_txt,fun_img){
	if (fun_img !=""){
		TEXTO("<br><img src='images/images600"+fun_img);
		TEXTO("' width='600' border='1'><br>Imagen: "+fun_txt);
	}
}
function PARRAFO(fun_txt){
  MARGEN();
 	TEXTO(fun_txt+"<br>");
}

function TABLAINI(){
	PARRAFO("Los precios que aparecen en estas fotos pueden no estar actualizados. Cambian diaríamente. Fíjese en las fechas de las imágenes.");
  PARRAFO("Puestos abiertos al público de lunes a viernes de 9:00 a 14:00 horas y sábados de 9:00 a 15:00.");
	TEXTO("<table>");
	TEXTO("<tr >");
}

function TABLATR(){
	TEXTO("</tr><tr>");
}

function TABLAFIN(){
	TEXTO("</tr><tr><td><hr></td> <td><hr></td> <td><hr></td> </tr></table><br>");
}

function YOUTUBE(url_description, id_url_video){
	TEXTO("<br>");
	MARGEN();
	TEXTO('-><a href=https://youtu.be/"'+id_url_video+'" target="_blank">'+url_description+'</a><br>');
	PARRAFO('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+id_url_video+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ');
	TEXTO("<br>");
}
