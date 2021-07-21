import React from 'react';
import Carrinho from './Carrinho';

class Carrinhos extends React.Component {

    totalValue = () => {
        let valueFinish = this.props.carrinho.reduce((acc, {preco}) => acc + preco , 0)
        return valueFinish
    }

    removerItem = (itemId) => {
        
    }

    render() {
        return (
        <div>
            <h3>Carrinho</h3>
                {this.props.carrinho.map(({ nome, quantidade }) => (
                <>
                    <Carrinho 
                        quantidade={quantidade}
                        nomeProduto={nome}
                    />
                    <button onClick={this.removerItem}>Remover</button>
                </>
            ))} 
            <p>Valor Total: R${this.totalValue()},00</p>
        </div>
        );
    }
}

export default Carrinhos;