export default function Reviews({ review }) {


  return (
    <>
      <div>
        <h2>Reviews From My Teachers</h2>
      </div>

      <div className="reviews">
        {
          review.map((item) => {
            return (
              <div className="review" key={item.id}>
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
