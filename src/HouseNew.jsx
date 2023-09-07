export function HouseNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateHouse(params);
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>New House</h1>
        <div>
          <label htmlFor="address">Address</label>
          <input name="address" type="text-field"></input>
        </div>
        <div>
          <label htmlFor="squarefeet">Squarefeet</label>
          <input name="squarefeet" type="text-field"></input>
        </div>
        <div>
          <label htmlFor="bedrooms">Bedrooms</label>
          <input name="bedrooms" type="text-field"></input>
        </div>
        <div>
          <label htmlFor="bathrooms">Bathrooms</label>
          <input name="bathrooms" type="text-field"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
