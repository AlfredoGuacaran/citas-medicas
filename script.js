const radiologia = [
  {
    hora: '11:00',
    especialista: 'IGNACIO SCHULZ',
    paciente: 'FRANCISCA ROJAS',
    rut: '9878782-1',
    prevision: 'FONASA',
  },
  {
    hora: '11:30',
    especialista: 'FEDERICO SUBERCASEAUX',
    paciente: 'PAMELA ESTRADA',
    rut: '15345241-3',
    prevision: 'ISAPRE',
  },
  {
    hora: '15:00',
    especialista: 'FERNANDO WURTHZ',
    paciente: 'ARMANDO LUNA',
    rut: '16445345-9',
    prevision: 'ISAPRE',
  },
  {
    hora: '15:30',
    especialista: 'ANA MARIA GODOY',
    paciente: 'MANUEL GODOY',
    rut: '17666419-0',
    prevision: 'FONASA',
  },
  {
    hora: '16:00',
    especialista: 'PATRICIA SUAZO',
    paciente: 'RAMON ULLOA',
    rut: '14989389-K',
    prevision: 'FONASA',
  },
];

const traumatologia = [
  {
    hora: '08:00',
    especialista: 'MARIA PAZ ALTUZARRA',
    paciente: 'PAULA SANCHEZ',
    rut: '15554774-5',
    prevision: 'FONASA',
  },
  {
    hora: '10:00',
    especialista: 'RAUL ARAYA',
    paciente: 'ANGÉLICA NAVAS',
    rut: '15444147-9',
    prevision: 'ISAPRE',
  },
  {
    hora: '10:30',
    especialista: 'MARIA ARRIAGADA',
    paciente: 'ANA KLAPP',
    rut: '17879423-9',
    prevision: 'ISAPRE',
  },
  {
    hora: '11:00',
    especialista: 'ALEJANDRO BADILLA',
    paciente: 'FELIPE MARDONES',
    rut: '1547423-6',
    prevision: 'ISAPRE',
  },
  {
    hora: '11:30',
    especialista: 'CECILIA BUDNIK',
    paciente: 'DIEGO MARRE',
    rut: '16554741-K',
    prevision: 'FONASA',
  },
  {
    hora: '12:00',
    especialista: 'ARTURO CAVAGNARO',
    paciente: 'CECILIA MENDEZ',
    rut: '9747535-8',
    prevision: 'ISAPRE',
  },
  {
    hora: '12:30',
    especialista: 'ANDRES KANACRI',
    paciente: 'MARCIAL SUAZO',
    rut: '11254785-5',
    prevision: 'ISAPRE',
  },
];

const dental = [
  {
    hora: '08:30',
    especialista: 'ANDREA ZUÑIGA',
    paciente: 'MARCELA RETAMAL',
    rut: '11123425-6',
    prevision: 'ISAPRE',
  },
  {
    hora: '11:00',
    especialista: 'MARIA PIA ZAÑARTU',
    paciente: 'ANGEL MUÑOZ',
    rut: '9878789-2',
    prevision: 'ISAPRE',
  },
  {
    hora: '11:30',
    especialista: 'SCARLETT WITTING',
    paciente: 'MARIO KAST',
    rut: '7998789-5',
    prevision: 'FONASA',
  },
  {
    hora: '13:00',
    especialista: 'FRANCISCO VON TEUBER',
    paciente: 'KARIN FERNANDEZ',
    rut: '18887662-K',
    prevision: 'FONASA',
  },
  {
    hora: '13:30',
    especialista: 'EDUARDO VIÑUELA',
    paciente: 'HUGO SANCHEZ',
    rut: '17665461-4',
    prevision: 'FONASA',
  },
  {
    hora: '14:00',
    especialista: 'RAQUEL VILLASECA',
    paciente: 'ANA SEPULVEDA',
    rut: '14441281-0',
    prevision: 'ISAPRE',
  },
];

//Selectores elementos HTML
const bodyTable = document.querySelector('.body-table');
const areaHTML = document.querySelector('.area');
const primeraUltHTML = document.querySelector('.primera-ultima');
const radiologiaBtn = document.querySelector('.radiologia-btn');
const traumatologiaBtn = document.querySelector('.traumatologia-btn');
const dentalBtn = document.querySelector('.dental-btn');

// Imprime html de la primera y ultima atencion indicando el area (array)
const imprimePrimeraUltima = function (area) {
  primeraUltHTML.innerHTML = `Primera atencion: ${area[0].paciente} - ${
    area[0].prevision
  } | Ultima cita: ${area[area.length - 1].paciente} - ${
    area[area.length - 1].prevision
  } `;
};

//Limpia los HTML para dejarlos en blanco
const limpiarHTML = function () {
  primeraUltHTML.innerHTML = '';
  bodyTable.innerHTML = '';
};

// Imprime en html los datos de las hora de atencion indicando el area (array)
const imprimeTabla = function (area) {
  limpiarHTML();
  for (paciente of area) {
    bodyTable.innerHTML =
      bodyTable.innerHTML +
      `
       <tr>
          <th scope="row">${area.indexOf(paciente) + 1}</th>
          <td>${paciente.hora}</td>
          <td>${paciente.especialista}</td>
          <td>${paciente.paciente}</td>
          <td>${paciente.rut}</td>
          <td>${paciente.prevision}</td>
      </tr>
      `;
  }
};

//Imprime en Html el Nombre del area ingrsandola en texto
const imprimeArea = function (nombreArea) {
  areaHTML.innerHTML = nombreArea;
};

//Agraga ejecucion de las funciones a los botones
traumatologiaBtn.addEventListener('click', function () {
  imprimeArea('Traumatologia');
  imprimePrimeraUltima(traumatologia);
  imprimeTabla(traumatologia);
});

radiologiaBtn.addEventListener('click', function () {
  imprimeArea('Radiologia');
  imprimePrimeraUltima(radiologia);
  imprimeTabla(radiologia);
});

dentalBtn.addEventListener('click', function () {
  imprimeArea('Dental');
  imprimePrimeraUltima(dental);
  imprimeTabla(dental);
});

//Reactoring botones
const crearHTML = function (area, nombreArea) {
  imprimeArea('Dental');
  imprimePrimeraUltima(dental);
  imprimeTabla(dental);
};
