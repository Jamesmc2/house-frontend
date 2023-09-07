export function HouseUpdate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.handleUpdate(params, props.house.id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Update house</h1>
        <div>
          <label htmlFor="address">Address</label>
          <input name="address" type="text-field" defaultValue={props.house.address}></input>
        </div>
        <div>
          <label htmlFor="squarefeet">Squarefeet</label>
          <input name="squarefeet" type="text-field" defaultValue={props.house.squarefeet}></input>
        </div>
        <div>
          <label htmlFor="bedrooms">Bedrooms</label>
          <input name="bedrooms" type="text-field" defaultValue={props.house.bedrooms}></input>
        </div>
        <div>
          <label htmlFor="bathrooms">Bathrooms</label>
          <input name="bathrooms" type="text-field" defaultValue={props.house.bathrooms}></input>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
