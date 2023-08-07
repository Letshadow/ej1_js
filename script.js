/*Inicializar Variables*/
let ACP = document.getElementById("AcP");/*Acordeon*/
let Modaldiv =document.getElementById("Input");
let modalbody = document.getElementById("InputContent");/*Label-modal-Title*/
let LabelM = document.getElementById("InputLabel");/*Label-modal*/
let gobt = document.getElementById("gom");/*BTN-fun-modal*/
let gomBt = document.getElementById("ModalBt");
let Lastmodaltemplate=["Selecciona un ejercicio",0]
let Lastf = CloseM;

let endf = false;
/*DATA*/

/*[[titulo,descripcion,modaltemplate,fun-btn-go],[]]*/
const EJJS = [
    [
    "Espejito Espejito",
    "Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.",
    function(){
        Lastmodaltemplate = [
        `¿Eres bellisimo/a?<br>
        <input id="InputU" type="text" name="" ></input>`,
        1];
        setmodal(Lastmodaltemplate[0],Lastmodaltemplate[1]);
        AutoFocusModal("InputU");
    },
    function () {

        if (aplanar(document.getElementById("InputU").value)=="si") {
            setmodal("Ciertament 😍",0);
        } else {
            setmodal("No te creo 🤨",0);
        }
        AutoFocusModal("gom");
    }    
    ],
    [
    "Nones",
    "Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”",
    function(){  
        Lastmodaltemplate = [
            `Digita un numero:<br>
            <input id="InputU" type="number" name="" ></input>`,
            2];
        setmodal(Lastmodaltemplate[0],Lastmodaltemplate[1]);
        AutoFocusModal("InputU");
    },
    function (){
        let num=document.getElementById("InputU").value;
        if (num%2==0) {
            setmodal(num+" es divisible entre 2",0);
        } else {
            setmodal(num+" no es divisible entre 2",0);
        }
        AutoFocusModal("gom");        
    }
    ],
    [
    "Nones 2.0",
    "Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.",
    function(){  
        Lastmodaltemplate = [
            `Mira arriba`,
            3];
        setmodal(Lastmodaltemplate[0],Lastmodaltemplate[1]);
    },
    function (){
        var num=parseInt(prompt("Ingrese un numero"));
        pru(num)
        if (Number.isInteger(num)){   
            if (num%2==0) {
                alert("PAR");
            } else {
                alert("INPAR");
            }          
        } else{
            alert("Tiene que ingresar un valor numerico");
        }
        setmodal("Fin de ejecucion",0);
    }
    ],
    [
    "Concurso",
    "Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.",
    function(){  
        Lastmodaltemplate = [
            `Digita un número de cliente:<br>
            <input id="InputU" type="number" name="" ></input>`,
            4];
        setmodal(Lastmodaltemplate[0],Lastmodaltemplate[1]);
        AutoFocusModal("InputU");
    },
    function (){
        if (document.getElementById("InputU").value==1000) {
            setmodal("🥳 Ganaste un premio 🎉",0);
        } else {
            setmodal("Lo sentimos, sigue participando 😅",0);
        }
        AutoFocusModal("gom"); 
    }
    ],
    [
    "El Menor",
    "Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.",
    function(){  
        Lastmodaltemplate=[
            `Digita un numero:<br>
            <input id="InputU1" type="number" name="" ></input>
            <br>
            Digita otro numero:<br>
            <input id="InputU2" type="number" name="" ></input>`,
            5];
        setmodal(Lastmodaltemplate[0],Lastmodaltemplate[1]);
        AutoFocusModal("InputU1");
    },
    function (){
        let num1 = document.getElementById("InputU1").value;
        let num2 = document.getElementById("InputU2").value
        let aux = "Menor numero es: ";

        if (num1=="" || num2=="") {  
            setmodal("⚠ NO ingresaste valores<br>"+Lastmodaltemplate[0],Lastmodaltemplate[1]);
        } else {            
            if (num1<num2) {
                setmodal(aux+num1,0);
            } else {
                setmodal(aux+num2,0);
            }
        }
        AutoFocusModal("gom");
    }
    ],
    [
    "El Mayor",
    "Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.",
    function(){  
        Lastmodaltemplate=[
            `Digita un numero:<br>
            <input id="InputU1" type="number" name="" ></input>
            <br>
            Digita otro numero:<br>
            <input id="InputU2" type="number" name="" ></input>
            <br>
            Digita un numero mas:<br>
            <input id="InputU3" type="number" name="" ></input>`,
            6];
        setmodal(Lastmodaltemplate[0],Lastmodaltemplate[1]);
        AutoFocusModal("InputU1");
    },
    function (){
        let num1 = document.getElementById("InputU1").value;
        let num2 = document.getElementById("InputU2").value
        let num3 = document.getElementById("InputU3").value
        let aux = "El numero Mayor es: ";

        if (num1=="" || num2=="" || num3=="") {  
            setmodal("⚠ NO ingreso valores<br>"+Lastmodaltemplate[0],Lastmodaltemplate[1]);
        } else {
            var x = [num1,num2,num3];
            unique = count(x);
            var mayor = [...unique.keys()].max();
            var repeat = [...unique.values()].max();
            if (repeat>1) {
                setmodal(aux+mayor+"<br>"+"⚠ Repetiste un valor "+repeat+" Veces!",0);
            } else {
                setmodal(aux+mayor,0);
            }

            
        }
        AutoFocusModal("gom");

    }
    ],
    ["Agenda semanal",
    "Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.",
    function(){  
        Lastmodaltemplate=[
            `<label for="InputU" class="form-label">Selecciona un dia de la semana:</label>
            <select id="InputU" class="form-select">
                <option>Lunes</option>
                <option>Martes</option>
                <option>Miercoles</option>
                <option>Jueves</option>
                <option>Viernes</option>
                <option>Sabado</option>
                <option>Domingo</option>
            </select>`,
            7];
        setmodal(Lastmodaltemplate[0],Lastmodaltemplate[1]);
        AutoFocusModal("InputU");
    },
    function (){
        let agenda={
            "lunes":"📚 Clase Ingles 🗣",
            "viernes":"📚 Clase Habilidades Socioemocionales 👥",
            "sabado": "📚 Clase Programacion 💻",
            "domingo": "📚 Clase Programacion 💻"
        }
        let dia = aplanar(document.getElementById("InputU").value);

        if (agenda.hasOwnProperty(dia)) {  
            setmodal("📅 Para el dia de hoy tienes :<br>"+agenda[dia],0);
            
        } else {
            setmodal("Hoy tienes el dia libre 🎮<br>",0);
        }
        AutoFocusModal("gom");
    }
    ],
    ["Reporte de Notas",
    "Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10."
    ,
    function(){  
        Lastmodaltemplate=[
            `Digita tu nota<br>
            <input id="InputU" type="number" name="" ></input>`,
            8];
        setmodal(Lastmodaltemplate[0],Lastmodaltemplate[1]);
        AutoFocusModal("InputU");
    },
    function (){
        let num = document.getElementById("InputU").value;

        if (1<=num && num<=10) {

            if (num<6) {
                setmodal("Reprobado 😖",0);
            } else {
                if (6<=num && num<=8) {
                    setmodal("Regular 😄",0);
                } else {
                    if (num<10) {
                        setmodal("Bien 😁",0);
                    } else {
                        setmodal("Exelente 😎",0);
                    }
                }
            }
            
        } else {
            setmodal("⚠ Ingresa un Valor Valido<br>"+Lastmodaltemplate[0],Lastmodaltemplate[1])
        }
        AutoFocusModal("gom");
    }
    ],
    ["MC Helados",
    "Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.<br>" +
    "El helado sin topping cuesta 50 MXN.<br>" +
    "El topping de oreo cuesta 10 MXN.<br>" +
    "El topping de KitKat cuesta 15 MXN.<br>" +
    "El topping de brownie cuesta 20 MXN.<br>" +
    "En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.",
    function(){  
        Lastmodaltemplate=[
            `Digita que topping deseas<br>
            <input id="InputU" type="text" name="" ></input>`,
            9];
        setmodal(Lastmodaltemplate[0],Lastmodaltemplate[1]);
        AutoFocusModal("InputU");
    },
    function (){
        let menu={
            "sin":50,
            "oreo":10,
            "kitkat":15,
            "brownie":20
        }
        let topping = aplanar(document.getElementById("InputU").value);

        if (menu.hasOwnProperty(topping)) {  
            setmodal(`💰 El topping de ${topping} cuesta ${monyformat(menu[topping])}.`,0);
            
        } else {
            setmodal("⚠ No tenemos este topping, lo sentimos :(<br> 💰 El helado sin topping cuesta 50 MXN.<br>"+Lastmodaltemplate[0],Lastmodaltemplate[1]);
        }
        AutoFocusModal("gom");
    }
    ],
    ["SerPiloPaga","Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.<br>" +
    "El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:"+
    "Course: $4999 MXN<br>" +
    "Carrera $3999 MXN<br>" +
    "Master: $2999 MXN<br>" +
    "Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.<br>" +
    "Beca Facebook: 20% de descuento.<br>" +
    "Beca Google: 15% de descuento.<br>" +
    "Beca Jesua: 50% de descuento.<br>" +
    "Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:<br>" +
    "Course: 2 meses<br>" +
    "Carrera 6 meses<br>" +
    "Master: 12 meses",
    function(){  
        Lastmodaltemplate=[
            `<label for="InputU1" class="form-label">Selecciona el Nivel de tu Programa:</label>
            <select id="InputU1" class="form-select">
                <option>Course</option>
                <option>Carrera</option>
                <option>Master</option>
            </select>
            <label for="InputU2" class="form-label">Selecciona la Beca a la que aplicas:</label>
            <select id="InputU2" class="form-select">
                <option>No aplico</option>
                <option>Facebook</option>
                <option>Google</option>
                <option>Jesua</option>
            </select>`,
            10];
        setmodal(Lastmodaltemplate[0],Lastmodaltemplate[1]);
        AutoFocusModal("InputU1");
    },
    function (){
        let Niveles={
            "Course":[4999,2],
            "Carrera":[3999,6],
            "Master": [2999,12]
        };
        let Becas={
            "No aplico":0,
            "Facebook":0.2,
            "Google": 0.15,
            "Jesua":0.5
        };        
        let Nivel = document.getElementById("InputU1").value;
        let Beca = document.getElementById("InputU2").value;
        let mensual=Niveles[Nivel][0]*(1-Becas[Beca]);
        let total=mensual*Niveles[Nivel][1];

        setmodal(`💰 Pagaras mensualmente : ${monyformat(mensual)}.<br> 💰 Pagaras un Total de: ${monyformat (total)}.`,0);
        AutoFocusModal("gom");
    }
    ],
    ["Taximetro",
    "Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:<br>" +
    "Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.<br>" +
    "Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:<br>" +
    "total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.",
    function(){  
        Lastmodaltemplate=[
            `<label for="InputU1" class="form-label">Selecciona el tipo de vehículo: </label>
            <select id="InputU1" class="form-select">
                <option>🚗 Coche</option>
                <option>🛵 Moto</option>
                <option>🚌 Autobús</option>
            </select>
            ⛽ Digita los Litros Consumidos<br>
            <input id="InputU2" type="number" name="" ></input><br>
            🏁 Digita los kilometros Recorridos<br>
            <input id="InputU3" type="number" name="" ></input>
            `,
            11];
        setmodal(Lastmodaltemplate[0],Lastmodaltemplate[1]);
        AutoFocusModal("InputU2");
    },
    function (){
        let Vehiculos={
            "🚗 Coche":0.2,
            "🛵 Moto":0.1,
            "🚌 Autobús": 0.5
        };        
        let Vehiculo = document.getElementById("InputU1").value;
        let litro = document.getElementById("InputU2").value;
        let kilometro = document.getElementById("InputU3").value;
        let extra = 5;
        if (litro>100) {
            extra=10;
        }
        total=(kilometro*Vehiculos[Vehiculo])+extra;
        setmodal(`💰 Total a Pagar: ${monyformat (total)}.`,0); 
        AutoFocusModal("gom");   
    }
    ]
];

Modaldiv.addEventListener("keypress",(e)=>{if(e.key =='Enter')gobt.click();})

function newitemac(i,...texto){
    const itemac= document.createElement("section");
    itemac.setAttribute("class","accordion-item");
    itemac.innerHTML = `
    <h2 class="accordion-header">
        <input class="btn-check d-none" type="radio" name="OPCR" id="ACF${i}R" autocomplete="off" value=${i}>
        <label class="accordion-button btn btn-primary w-100 p-3 border-0 text-start fs-3 text-white"
        for="ACF${i}R" data-bs-toggle="collapse" data-bs-target="#ACF${i}" aria-expanded="false"
        aria-controls="ACF${i}">
            Ejercicio #${i}:  ${texto[0]}.
        </label>
    </h2>
    <div class="accordion-collapse collapse" id="ACF${i}" data-bs-parent="#AcP">
        <div class="accordion-body bg-dark-subtle fs-5 text-secondary-emphasis">
        ${texto[1]}
        </div>
    </div>`;
    return itemac;
}

/*Inicializar Acordeon*/
for (let i = 1; i < EJJS.length+1; i++) {
    ACP.appendChild(newitemac(i,EJJS[i-1][0],EJJS[i-1][1]));
    let ACF = document.getElementById(`ACF${i}`);
    ACF.addEventListener("show.bs.collapse",EJJS[i-1][2])
}

/*Iniciar Funcion modal*/
setmodal("Selecciona un Ejercicio",0)
gomBt.addEventListener("mouseover",()=>setmodal(Lastmodaltemplate[0],Lastmodaltemplate[1]))

gomBt.addEventListener('shown.bs.modal', () => {
        console.log('show instance method called!');
    })


let form = document.getElementById("ACF10R");
console.log(form.value);


// funciones

function setmodal(modaltemplate,i){    
    modalbody.innerHTML = modaltemplate;
    /*remove all listener*/
    gobt.removeEventListener("click",Lastf);
    if (i) {
        LabelM.textContent=EJJS[i-1][0];
        Lastf=EJJS[i-1][3];
        gobt.addEventListener("click",Lastf)  
    }else{
        Lastf=CloseM;
        gobt.addEventListener("click",Lastf);
    }
}

function AutoFocusModal(focuselement){
    Modaldiv.addEventListener('show.bs.modal', function () {
        setTimeout(function(){
            document.getElementById(focuselement).focus();
        }, 550);
    });
}

function CloseM(){
    document.getElementById("close").click()
};


// utilidades
function aplanar(str){
    str=str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w]/gi, '').toLowerCase();
    return str;
}
function count(arrayin) {
    let unique = new Map();

    arrayin.forEach(function (item, index, array) {
        if (array.indexOf(item) === index) {
            unique.set(item, 1);
        } else {
            unique.set(item, unique.get(item) + 1);
        }
    });
    return unique;
}

Array.prototype.max = function() {
    return Math.max.apply(null, this);
};

Array.prototype.min = function() {
    return Math.min.apply(null, this);
};

function monyformat(valor){
    return valor.toLocaleString("en", {
        style: "currency",
        currency: "MXN"
    })

};

const pru=(s)=>console.log(undefined==s ? "hola" : "hola "+s)





