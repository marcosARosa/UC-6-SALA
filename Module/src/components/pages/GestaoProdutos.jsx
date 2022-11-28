import { Component } from "react";

export default class GestaoProdutos extends Component {
    render(){
        return(
<>
<div className="gestaop-container">
<form action="" className="gestao-produtos">
    <h2>Cadastre seu Produto</h2>
    <input type="text" placeholder="codigo" />
    <input type="text" placeholder="nome produto"/>
    <input type="text" placeholder="preço"/>
    <input type="file" />
    <button>cadastrar</button>
</form>

<div className="pordutos-cadastrados-c">
<h2>Produtos Cadastrados</h2>
    <div className="pordutos-cadastrados">
        
        <div className="box">
            <p>codigo</p>
            <p>02814000875545</p>
           
           
        </div>
    
        <div  className="box">
            <p>produto</p>
            <p>Azeite Aurora</p>
        </div >
    
        <div  className="box">
            <p>preço</p>
            <p>20,50</p>
        </div>
    
        <div  className="box">
            <p>imagem</p>
            <p> is not image</p>
         
        </div>

    </div>
</div>

</div>
</>
        )
    }
}