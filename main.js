const gestor1 = {
    id: 1,
    usuario: 'gestor1',
    password: 'gestor1',
    correo: 'gestor1@gmail.com',
    
};
const gestor2 = {
    id: 2,
    usuario: 'gestor2',
    password: 'gestor2',
    correo: 'gestor2@gmail.com',
};
const gestor3 = {
    id: 3,
    usuario: 'gestor3',
    password: 'gestor3',
    correo: 'gestor3@gmail.com',
};
const cliente1 = {
    id: 4,
    id_gestor: 1,
    usuario: 'cliente1',
    password: 'cliente1',
    correo: 'cliente1@gmail.com',
    saldo: Math.random() * 1000
};
const cliente2 = {
    id: 5,
    id_gestor: 2,
    usuario: 'cliente2',
    password: 'cliente2',
    correo: 'cliente2@gmail.com',
    saldo: Math.random() * 1000
};
const cliente3 = {
    id: 6,
    id_gestor: 3,
    usuario: 'cliente3',
    password: 'cliente3',
    correo: 'cliente3@gmail.com',
    saldo: Math.random() * 1000
};
const mensaje1 = {
    id: 7,
    id_origen:1,
    id_destino:1,
    texto: 'chat1',
    fecha: '28/10/2021'
};
const mensaje2 = {
    id: 8,
    id_origen:2,
    id_destino:2,
    texto: 'chat2',
    fecha: '15/02/2021'
};
const mensaje3 = {
    id: 9,
    id_origen:3,
    id_destino:3,
    texto: 'chat3',
    fecha: '25/05/2021'
};

const transferencia1 = {
   id: 10,
   id_ordenate:1,
   id_beneficiario:1,
   importe: Math.random() * 500,
   concepto: 'concepto1',
   fecha: '28/10/2021' 
};
const transferencia2 = {
   id: 11,
   id_ordenate:2,
   id_beneficiario:2,
   importe: Math.random() * 500,
   concepto: 'concepto2',
   fecha: '15/02/2021' 
};
const transferencia3 = {
   id: 12,
   id_ordenate:3,
   id_beneficiario:3,
   importe: Math.random() * 500,
   concepto: 'concepto3',
   fecha: '25/05/2021' 
};






console.table(gestor1);
console.table(gestor2);
console.table(gestor3);
console.table(cliente1);
console.table(cliente2);
console.table(cliente3);
console.table(mensaje1);
console.table(mensaje2);
console.table(mensaje3);
console.table(transferencia1);
console.table(transferencia2);
console.table(transferencia3);
