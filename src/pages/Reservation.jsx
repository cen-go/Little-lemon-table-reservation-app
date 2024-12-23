export default function ReservationPage() {
  return (
    <>
      <div className="res-bg">
        <h1>RESERVATIONS</h1>
      </div>
      <h2 className="res-form-heading">PLAN YOUR VISIT</h2>
      <form>
        <div className="container">
          <div className="form-row">
            <div className="control">
              <label htmlFor="id">
                <h3>Label</h3>
              </label>
              <input
                type="text"
                name="name"
                id="id"
                placeholder="placeholder"
              />
            </div>
            <div className="control">
              <label htmlFor="id">
                <h3>Label</h3>
              </label>
              <input
                type="text"
                name="name"
                id="id"
                placeholder="placeholder"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="control">
              <label htmlFor="id">
                <h3>Label</h3>
              </label>
              <input
                type="text"
                name="name"
                id="id"
                placeholder="placeholder"
              />
            </div>
            <div className="control">
              <label htmlFor="id">
                <h3>Label</h3>
              </label>
              <input
                type="text"
                name="name"
                id="id"
                placeholder="placeholder"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="control">
              <label htmlFor="id">
                <h3>Label</h3>
              </label>
              <input
                type="text"
                name="name"
                id="id"
                placeholder="placeholder"
              />
            </div>
            <div className="control">
              <label htmlFor="id">
                <h3>Label</h3>
              </label>
              <input
                type="text"
                name="name"
                id="id"
                placeholder="placeholder"
              />
            </div>
          </div>
          <div className="control full-row">
            <label htmlFor="id">
              <h3>Label</h3>
            </label>
            <input type="text" name="name" id="id" placeholder="placeholder" />
          </div>
          <div className="control full-row">
            <label htmlFor="id">
              <h3>Label</h3>
            </label>
            <input type="text" name="name" id="id" placeholder="placeholder" />
          </div>
          <div className="control full-row">
            <label htmlFor="id">
              <h3>Label</h3>
            </label>
            <input type="text" name="name" id="id" placeholder="placeholder" />
          </div>
          <div className="control full-row">
            <label htmlFor="id">
              <h3>Label</h3>
            </label>
            <textarea name="name" id="id" placeholder="placeholder" rows={5}></textarea>
          </div>
          <div className="form-actions">
            <button className="cta">SUBMIT</button>
          </div>
        </div>
      </form>
    </>
  );
}
