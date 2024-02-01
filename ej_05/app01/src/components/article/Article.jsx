

export const Article = ({title, children}) => {
    

    return (
        <article className="article">
            <h2>{title}</h2>
            <div>{children}</div>

        </article>
    )
}
export default Article 