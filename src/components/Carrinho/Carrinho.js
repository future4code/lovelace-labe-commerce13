import React from 'react'


class Carrinho extends React.Component{

    totalValue = () => {
        let valueFinish = 0


        return valueFinish
    }

    render() {
        return (
            <div>
                <h3>Carrinho</h3>
                <div>
                    
                </div>
                <p>Valor Total: {this.totalValue()},00</p>
            </div>
        );
    }
}

export default Carrinho;