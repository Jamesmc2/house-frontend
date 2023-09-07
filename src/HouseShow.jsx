export function HouseShow(props) {
  return (
    <div>
      <h1>{props.house.address}</h1>
      <p>Squarefeet: {props.house.squarefeet}</p>
      <p>Bedrooms: {props.house.bedrooms}</p>
      <p>Bathrooms: {props.house.bathrooms}</p>
    </div>
  );
}
