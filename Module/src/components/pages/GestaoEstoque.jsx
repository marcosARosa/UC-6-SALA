import { Component } from "react";
export default class GestaoEstoque extends Component {
   render(){
       return(
           <>
          <div className="pordutos-cadastrados-c">
<h2>Produtos Cadastrados</h2>
    <div className="pordutos-cadastrados">
        
        <div className="box">
            <p>codigo</p>
            <p>02814000875545</p>
           
           
        </div>
    
        <div  className="box">
            <p>produto</p>
            <p>Suco </p>
        </div >
    
        <div  className="box">
            <p>preço</p>
            <p>17,50</p>
        </div>
    
        <div  className="box">
            <p>imagem</p>
            <p> x</p>
         
        </div>

        <div  className="box">
            <p>Quant</p>
            <p> 72</p>
         
        </div>

    </div>
</div>
            
           </>
       )
   } 
}