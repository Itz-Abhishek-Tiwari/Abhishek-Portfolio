export default function Education({ education }) {
  return (
    <>
      <div className="section-about education">
        <h2>Education</h2>

        {education.map((item, index) => {
          return (
            <div className="education-details" key={index}>
              <div className="education-summary">
                <h3>{item.education.institution}</h3>
              </div>
              <div className="education-courses">
                <h3>Details:</h3>
                <ul>
                  <li>
                    {item.education.start_date} - {item.education.end_date}
                  </li>
                  {item.education.degree && <li>{item.education.degree}</li>}
                  <li>CGPA - {item.education.cgpa || 6.5}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
