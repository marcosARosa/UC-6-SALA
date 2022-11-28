import { Route, Routes } from "react-router-dom";
import FrenteCaixa from "../pages/FrenteCaixa";
import GestaoEstoque from "../pages/GestaoEstoque";
import GestaoProdutos from "../pages/GestaoProdutos";

function Main(){
    return(
        <main>
           <Routes>
               <Route path= "/" element={<FrenteCaixa/>} />
               <Route path="/gestao-produtos" element={<GestaoProdutos />} />
               <Route path="/gestao-estoque" element={< GestaoEstoque/>} /> 
           </Routes>
        </main>
    )
}

export default Main;