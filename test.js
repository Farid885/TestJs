//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘 */
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR

// full name numunesi
// let fullName = 'Murad Nərimanlı Tərlan'

//1) AD soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin
//2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin
//3) Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin
let fullName = "Ferid Zamanli Yaver";

let secondName = fullName.split("");
let newSeconder = secondName.splice(6, 8);
let thirdSeconder = newSeconder.concat(secondName);
let fourSeconder = thirdSeconder.join("");
console.log(fourSeconder);
// ----------------------------------------

let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....
//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
// let val = arr.filter((num) => {
//   return num === 5;
// });
// console.log(val);
//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
// const myNewArr = arr.reduce((constractor, current) => {
//   return constractor + current;
// });
// console.log(myNewArr);

//6) arrayda tekrar olunan reqemleri artan sira ile duzun
// const sorMet = arr.sort();
// console.log(sorMet);
//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin
// const bigger = arr.reduce((a, v) => {
//   return Math.max(a, v);
// });
// console.log(bigger);
// const afterMax = arr.filter((num) => {
//   return num === bigger;
// });
// console.log(afterMax.length);

//8) Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin
let randomize = Math.floor(Math.random() * 10) + 1;
// const newRandom = randomize.toString().split('');--
console.log(randomize);
function newRandomize() {
  return console.log(arr.includes(randomize));
}
newRandomize();

//9) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Murad adinda 5 herf var ve 5 arrayda var
// myNameIs = "Ferid";
// function nameCounting() {
//   return console.log(arr.includes(myNameIs.length));
// }
// nameCounting();
//10) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
let findingFirst = arr.find((element) => {
  return element / 3 === 2;
});
console.log(findingFirst);
const fondT = arr.indexOf(findingFirst);
console.log(fondT);

//11) arraydaki en boyuk reqemin ilk indexini tapin
// const larger = arr.reduce((a, b) => {
//   return Math.max(a, b);
// });
// console.log(larger);
// const findLarge = arr.indexOf(larger);
// console.log(findLarge);
// console.log(arr[findLarge]);

//12) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

// const myInd = [];
// const newFil = arr.forEach((number, index) => {
//   if (number === 4) {
//     myInd.push(index);
//   }
// });
// console.log(myInd);

//13) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
// const indexesOf5 = [];
// arr.forEach((five, index) => {
//   if (five === 5) {
//     indexesOf5.push(index);
//   }
// });
// console.log(indexesOf5);
//14) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
// let newEm = [];
// let newAre = arr.filter((inde) => {
//   if (inde > 2) {
//     newEm.push(inde);
//   }
// });
// console.log(newEm);
// let mySecond = arr.length - newEm.length;
// console.log(mySecond);
//15) 7 reqeminin indexleri cemini tapin.

// const indexesOf7 = [];
// arr.forEach((value, index) => {
//   if (value === 7) {
//     indexesOf7.push(index);
//   }
// });
// console.log(indexesOf7.reduce((p, v) => p + v));

/////////////////////////////////////////////////////
let arr2 = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
// let empArr = [];
// const myNewo = arr2.filter((first) => {
//   if (first.name[0] === "t") {
//     empArr.push(first);
//   }
// });
// console.log(empArr);
// console.log(empArr);
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// let emptyArr2 = [];
// let secondNew = arr2.filter((tletter) => {
//   if (tletter.name[tletter.name.length - 1] == "t") {
//     emptyArr2.push(tletter);
//   }
// });

// console.log(emptyArr2.length);

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// let emptySecond = [];
// const arrFil = arr2.filter((first) => {
//   if (first.name[0] == "t" && first.name[first.name.length - 1] == "t") {
//     emptySecond.push(first.key);
//   }
// });
// console.log(emptySecond);

// const men = emptySecond.reduce((a, b) => {
//   return a + b;
// });
// console.log(men);

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// let supArr = [];
// arr2.filter((first) => {
//   if (first.name[first.name.length - 1] == "e") {
//     supArr.push(first);
//   }
// });
// console.log(supArr);
// supArr.forEach((element) => {
//   element.name = "SuperDev";
// });
// console.log(supArr);

// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
// const biggerArr = arr2.reduce((longest, current) => {
//   if (current.name.length > longest.name.length) {
//     return current;
//   } else {
//     return longest;
//   }
// }, );
// console.log(biggerArr );
// 21 arr2 de "name"-i en uzun olan obyektin inde xin kvadratini hesablayin
// const biggerArr = arr2.reduce((longest, current) => {
//   if (current.name.length > longest.name.length) {
//     return current;
//   } else {
//     return longest;
//   }
// }, );
// console.log(biggerArr );
// let newBigger = biggerArr.name.length **2
// console.log(newBigger);

// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// let itNewArr = []
// arr2.forEach((longest) => {
//   if (longest.name.length> 4) {
//     return itNewArr.push(longest)
//   }
// }, );
// console.log(itNewArr);

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
// const biggerArr = arr2.reduce((longest, current) => {
//   if (current.key.length > longest.key.length) {
//     return current;
//   } else {
//     return longest;
//   }
// });
// console.log(biggerArr.key);

// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// passs
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
// pass
// 26 Bura da ozunuz arr2 ile ede bileceyiniz en maragli yeni funksionalligi yazin.

// 27 Xaliqenin taski :D
////////////////////////////////
// Dersde edilen switch case taskina esasen artiq girish qiymetleri
// tekce pointden ibaret deil
// exampoint - imtahan bali
// startPoint - imtahana girish bali
// olaraq yerleshdireceksiz
// onceki shertler yerinde qalir sadece eger girish bali 17 den ashagi olarsa
// kesilmek case -ine daxil olsun

// let xerclerim  = " 770 azn ipoteka  621 azn kredit 600 manat hesabat 1300 diger borclar 200 idman  40 manat benzin 35 manat kontur 30 Netflix"asdasda
