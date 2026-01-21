import { useState } from "react";

const Card = (props) => {
    // destracturing
    const { id, title, description } = props

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <div key={id}>
            <button className="btn" onClick={() => { setIsOpen(!isOpen); }}>{title}</button>
            </div>{isOpen ? <p>{description}</p> : ""}<div>
        </div>
        </>
    )
}

export default Card