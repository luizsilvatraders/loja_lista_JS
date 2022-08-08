let ProdutosQuadros = [
{
name: "Capitão America",
preco:"R$ 100,00",
imagem:"./assets/img/painting/capitao1.jpg"
},

{
name: "Doctor Strange",
preco:"R$ 100,00",
imagem:"./assets/img/painting/doutor estranho.jpg"
},

{
name: "DeadPool",
preco:"R$ 120,00",
imagem:"./assets/img/painting/dead1.png"
},

{
name: "DeadPool",
preco:"R$ 155,00",
imagem:"./assets/img/painting/dead2.jpg"
},
{
name: "Deadpool Thanos",
preco:"R$ 110,00",
imagem:"./assets/img/painting/dead3.jpg"
},

{
name: "Homeem de ferro",
preco:"R$ 170,00",
imagem:"./assets/img/painting/hoeme de ferro.jpg"
},

{
name: "Viuva Negra",
preco:"R$ 120,00",
imagem:"./assets/img/painting/viuva1.png"
},

{
name: "Viuva Negra",
preco:"R$ 140,00",
imagem:"./assets/img/painting/viuva2.jpg"
},

{
name: "Escudo Capitão America",
preco:"R$ 100,00",
imagem:"./assets/img/painting/capitao2.jpg"
},

{
name: "wolverine X-man",
preco:"R$ 200,00",
imagem:"./assets/img/painting/wolverine.jpg"
},


]

let produtosBonecos = [
{
name: "Homelander",
preco:"R$ 150,00",
imagem:"./assets/img/actions/patria.jpg"
},

{
name: "Pantera Negra",
preco:"R$ 80,00",
imagem:"./assets/img/actions/pantera.jpg"
},

{
name: "Viuva Negra",
preco:"R$ 200,00",
imagem:"./assets/img/actions/vn.jpg"
},

{
name: "iron man",
preco:"R$ 230,00",
imagem:"./assets/img/actions/IR.jpg"
},
{
name: "wolverine",
preco:"R$ 245,00",
imagem:"./assets/img/actions/vw.jpg"
},

{
name: "Dead Pool",
preco:"R$ 220,00",
imagem:"./assets/img/actions/dad.jpg"
},

{
name: "Os Vingadores",
preco:"R$ 180,00",
imagem:"./assets/img/actions/ving.jpg"
},

{
name: "Spider-Man",
preco:"R$ 350,00",
imagem:"./assets/img/actions/HMR.jpg"
},

{
name: "Baby Groot",
preco:"R$ 280,00",
imagem:"./assets/img/actions/Growt.jpg"
},

{
name: "Billy Butcher",
preco:"R$ 240,00",
imagem:"./assets/img/actions/bili.jpg"
},

]

function createActionItem(objeto){
   const ul = document.querySelector(".listaQuadros")
   for(let i = 0;i < objeto.length;i++){

        const li  =   document.createElement("li")
        const img =   document.createElement("img")
        const h2  =   document.createElement("h2")
        const p   =   document.createElement("p")


        img.src = objeto[i].imagem
        //transformando em filho com comando appendChild(img)
        li.appendChild(img)
        //
        h2.innerText = objeto[i].name
        li.appendChild(h2)

        p.innerText  = objeto[i].preco
        li.appendChild(p)
        
        ul.appendChild(li)

   }
   return ul

   }

createActionItem(ProdutosQuadros)
    
function createPaintingItem(objeto){
    const ul = document.querySelector(".listaBonecos")
    for(let i = 0;i < objeto.length;i++){
 
         const li  =   document.createElement("li")
         const img =   document.createElement("img")
         const h2  =   document.createElement("h2")
         const p   =   document.createElement("p")
 
 
         img.src = objeto[i].imagem
         //transformando em filho com comando appendChild(img)
         li.appendChild(img)
         //
         h2.innerText = objeto[i].name
         li.appendChild(h2)
 
         p.innerText  = objeto[i].preco
         li.appendChild(p)
         
         ul.appendChild(li)
 
    }
    return ul
}    
createPaintingItem(produtosBonecos)    