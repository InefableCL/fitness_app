import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addFood, deleteFood, fetchFood} from "../../actions/foodAction";
import style from './testRecipies.module.scss';

const TestRecipes = () => {
    const [value, setValue] = useState("");

    const data = useSelector((state) => state.food);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('data',data)
        if (!data) {
            dispatch(fetchFood());
        }
    }, [data]);

    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(addFood(value));
        setValue("");
    };

    return (
        <>
            {data && (
                <ul>
                    {data.map((el) => (
                        <li key={el.id}>
                            <span> Название рецепта: {el.nameRecipe}</span>
                            <span> Состав рецепта: {el.recipe}</span>
                        </li>
                    ))}
                </ul>
            )}
            <form onSubmit={handlerSubmit}>
                <input className={style.inp}
                       value={value}
                       type="text"
                       placeholder="рецепт"
                       onChange={(e) => setValue(e.target.value)}/>
                <button type="submit">Добавить рецепт</button>
            </form>
            <button className={style.btn}
                    onClick={() => dispatch(deleteFood())}>Удалить рецепт</button>
        </>
    )
}

export default TestRecipes;