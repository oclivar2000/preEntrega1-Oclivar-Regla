import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
  return (
    <div>
      <h3>Tienda</h3>
      <ul>
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