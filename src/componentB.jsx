import ComponentC from "./componentC";
function ComponentB() {
    return (
        <div className="box">
            <p>componentB</p>
            <ComponentC/>
        </div>
    );
}

export default ComponentB;