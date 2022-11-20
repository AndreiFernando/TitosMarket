import { Link } from "react-router-dom"
import logoTitosMarket from "./logo-white.svg"
function Header() {
    return (
        <header className="header">
            <div className="header-titos-market">
                <img src={logoTitosMarket} alt="Logo TitosMarket" />
                <nav className="menu">
                    <Link to="/" className="item-menu">Frente de Caixa</Link>
                    <Link to="/gestao-produtos" className="item-menu">Gestão de Produtos</Link>
                    <Link to="#" className="item-menu">Gestão de Estoque</Link>
                </nav>
                <div className="operador">
                    <h3>Operador <br /> <span> Fulano </span></h3>
                </div>
            </div>

        </header>
    )
}

export default Header;