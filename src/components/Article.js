function Article({ title, date, preview }) {
    const defaultDate = date || "January 1, 1970";
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{defaultDate}</small>
        <p>{preview}</p>
      </article>
    );
  }

  export default Article