const Card = (props) => {
    // destracturing
    const { id, title, isOpen, setIsOpen } = props

    return (
        <>
        <div key={id}>
            <button className="btn" onClick={() => { setIsOpen(isOpen === id ? null : id) }}>{title}</button>
        </div>
        </>
    )
}

export default Card