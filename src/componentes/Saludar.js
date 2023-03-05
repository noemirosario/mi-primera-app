import React from "react";

export default function Saludar(props){
    // console.log(props.name); 
    // console.log(props.userInfo.nombre);
    // const saludar = () => {
    //     console.log("hola noemi")
    // }

    const { userInfo, saludarFn} = props;
    console.log(props);
    const {nombre = "persona"} =userInfo;
    return (

        
        <div>
            {/* <p>
                Hola {props.userInfo.nombre}, 
                tienes {props.userInfo.edad},
                tu color fav es el {props.userInfo.color}
            </p> */}
            <button onClick={ () => saludarFn(nombre)}>
                saludar 
            </button>
            {/* <h2>Hola {props.name} tienes {props.age} años</h2> */}
        </div>
    )
}