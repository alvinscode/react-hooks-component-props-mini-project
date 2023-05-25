function About(props) {
    const placeholderImg = "https://via.placeholder.com/215"
    return (
        <aside>
            <img
                src={props.image || placeholderImg} 
                alt="blog logo"
            />
            <p>{props.about}</p>
        </aside>
    )
}

export default About