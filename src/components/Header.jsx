import { SaleUseContext } from "../context/SaleContext"

export default function Header() {

    const {total} = SaleUseContext();

    return(
        <>
            <nav className="navbar navbar-expand-md navbar-info bg-info ps-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                <img src="/img/pizza.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>
                Pizzeria Mamma Mia!
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                { total != 0 ?(
                <a href="/saleDetail" className="text-decoration-none text-dark">
                    <ul className="navbar-nav d-flex">
                        <li className="nav-item"><img src="/img/carro.png" alt="carro de compra" width="20px" className="me-3"/></li>
                        <li className="nav-item pe-5"> ${total}</li>
                    </ul>
                </a>
                ) :
                <ul className="navbar-nav d-flex">
                        <li className="nav-item"><img src="/img/carro.png" alt="carro de compra" width="20px" className="me-3"/></li>
                        <li className="nav-item pe-5"> ${total}</li>
                    </ul>
                }
                </div>
            </div>
        </nav>
        </>
    )
};
