import { useState } from "react";
function CustomComponent() {
    const [x, setx] = useState(10);

    return (
        <>

        <button onClick={() => {setx(x+1); 
        console.log(x);
        }}>click me</button>
        {x}
        </>
    );
}
export default CustomComponent;