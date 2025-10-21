export default function GeneralInfo({ value, onChange }) {
  const handleChange = (e) => {
    const { name, value: v } = e.target;
    onChange({ ...value, [name]: v });
  };

  return (
    <section className="card">
      <h2>General Information</h2>
      <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Ada Lovelace"
            value={value.name}
            onChange={handleChange}
            autoComplete="name"
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="ada@example.com"
            value={value.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>

        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 555 123 4567"
            value={value.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>
      </form>
      <div className="preview">
        <p>
          <strong>Name:</strong> {value.name || "—"}
        </p>
        <p>
          <strong>Email:</strong> {value.email || "—"}
        </p>
        <p>
          <strong>Phone:</strong> {value.phone || "—"}
        </p>
      </div>
    </section>
  );
}
