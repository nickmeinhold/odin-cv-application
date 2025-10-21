export default function Education({ value, onChange }) {
  const handleChange = (e) => {
    const { name, value: v } = e.target;
    onChange({ ...value, [name]: v });
  };

  return (
    <section className="card">
      <h2>Education</h2>
      <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label htmlFor="school">School name</label>
          <input
            id="school"
            name="school"
            type="text"
            placeholder="University of Example"
            value={value.school}
            onChange={handleChange}
            autoComplete="organization"
          />
        </div>

        <div className="field">
          <label htmlFor="title">Title of study</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="B.Sc. in Computer Science"
            value={value.title}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="date">Date of study</label>
          <input
            id="date"
            name="date"
            type="text"
            placeholder="2018 – 2022"
            value={value.date}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="preview">
        <p>
          <strong>School:</strong> {value.school || "—"}
        </p>
        <p>
          <strong>Title:</strong> {value.title || "—"}
        </p>
        <p>
          <strong>Date:</strong> {value.date || "—"}
        </p>
      </div>
    </section>
  );
}
