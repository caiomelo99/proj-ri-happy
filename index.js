let personagem = 'zarbon, 100001'
let person = personagem.split(" ,")

person.forEach( item =>{
    const [nome, poder] = item.trim().split(" ")
    const quantidadePoder = parseInt(poder)
    
    if (quantidadePoder < 1000) {
        console.log(`O Herói de nome ${nome} está no nível de Ferro`);
    } else if (quantidadePoder > 1000 && quantidadePoder <= 2000) {
        console.log(`O Herói de nome ${nome} está no nível de Bronze`);
    } else if (quantidadePoder > 2000 && quantidadePoder <= 5000) {
        console.log(`O Herói de nome ${nome} está no nível de Prata`);
    } else if (quantidadePoder > 5000 && quantidadePoder <= 7000) {
        console.log(`O Herói de nome ${nome} está no nível de Ouro`);
    } else if (quantidadePoder > 7000 && quantidadePoder <= 8000) {
        console.log(`O Herói de nome ${nome} está no nível de Platina`);
    } else if (quantidadePoder > 8000 && quantidadePoder <= 9000) {
        console.log(`O Herói de nome ${nome} está no nível de Ascendente`);
    } else if (quantidadePoder > 9000 && quantidadePoder <= 10000) {
        console.log(`O Herói de nome ${nome} está no nível de Imortal`);
    } else if (quantidadePoder > 10000) {
        console.log(`O Herói de nome ${nome} está no nível de Radiante`);
    }
})

