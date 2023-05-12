import React, { useReducer } from "react";
import Form from "./Form";
import { userReducer, initialState } from "./reducer";

function User() {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <>
            <ul>
                <li>{state.alias ? state.alias : "pas de donnée"}</li>
                <li>{state.age ? state.age + " an(s)" : "pas de donnée"}</li>
                <li>{state.isAdmin ? "est admin 👍 " : "n'est rien 👎"}</li>
            </ul>

            {/* lifting state up */}
            <Form reducer={[state, dispatch]} />
        </>
    );
}

export default User;
