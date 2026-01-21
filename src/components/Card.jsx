const Card = (props) => {
    // destracturing
    const {id, title, description} = props

  return (
    <div className="container" key={id}>
        <button className="btn">{title}</button>
        <p>{description}</p>
     </div>
  )
}

export default Card