import { useState } from "react";
import App_alert from "../../components/alerts/alerts";



function Formulario() {
    const [txtnombre,setTxtnombre] = useState("")
    const [txtapellido,setTxtapellido] = useState("")
    const [txtrut,setTxtrut] = useState("")
    const [txtDv,setTxtDv] = useState("")
    const [txtfecha,setTxtfecha] = useState("")
    const [txtcorreo,setTxtcorreo] = useState("")
    const [txttelefono,setTxttelefono] = useState("")
    const [txtdireccion,setTxtdireccion] = useState("")
    const [tipoAlerta, setTipoAlerta] = useState("");
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [mensajeAlerta, setMensajeAlerta] = useState("");



    function validarDatos(Nombre, nombre,Apellido,apellido) {
        if (Nombre == ""|| Nombre.length <3 || Nombre.length >=20 ) {          
            setMensajeAlerta("El " + nombre  + " no debe estar vacio y debe tener como maximo 20 caracteres .");
            setTipoAlerta("danger");
            setMostrarAlerta(true);
            return false;
        }else if (Apellido == ""|| Apellido.length <3 || Apellido.length >=20){
            setMensajeAlerta("El" + apellido + "no debe estar vacio y debe tener como maximo 20 caracteres")
        }else{
            return true;
        }
    }   


    function validarRut(Rut,rut,DV,dv) {
        if (Rut == "") {
            setMensajeAlerta("El " + rut + "no puede estar vacio ")
            setTipoAlerta("danger");
            setMostrarAlerta(true);
            return false
        }else if (DV == "" || DV.length >1){
            setMensajeAlerta("El " + dv + "no puede estar vacio y no puede superar 1 caracter")
            setTipoAlerta("danger");
            setMostrarAlerta(true);
            return false;
        }else {
            return true;
        }
        
    }

    function validarFecha(Fecha) {
    
    const anioNac = parseInt(Fecha.substring(0, 4));


    if (isNaN(anioNac)) {
        setMensajeAlerta("La fecha no es valida")
        setTipoAlerta("danger");
        setMostrarAlerta(true);
        return false;
    }
    const anioActual = new Date().getFullYear();
    const maximo = anioActual - 90;
    const minimo = anioActual - 10;

    if (anioNac < maximo ) {
        setMensajeAlerta("Excedes el limite de 90 años de edad")
        setTipoAlerta("danger");
        setMostrarAlerta(true);
        return false;
    }

    if (anioNac > minimo) {
        setMensajeAlerta("Debes tener al menos 10 años para registrarte")
        setTipoAlerta("danger");
        setMostrarAlerta(true);
        return false;
        
    }

    return true;
    
}

    function validarCorreo(Correo,correo) {
        if (Correo == ""||Correo,length <5|| Correo.length >100 ) {
            setMensajeAlerta("El " + correo + "no puede estar vacio y no puede superar los 100 caracteres")
            setTipoAlerta("danger");
            setMostrarAlerta(true);
            return false
        }else {
            return true;
        }

        
    }

    function validartelefono(Telefono,telefono) {
        if (Telefono == ""||Telefono,length <8|| Telefono.length >10 ) {
            setMensajeAlerta("El " + telefono + "no puede estar vacio y no puede superar los 10 caracteres")
            setTipoAlerta("danger");
            setMostrarAlerta(true);
            return false
        }else {
            return true;
        }

        
    }


    function validardireccion(Direccion,direccion) {
        if (Direccion == ""||Direccion,length <5|| Direccion.length >100 ) {
            setMensajeAlerta("La " + direccion + "no puede estar vacio y no puede superar los 100 caracteres")
            setTipoAlerta("danger");
            setMostrarAlerta(true);
            return false
        }else {
            return true;
        }

        
    }


    function guardar() {
        if (validarDatos(txtnombre,"nombre",txtapellido,"apellido") == false) {
            return
            
        }else if (validarRut (txtrut,"rut",txtDv,"dv") == false){
            return

        }else if (validarFecha(txtfecha,"fecha") == false){
            return

        }else if (validarCorreo(txtcorreo,"correo") == false) {
            return

        }else if (validartelefono(txttelefono,"telefono") == false){
            return

        }else if (validardireccion(txtdireccion,"direccion") == false) {
            return
        }else {
            setTipoAlerta("sucess");
            setMostrarAlerta(true);
            console.log("Guardando");
            
        }
        
    }





    return(
        <>
        <App_alert mostrarAlert={mostrarAlerta} cerrarAlert={() => setMostrarAlerta(false)} variant={tipoAlerta} msgAlert={mensajeAlerta}/>
        <div className="row mt-3 mx-3">
            

            <div className="col-12">
                <h1>Formulario</h1>
            </div>

            <div className="col-6">
                <label htmlFor="txtNombre" >Nombre </label>
                <input  onChange ={(e) => setTxtnombre(e.target.value)}type="text" className="form-control" id="txtNombre" />
            </div>

            <div className="col-6">
                <label htmlFor="txtApellido" >Apellido </label>
                <input onChange ={(e) => setTxtapellido(e.target.value)}type="text" className="form-control" id="txtApellido" />
            </div>

            <div className="col-6">
                <label htmlFor="txtRut" >Rut </label>
                <input  onChange ={(e) => setTxtrut(e.target.value)}type="text" className="form-control" id="txtRut" />
            </div>

            <div className="col-6">
                <label htmlFor="txtDv" >Digito Verificador </label>
                <input  onChange ={(e) => setTxtDv(e.target.value)}type="text" className="form-control" id="txtDv" />
            </div>

            <div className="col-6">
                <label htmlFor="txtFecha" >Fecha de Nacimiento </label>
                <input  onChange ={(e) => setTxtfecha(e.target.value)}type="date" className="form-control" id="txtFecha" />
            </div>

            <div className="col-6">
                <label htmlFor="txtCorreo" >Correo Electronico </label>
                <input   onChange ={(e) => setTxtcorreo(e.target.value)}type="text" className="form-control" id="txtCorreo" />
            </div>

            <div className="col-6">
                <label htmlFor="txtTelefono" >Telefono </label>
                <input  onChange ={(e) => setTxttelefono(e.target.value)} type="text" className="form-control" id="txtTelefono" />
            </div>

            <div className="col-6">
                <label htmlFor="txtDireccion" >Direccion </label>
                <input   onChange ={(e) => setTxtdireccion(e.target.value)}type="text" className="form-control" id="txtDireccion" />
            </div>



            <div className="col-12 mt-3">
                    <button  onClick={guardar} className="btn btn-primary">Guardar</button>
                </div>
















        </div>
        
        
        
        
        
        
        </>


    );

    
}

export default Formulario;