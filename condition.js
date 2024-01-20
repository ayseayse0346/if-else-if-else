// *---------------KARAR YAPILARI-------*//

console.log("** conditions**");

const num1 = Number(prompt("bir sayı girniz"))
// number fonksiyonu stringi numberlaştırı.
const num2 = 5

console.log(num1,typeof num1);
console.log("toplam:", num1+num2); // string birleştirme (concatination) bu işlem sadece + ya özel bir şey artının iki görevi var ya birleştirir. ya da toplar içinde string varsa birleştirir. diğer  çıkarma çarpma gibi durumlarda sadece işlem yapar .birleştirme yapmaz.

if (num1 < 0) {
    console.log("girilen sayı negatiftir.");
}
else if (num1>0) {
    console.log("girilwn sayı pozitiftir.");
}

else {
    console.log("girilen sayı '0' a eşittir.");
}

// !! ornek 2 3 sayının en büyüğü

const sayı1 = 6
const sayı2 = 1
const sayı3 = 3
//? 1. yöntem built -in fonks yardımıyla

const enBuyuk = Math.max(sayı1,sayı2,sayı3)
console.log("enBuyuk:",sayı1);

// ?2. yöntem (nested ilre içi içe iflerle)
// nested iflerle yapılabilir.

// if ( sayı1>=sayı2){
//     if(sayı1>sayı3){
//         console.log("enBuyuk",sayı1);
//     }
// }
// if ( sayı2>=sayı1){
//     if(sayı2>sayı3){
//         console.log("enBuyuk",sayı2);
//     }
// }
// if ( sayı3>=sayı1){
//     if(sayı3>sayı2){
//         console.log("enBuyuk",sayı3);
//     }
// }


// ? 3. yöntem (logic operatörler ile)

if (sayı1>=sayı2 && sayı1>=sayı3){
    console.log("enBuyuk",sayı1);
}
else if (sayı2>=sayı1 && sayı2>=sayı3){
    console.log("enBuyuk", sayı2);
}
else if(sayı3>=sayı2 && sayı3>=sayı1) {
    console.log("enBuyuk", sayı3);
}

else {
    console.log("yanlış sayı formatı");
}

// !!elsenin kullanıldığı örenk 
const sayı4 = NaN
const sayı5 = undefined
const sayı6 = null

if (sayı4>=sayı5 && sayı4>=sayı6){
    console.log("enBuyuk",sayı1);
}
else if (sayı5>=sayı4 && sayı4>=sayı6){
    console.log("enBuyuk", sayı2);
}
else if(sayı6>=sayı5 && sayı6>=sayı4) {
    console.log("enBuyuk", sayı3);
}

else {
    console.log("yanlış sayı formatı");
}

// ?4.yöntem (logic operator ile)

const a = 6
const b = 8
const c = 4

let EnBuyuk = a

if ( b>=EnBuyuk){
EnBuyuk = b
}
if ( c>=EnBuyuk){
EnBuyuk = c
}

console.log("enBuyuk",EnBuyuk);

//! Ornek: Condition birleştirme

const yaş = 20;
const cinsiyet = "erkek";
const sağlıklı = true;

const koşul = yaş >= 18 && cinsiyet === "erkek" && sağlıklı===true ;

if (koşul ) {
	console.log("Askerlik Yapmalı");
} else {
	console.log("Askerlik Yapması gerekmez");
}

// ! EKSTRA NOT:STRİNGLERLE İLGİLİ ÖN BİLGİ YİNE İŞLEYECEĞİZ. lowercase ()--> built-in fonksiyon (jsnin içindeki tanımlı olan fonksiyonnlardır . hepsini küçük harf yapar.string ifadenin.)

const cumle = "Bugun Günlerden "
const kuçukharfler = cumle.toLocaleLowerCase()
console.log(kuçukharfler);
// *büyük harf için de to uppercase kullanılır.

// ? if (koşul === true )  muadili==> if (koşul)
// ?if (koşul===false)  muadili ===> if(!koşul)


// ************************/
// *TERNARY (tek satırlık işlemlerde bunu kullanrız. diğerlerinde if tercih ederiz.)
//************************/

const yas =20
// ? turnery hali .İKİ DURUMDA KULLANILIR. ÇOK DURUMLULARDA MANTIKLI DEĞİL.İF ELSE DAHA İYİ BU DURUMLARDA
yas >= 18 ? console.log("askerlik yapmalı"): console.log("askerlik yapmaz.");
// ?if else hali

if (yas>= 18){
    console.log("askerlik yapmalı");
}
else{
    console.log("askerlik yapmaz");
}

// ?örnek tek durum örneği soru işareti olan kısım true değilse iki noktadan sonrakine bakar. turnary içinde işlem yapma

const çalışmasüresi = 10
// çalışma süresini değiştirdiğimizde maasın direkt kendisini çıktı verir.
const maas = 3000
çalışmasüresi >= 10 ? maas = maas *1.5 : ""
// ? tek durumlu senaryoda turnarynin bir değişkene değer aktarması işlemi
maas = çalışmasüresi >=10 ? maas*1.5 :
console.log("MAAS",maas);


// ******************************
// *SHORT -CIRCUIT
// ****************************

let salary = 40000
let year = 10
// conditadion true ise bunu çalıştırır.eğer false ise hiç umursamıyor.değer kaçsa onu verir. yani 40000 verir.
 year>=10 && (salary= salary*1.5 )
 console.log("salary", salary);
