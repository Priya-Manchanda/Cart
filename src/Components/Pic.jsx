function Pic({ addItem, id, mapItem, price, src }) {
  return (
    <div className="card__container col-lg-4 col-md-6">
      <div className="card">
        <div className="card-body">
          <div>
            <img alt="..." className="photo" src={src} />
            <p className="pri">₹{price}</p>
          </div>
          <button
            onClick={() => addItem(mapItem)}
            value={id}
            type="button"
            className="btn btn-lg button"
          >
            Add to Cart
            <i className="fas fa-shopping-cart" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Pic;
