import CardItem from "../CardItem";
import useFetch from "../useFetch/useFetch";
import style from "./Recipes.module.scss"
export default (props) => {
    const { data, isLoading, error } = useFetch('http://localhost:8000/' + props.link);
    return (
        <div className={style.recipes__cards}>
            {error && <h5>{error}</h5>}
            {isLoading && <h5>Loading...</h5>}
            {data && data.map((item) => (
                <CardItem item={item}/>
            ))}
        </div>
    )
}
