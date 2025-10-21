export default function PracticalExperience({ value, onChange }) {
  const handleChange = (e) => {
    const { name, value: v } = e.target;
    onChange({ ...value, [name]: v });
  };

  const responsibilities = (value.responsibilities || "")
    .split(/\r?\n|\u2022|•/)
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <section className="card">
      <h2>Practical Experience</h2>
      <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label htmlFor="company">Company name</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Example Corp"
            value={value.company}
            onChange={handleChange}
            autoComplete="organization"
          />
        </div>

        <div className="field">
          <label htmlFor="position">Position title</label>
          <input
            id="position"
            name="position"
            type="text"
            placeholder="Software Engineer"
            value={value.position}
            onChange={handleChange}
            autoComplete="organization-title"
          />
        </div>

        <div className="field" style={{ gridColumn: '1 / -1' }}>
          <label htmlFor="responsibilities">Main responsibilities</label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            rows={4}
            placeholder={`Example:\n• Built and maintained web apps\n• Collaborated with cross-functional teams`}
            value={value.responsibilities}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="from">From</label>
          <input
            id="from"
            name="from"
            type="text"
            placeholder="Jan 2023"
            value={value.from}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <div className="field">
          <label htmlFor="to">Until</label>
          <input
            id="to"
            name="to"
            type="text"
            placeholder="Present"
            value={value.to}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
      </form>

      <div className="preview">
        <p><strong>Company:</strong> {value.company || '—'}</p>
        <p><strong>Position:</strong> {value.position || '—'}</p>
        <p><strong>Dates:</strong> {(value.from || '—') + ' – ' + (value.to || '—')}</p>
        {responsibilities.length > 0 && (
          <>
            <p><strong>Responsibilities:</strong></p>
            <ul>
              {responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
