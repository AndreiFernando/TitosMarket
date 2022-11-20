import { Component } from "react";

class FrenteCaixa extends Component {
    render() {
        return (
            <>
                <div className="cupom-produto">
                    <div className="cupom-fiscal" id="cupom-fiscal">
                    </div>
                    <div className="imagem-produto">
                        <img src="" alt="" id="produto-img" />
                    </div>
                </div>
                <div className="info-codigo">
                    <input type="text" className="input-codigo" placeholder="CÓDIGO PRODUTO" />
                    <h3>Total Compra <span id="total-compra"></span></h3>
                </div>
            </>
        )
    }
}

export default FrenteCaixa;