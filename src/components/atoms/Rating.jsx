import '../../styles/atoms/rating.css';

function Rating({ score, year, duration }) {
  return (
    <h3 className="info">
      <i className="fa-solid fa-star" /> | {score}/100 | {year} | {duration}
    </h3>
  )
}
export default Rating