import React from "react";

function Form({ reducer: [state, dispatch] }) {
    
    function onSubmitHandler(e) {
        e.preventDefault();
        dispatch({type: "DELETE"});
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input
                type="text"
                name="alias"
                id="alias"
                value={state.alias}
                onChange={(e) =>
                    dispatch({ type: "MODIFY", payload: e.target })
                }
            />
            <input
                type="number"
                name="age"
                id="age"
                value={state.age}
                onChange={(e) =>
                    dispatch({ type: "MODIFY", payload: e.target })
                }
            />

            <label htmlFor="yes">oui</label>
            <input
                type="radio"
                name="isAdmin"
                id="yes"
                value="yes"
                onChange={(e) =>
                    dispatch({ type: "MODIFY_ROLE", payload: e.target })
                }
                checked={state.isAdmin}
            />
            
            <label htmlFor="no">non</label>
            <input
                type="radio"
                name="isAdmin"
                id="no"
                checked={!state.isAdmin}
                value="no"
                onChange={(e) =>
                    dispatch({ type: "MODIFY_ROLE", payload: e.target })
                }
            />

            <input type="submit" value="delete" />
        </form>
    );
}

export default Form;
