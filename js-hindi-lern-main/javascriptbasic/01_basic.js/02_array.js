const marvel_heros =["thor", "ironman", "spiderman"]
const Dc_heros = ["suparman", "flash", "batman"]

//marvel_heros.push(Dc_heros)

//console.log(marvel_heros); 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const allHeros = marvel_heros.concat(Dc_heros)
// console.log(allHeros);

const all_new_hereo = [...marvel_heros, ...Dc_heros]
  console.log(all_new_hereo);

  const anther_arry =[1,2,3, [4,5,6], 7, [6,7, [4,5]]]

  const real_another_arry =anther_arry.flat(Infinity)
  console.log(real_another_arry);

 console.log(Array.isArray("piyush"));
 console.log(Array.from("piyush"));
 console.log(Array.from({name: "piyush"})); // interesting

 let score1 =100
 let score2 =200
 let score3 =300

 console.log(Array.of(score1,score2,score3));

 
 