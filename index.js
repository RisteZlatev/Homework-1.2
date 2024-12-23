//Vkupen prosek na site studenti

const studenti = [
    { ime: 'Pero', prosek: 7.1, grad: 'Berovo' },
    { ime: 'Stojko', prosek: 6, grad: 'Kavadarci' },
    { ime: 'Stojna', prosek: 10, grad: 'Veles' },
    { ime: 'Mara', prosek: 5, grad: 'Kichevo' },
    { ime: 'Petka', prosek: 8.3, grad: 'Skopje' },
    { ime: 'Mitre', prosek: 7.5, grad: 'Ohrid' },
    { ime: 'Risto', prosek: 9, grad: 'Strumica' },
    { ime: 'Tosho', prosek: 8.3, grad: 'Gevgelija' },
    { ime: 'Miki', prosek: 7.7, grad: 'Kriva Palanka'},
    { ime: "Ivan", prosek: 8.5, grad: 'Kumanovo'},
  ];

const sum = studenti.reduce((accumulator, s)=>{
    return accumulator + s.prosek;
},0 )
const average = sum/studenti.length;
console.log(sum);
console.log(average);


//Site studenti so 4 ili pomalku karakteri vo imeto

const filteredStudents = studenti.filter((student)=>{
  return student.ime.length <=4;
})
console.log(filteredStudents);


//Studentot od strumica

const studentStrumica = studenti.find((student)=>{
  return student.grad = 'Strumica';
});
console.log(studentStrumica);


//Horoskop funkcija

function horospokZnak(mesec, den){
  return  (mesec==1 && den>=20) || (mesec==2 && den<=18) ? "Vodolija": 
          (mesec == 2 && den>18) || (mesec==3 && den<=20) ? "Riba":
          (mesec == 3 && den>20) || (mesec==4 && den<=21) ? "Oven":
          (mesec == 4 && den>21) || (mesec==5 && den<=20) ? "Bik":
          (mesec == 5 && den>20) || (mesec==6 && den<=20) ? "Bliznaci":
          (mesec == 6 && den>20) || (mesec==7 && den<=22) ? "Rak":
          (mesec == 7 && den>22) || (mesec==8 && den<=22) ? "Lav":
          (mesec == 8 && den>22) || (mesec==9 && den<=22) ? "Devica":
          (mesec == 9 && den>22) || (mesec==10 && den<=23) ? "Vaga":
          (mesec == 10 && den>23) || (mesec==11 && den<=22) ? "Skorpija":
          (mesec == 11 && den>22) || (mesec==12 && den<=21) ? "Strelec":
          (mesec == 12 && den>21) || (mesec==1 && den<=19) ? "Jarec":
          "Greska datum";
};

console.log(horospokZnak(4,23));
console.log(horospokZnak(3,11));
console.log(horospokZnak(7,26));


//Plostina na pravoagolnik

const plostina = function plostinaPravoagolnik(a,b){
  return a*b;
}

console.log(`Plostina: ${plostina(4,6)} cm`);
console.log(`Plostina: ${plostina(5,10)} cm`);
console.log(`Plostina: ${plostina(3,9)} cm`);


//Perimetar na pravoagolnik

const perimetar = function perimetarPravoagolnik(a,b){
  return 2*a+2*b;
}
console.log(`Perimetar: ${perimetar(5,10)} cm`)
console.log(`Perimetar: ${perimetar(3,9)} cm`)
console.log(`Perimetar: ${perimetar(4,6)} cm`)
