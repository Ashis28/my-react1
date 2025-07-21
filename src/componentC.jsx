import ComponentD from "./componentD";
function ComponentC(props) {
    return (
        <div className="box">
            <h2>componentC</h2>
            <ComponentD user = {props.user}/>
        </div>
    );
}

export default ComponentC;