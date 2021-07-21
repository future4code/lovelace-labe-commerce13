import React from 'react'

class Carrinho extends React.Component{
    render() {
        return (
        <div>
            <div> 
                <p>{this.props.quantidade}x</p>
                <p>{this.props.nomeProduto}</p>
            </div>
        </div>
        );
    }
}

export default Carrinho;