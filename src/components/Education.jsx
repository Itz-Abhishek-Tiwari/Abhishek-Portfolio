export default function Education({ education }) {

  return (
    <>
      {
        <div className="section-about education">
          <h2>Education</h2>

          {education.map((item, index) => {
            return (
              <div className="education-details" key={index}>
                <div className="education-summary">
                  <h3>{item.institution}</h3>
                </div>
                <div className="education-courses">
                  <h3>Details:</h3>
                  <ul>
                    <li>
                      {item.start_date} - {item.end_date}
                    </li>
                    {item.degree && <li>{item.degree}</li>}
                    <li>CGPA - {item.cgpa || 6.5}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      }
    </>
  );
}
