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
        if (Nombre.trim() == ""|| Nombre.trim().length <3 || Nombre.trim().length >=20 ) {          
            setMensajeAlerta("El " + nombre  + " no debe estar vacio y debe tener como maximo 20 caracteres .");
            setTipoAlerta("danger");
            setMostrarAlerta(true);
            return false;
        }else if(Apellido.trim() == ""|| Apellido.trim().length <3 || Apellido.trim().length >=20){
            setMensajeAlerta("El " + apellido + " no debe estar vacio y debe tener como maximo 20 caracteres")
            setTipoAlerta("danger");
            setMostrarAlerta(true);
            return false
        }else{
            return true;
        }
    }   


    function validarRut(Rut, rut, DV, dv) {


        const valido = DV.toUpperCase();

        const verificador = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "K"]
        if (Rut.trim() == "") {
            setMensajeAlerta("El " + rut + " no puede estar vacio ")
            setTipoAlerta("danger");
            setMostrarAlerta(true);
            return false
        } else if (DV.trim() == "" || DV.trim().length > 1 || !verificador.includes(valido)) {
            setMensajeAlerta("El " + dv + " no puede estar vacio y no puede superar 1 caracter y debe ser dentro de un rango de 1 a 9 o la letra K")
            setTipoAlerta("danger");
            setMostrarAlerta(true);
            return false;
        } else {
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
        if (Correo == ""||Correo.trim().length <5|| Correo.trim().length >100 ) {
            setMensajeAlerta("El " + correo + " no puede estar vacio y no puede superar los 100 caracteres")
            setTipoAlerta("danger");
            setMostrarAlerta(true);
            return false
        }else {
            return true;
        }

        
    }

    function validartelefono(Telefono,telefono) {
        if (Telefono == ""||Telefono.trim().length <8|| Telefono.trim().length >10 ) {
            setMensajeAlerta("El " + telefono + " no puede estar vacio y no puede superar los 10 caracteres")
            setTipoAlerta("danger");
            setMostrarAlerta(true);
            return false
        }else {
            return true;
        }

        
    }


    function validardireccion(Direccion,direccion) {
        if (Direccion == ""||Direccion.trim().length <5|| Direccion.trim().length >100 ) {
            setMensajeAlerta("La " + direccion + " no puede estar vacio y no puede superar los 100 caracteres")
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
            setMensajeAlerta("Registro Exitoso!!!")
            setTipoAlerta("success");
            setMostrarAlerta(true);
            console.log("Guardando");


            setTxtnombre("");
            setTxtapellido("");
            setTxtrut("");
            setTxtDv("");
            setTxtfecha("");
            setTxtcorreo("");
            setTxttelefono("");
            setTxtdireccion("");
            
        }
        
    }





    return(
        <>
        <App_alert mostrarAlert={mostrarAlerta} cerrarAlert={() => setMostrarAlerta(false)} variant={tipoAlerta} msgAlert={mensajeAlerta}/>
        <div className="row mt-3 mx-3">
            

            <div className="col-12 text-center mb-2">
                <h1>Formulario</h1>
                <p>Ingrese sus datos</p>
            </div>

            <div className="col-6">
                <label htmlFor="txtNombre" >Nombre </label>
                <input  onChange ={(e) => setTxtnombre(e.target.value)}type="text" className="form-control" id="txtNombre" placeholder="Moka" value={txtnombre} />
            </div>

            <div className="col-6">
                <label htmlFor="txtApellido" >Apellido </label>
                <input onChange ={(e) => setTxtapellido(e.target.value)}type="text" className="form-control" id="txtApellido" placeholder="Sakai" value={txtapellido}/>
            </div>

            <div className="col-6">
                <label htmlFor="txtRut" >Rut </label>
                <input  onChange ={(e) => setTxtrut(e.target.value)}type="text" className="form-control" id="txtRut" placeholder="20.162.535" value={txtrut}/>
            </div>

            <div className="col-6">
                <label htmlFor="txtDv" >Digito Verificador </label>
                <input  onChange ={(e) => setTxtDv(e.target.value)}type="text" className="form-control" id="txtDv" placeholder="1-9-K" value={txtDv} />
            </div>

            <div className="col-6">
                <label htmlFor="txtFecha" >Fecha de Nacimiento </label>
                <input  onChange ={(e) => setTxtfecha(e.target.value)}type="date" className="form-control" id="txtFecha" value={txtfecha} />
            </div>

            <div className="col-6">
                <label htmlFor="txtCorreo" >Correo Electronico </label>
                <input   onChange ={(e) => setTxtcorreo(e.target.value)}type="text" className="form-control" id="txtCorreo" placeholder="mokasakai1234@gmail.com" value={txtcorreo}/>
            </div>

            <div className="col-6">
                <label htmlFor="txtTelefono" >Teléfono </label>
                <input  onChange ={(e) => setTxttelefono(e.target.value)} type="text" className="form-control" id="txtTelefono" placeholder="912341256" value={txttelefono}/>
            </div>

            <div className="col-6">
                <label htmlFor="txtDireccion" >Direccion </label>
                <input   onChange ={(e) => setTxtdireccion(e.target.value)}type="text" className="form-control" id="txtDireccion" placeholder="Avenida Siempre Viva" value={txtdireccion} />
            </div>



            <div className="col-12 mt-3">
                    <button  onClick={guardar} className="btn btn-primary">Guardar</button>
                </div>
















        </div>
        
        
        
        
        
        
        </>


    );

    
}

export default Formulario;