import { CartWidget } from "../CartWidget/CartWidget"
import "./NavBar.css"

export const NavBar = () => {
  return (
    <div>
      <h3 className="titulo">Tienda</h3>
      <ul className="detalles">
        <li className="producto1">
          <a href="#">Producto1</a>
        </li>
        <li className="producto2">
          <a href="#">Producto2</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  )
}