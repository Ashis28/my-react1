//useEffect 
import React , {useState,useEffect} from 'react';
/*
function MyComponent(){

    let [count,setCount] = useState(0);
    let [color,setColor] = useState("green");

    function increaseCnt(){
        setCount(c => c + 2);
    }

    function changeClr(){
        setColor(c => c==="green"?"red":"green");
    }
    // useEffect(()=>{
    //     document.title = `count : ${count}`
    // },[]);

    useEffect(()=>{
        document.title = `count : ${count}`;

        return () => {
            //some cleanup code
        }
    },[color]);
    
    return(
        <div>
            <p style={{color : color}}>count : = {count}</p>
            <button onClick={increaseCnt}>inc</button>

            <button onClick={()=>{ setCount(c=>c-1)}}>dec</button>

            <button onClick={changeClr}>changeClr</button>
        </div>
       
    );
}
*/

function MyComponent(){

    let [height, setHeight] = useState(window.innerHeight);
    let [width , setWidth] = useState(window.innerWidth);
    
    // window.addEventListener("resize",()=>setWidth(window.innerWidth));
    // console.log("Event listener added")
    // window.addEventListener("resize",()=>setHeight(window.innerHeight));

    // it will print thousand event listener added

    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("Event listener added");
        //window.addEventListener("resize",()=>setHeight(window.innerWidth));

        return() => { 
            window.removeEventListener("resize",handleResize);
            console.log("Event listener resized");
        }

    },[])

    //also we can use more then one useEffect as well like 
    useEffect(()=>{
        document.title = ` size = width :  ${width} x hieght: ${height};`

    },[width])

    function handleResize(){
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    return(
        <div>
            <p > Height : {height}</p>
            <p> width : {width} </p>
        </div>
       
    );
}
export default MyComponent;