import { Component } from "react";
import ImgArroz from "../layout/arroz.jpeg"
import ImgFeijao from "../layout/feijao.png"

class GestaoProdutos extends Component {
    render() {
        return (
            <section className="tabela-produtos">
                <table>
                    <thead>
                        <th>CÓDIGO</th>
                        <th>IMAGEM DE REFERENCIA</th>
                        <th>NOME DO PRODUTO</th>
                        <th>PREÇO</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>100</td>
                            <td><img src={ImgArroz} alt="Pacote de arroz" className="img-referencia" /></td>
                            <td>ARROZ</td>
                            <td>R$21.90</td>
                        </tr>
                        <tr>
                            <td>101</td>
                            <td><img src={ImgFeijao} alt="Pacote de feijão" className="img-referencia" /></td>
                            <td>FEIJÃO</td>
                            <td>R$7.90</td>
                        </tr>
                        <tr>
                            <td>102</td>
                            <td><img src="" alt="Pacote de suco" className="img-referencia" /></td>
                            <td>SUCO</td>
                            <td>R$1.99</td>
                        </tr>
                    </tbody>
                </table>

                <div className="info-cadastro">
                    <input type="text" className="input-cadastro" placeholder="CADASTRAR CÓDIGO" />
                    <h3> <span id="total-compra"></span></h3>
                    <input type="text" className="input-cadastro" placeholder="CADASTRAR IMAGEM" />
                    <h3> <span id="total-compra"></span></h3>
                    <input type="text" className="input-cadastro" placeholder="CADASTRAR PRODUTO" />
                    <h3> <span id="total-compra"></span></h3>
                    <input type="text" className="input-cadastro" placeholder="CADASTRAR PREÇO" />
                    <h3> <span id="total-compra"></span></h3>
                    <button type="submit">CADASTRAR</button>
                </div>
            </section>
        )
    }
};

export default GestaoProdutos;