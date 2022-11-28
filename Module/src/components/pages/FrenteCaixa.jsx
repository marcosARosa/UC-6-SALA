import { Component } from "react";
class FrenteCaixa extends Component{
    constructor(){
        super();
        this.state = {
            mercadorias: [
                [100, "Arroz", 21.90 ,'img/arroz.jpg'],
                [101, "Feijão", 8.21 , 'img/feijao.jpg']
            ],
            codigos: [],
            produtos: [],
            precos: [],
            totalCompra: 0
        }
    }

    buscarProdutos(){
        let codigoProduto = document.getElementById("codigo-produto");
        let imagemProduto = document.getElementById("produto-img");
        let calculoTotalCompra = 0;


        this.state.mercadorias.forEach(itens => {
            if(codigoProduto.value == itens[0]){
                calculoTotalCompra = this.state.totalCompra + itens[2];
                this.setState({totalCompra: calculoTotalCompra});
                imagemProduto.src = itens[3];
                codigoProduto.value = "";
            }
            
        });
    }
    mostrarTotalCompra(){
        let spanTotalCompra = document.getElementById("total-compra");
        spanTotalCompra.innerHTML = this.state.totalCompra;
    }
    componentDidUpdate(){
        this.mostrarTotalCompra();
    }

    render(){
        return(
            <>
            <div className="cupom-produto">
                <div className="cupom-fiscal" id="cupom-fiscal"> 
                </div>

                <div className="imagem-produto">
                    <img src="" alt="" id="produto-img" />
                </div>

            </div>
            <div className="info-codigo">
                <input type="text" className="input-codigo" placeholder="CÓDIGO PRODUTO" id="codigo-produto" autoFocus onKeyUp={() => this.buscarProdutos()}/>
                <h3>Total Compra <span id="total-compra"></span></h3>
            </div>


            </>
        )
    }

}

export default FrenteCaixa;