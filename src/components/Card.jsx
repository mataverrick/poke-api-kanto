function Card({ id, name, img }) {
  return (
    <div className="card">
      <div className="card-title">
        <span>{id}</span>
      </div>
      <div className="card-img">
        <img src={img}></img>
      </div>
      <div className="card-name">
        <span>{name}</span>
      </div>
    </div>
  );
}

export default Card;
