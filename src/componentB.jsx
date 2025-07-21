import ComponentC from "./componentC";
function ComponentB(props) {
    return (
        <div className="box">
            <p>componentB</p>
            <ComponentC user = {props.user}/>
        </div>
    );
}

export default ComponentB;