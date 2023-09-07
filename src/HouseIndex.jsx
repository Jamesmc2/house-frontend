export function HouseIndex(props) {
  return (
    <div>
      <h1>All Houses</h1>
      {props.houses.map((house) => (
        <div key={house.id}>
          <h2>{house.address}</h2>
          <p>Squarefeet: {house.squarefeet}</p>
          <p>Bedrooms: {house.bedrooms}</p>
          <p>Bathrooms: {house.bathrooms}</p>
          <button onClick={() => props.showHouse(house)}>More info</button>
        </div>
      ))}
    </div>
  );
}
