let formMercado = document.getElementById("formCarrinho");
let divCupomFiscal = document.getElementById("cupom");
let imagemProduto = document.getElementById("produto_imagem")
let divTotalAPagar = document.getElementById("total_pagar")
let codigoProduto = document.getElementById("codigoProduto")

const mercadorias = [
    [100, "Arroz", 21.90, "img/arroz.png"],
    [101, "Feijão", 7.90, "img/feijao.jpg"],
    [102, "Biscoito", 3.89, "img/biscoito.jpg"],
    [103, "Suco", 1.29, "img/suco.jpg"],
    [104, "Leite", 7.99, "img/leite.jpg"]
]

let valorProduto = [];
let quantidadeProduto = [];
let mostrarTotalAPagar =[];

codigoProduto.addEventListener('keyup', function(){
mercadorias.forEach(produtos => {
    if(codigoProduto.value == produtos[0]){
        formMercado.nome_produto.value = produtos[1];
        formMercado.preco_produto.value = produtos[2];
        formMercado.qtd_produto.focus();
        imagemProduto.src = produtos[3];
    }
})
});

formMercado.addEventListener('submit', function(event){
    event.preventDefault()

    let mostrarTotalAPagar = "";
    valorProduto.push(Number(form.preco_produto.value));
    quantidadeProduto.push(Number(form.qtd_produto.value));

    


})