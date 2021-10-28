var iprofesor=document.getElementById('cNombre');
var idia=document.getElementById('cDias');
var ihora=document.getElementById('cHora');
var iasignatura=document.getElementById('cAsignatura');


function guardaDatos(){

    var profesor=iprofesor.value;
    var dia=idia.value;
    var hora=ihora.value;
    var asignatura=iasignatura.value;
    if(profesor=='Fernando'&&asignatura=='DWEC'||profesor=='Daniel'&&asignatura=='Despliegue'||profesor=='Marian'&&asignatura=='DWES'||profesor=='Ana Gloria'&&asignatura=='DIW'){
        var clase={
            prof:profesor,
            asig:asignatura,
            day:dia,
            hour:hora
        };    
    
        var a=parseInt(clase.hour);
        var b=parseInt(clase.day);
    
        var tr=a+1;
        var td=b+2;
        var select='tr:nth-of-type('+tr+') td:nth-of-type('+td+')';
        var casilla=document.querySelector(select);
        casilla.innerText=clase.asig;
        casilla.class=clase;
        alert(casilla.class.prof);
        casilla.addEventListener('click',mostrarDatos,false);
    }else{
        alert("No se ha introducido bien el profesor o la asignatura");
    }
    
}


function mostrarDatos(){
    alert(this.class.prof);
    iprofesor.value=this.class.prof;
    iasignatura.value=this.class.asig;
    idia.value=this.class.day;
    ihora.value=this.class.hour;

}