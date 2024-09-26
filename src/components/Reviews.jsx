export default function Reviews({ reviews }) {

  return (
    <>
      <div>
        <h2>Reviews From My Teachers</h2>
      </div>

      <div className="reviews">
        {
          reviews.recommendations.map((item, index) => {
            return (
              <div className="review" key={index}>
                <p>{item.feedback}</p>
                <p><strong>{item.professor}</strong><br />{item.title}</p>
              </div>
            )
          })
        }
      </div>
      <div>
        <p>&#169; All rights reserved 2025</p>
      </div>
    </>
  )
}
