function Card({ id ,name, img }) {
  return (
    <div className="card">
      {<p>{id}</p>}
      {<p>{name}</p>}
      <img src={img} alt={name} />
    </div>
  );
}

export default Card;
