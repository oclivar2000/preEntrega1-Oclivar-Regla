import "./CartWidget.css"
export const CartWidget = () => {
  const cantidadItems = 1
  return (
    <div className="carro-y-uno">
      <div className="carrito">
        <p className="tit">CartWidget</p>
        <h3 className="carro">🛒</h3>
      </div>
      <div className="carrito">
        <p className="uno">{cantidadItems}</p>
      </div>
    </div>
  )
}