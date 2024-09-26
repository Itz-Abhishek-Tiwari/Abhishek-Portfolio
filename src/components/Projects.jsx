import PropTypes from 'prop-types';
export default function Projects({ projects }) {

  return (
    <>
      <section className="section-about">
        <h2>Projects</h2>
        <ul className="project-list">
          {
            projects.projects_title.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </section>

    </>
  )
}
// PropTypes validation
Projects.propTypes = {
  projects: PropTypes.shape({
    projects_title: PropTypes.arrayOf(PropTypes.string).isRequired, // Adjust type based on your data structure
  }).isRequired,
};
