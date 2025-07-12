import PropTypes from 'prop-types';
function List(props) {
    // Copy the items array to avoid mutating props
    let objectList = [...props.items];

    // Sort the objects by name before mapping to JSX elements
    objectList.sort((a, b) => a.name.localeCompare(b.name));

    // Map the sorted objects to <li> elements
    let arrayOforderedList = objectList.map(element => (
        <li key={element.id}>
            {element.name}
            <b> : {element.calories}</b>
        </li>
    ));

    
    return (
        <>
            <h3 className="Heading">{props.category}</h3>
            <ol className="MyList">{arrayOforderedList}</ol>
        </>
    );
}

List.PropTypes = {
    category:PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number
        })
    )
}
List.defaultProps={
    cateogry:"cateogry",
    items:[]
}
export default List;