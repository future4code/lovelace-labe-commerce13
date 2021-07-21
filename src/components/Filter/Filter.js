import React from "react"

class Filter extends React.Component{
    render(){
        return(
            <section>
                <h3>Filtros</h3>
                <div>
                    <label>Valor mínimo:</label>
                    <input type="number"/> 
                </div>
                <div>
                    <label>Valor máximo:</label>
                    <input type="number"/> 
                </div>
                <div>
                    <label>Busca por nome:</label>
                    <input type="text"/> 
                </div>
            </section>
        );
    }
}

export default Filter