setInterval(setClock, 1000);

const secondHand = document.querySelector("[data-second-hand]"); //SEGUNDERO
const minuteHand = document.querySelector("[data-minute-hand]"); //MINUTERO
const hourHand = document.querySelector("[data-hour-hand]");     //HORARIO

function setClock(){ //FUNCIÓN RELOJ
    const currentDate = new Date();

    const secondRatio = currentDate.getSeconds() / 60;                 //SEGUNDOS 60
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60; //MINUTOS 60
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;     //HORAS 12

    setRotation(secondHand, secondRatio); //LLAMADAS A LA FUNCIÓN ROTACIÓN
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio){ //FUNCIÓN ROTACIÓN
    element.style.setProperty("--rotation", rotationRatio * 360);
} 

setClock(); //LLAMADA A LA FUNCIÓN RELOJ