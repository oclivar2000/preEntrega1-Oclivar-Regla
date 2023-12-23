import { CartWidget } from "../CartWidget/CartWidget"
import "./NavBar.css"

export const NavBar = () => {
  return (
    <div>
      <h3 className="titulo">Tienda</h3>
      <ul className="detalles">
        <li>
            Producto1
        </li>
        <li>
            Producto2
        </li>
      </ul>
      <CartWidget />
    </div>
  )
}