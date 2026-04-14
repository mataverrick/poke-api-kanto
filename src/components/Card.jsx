function Card({ name, img }) {
  return (
    <div className="card">
      {<p>{name}</p>}
      <img src={img} alt={name} />
    </div>
  );
}

export default Card;
