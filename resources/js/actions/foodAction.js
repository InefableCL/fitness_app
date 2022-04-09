const { SET_FOOD } = require("../store/types/foodTypes");

export const setFood = (data) => ({
    type: SET_FOOD,
    payload: data,
});

export const fetchFood = () => (dispatch) => {
    fetch("http://localhost:3001/food")
        .then((response) => response.json())
        .then((data) => dispatch(setFood(data)));
};

export const deleteFood = () => {
    fetch("http://localhost:3001/food?id=1", {
        method: "DELETE",
    });
};

export const addFood = (value) => (dispatch) => {
    fetch("http://localhost:3001/food", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // body: value,
        body: JSON.stringify({value}),
    })
        .then((response) => response.json())
        .then((newData) => dispatch(setFood(newData)));
};
