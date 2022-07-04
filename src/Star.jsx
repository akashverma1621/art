import React from "react";
import {FaStar} from 'react-icons/fa';


const Star=()=>{
    return(
        <>
        {
            [...Array(5)].map((item,index)=>{
                
                return(
                    <label>
                        <FaStar 
                        color={
                            "rgb(192,192,192)"
                        }/>
                    </label>
                )
            })
        }
        </>
    )
}
export default Star;