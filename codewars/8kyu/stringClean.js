function stringClean(s){
    return s.replace(/[123456789]/g,'');
}

console.log(stringClean("This1s5 a t3est"));
console.log(stringClean("A1 B2 C3 D4 E5 F6 G7 H8 I9"));