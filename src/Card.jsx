import React from "react";
import Star from "./Star";
function Card(props){
    return(
        <>
        <div className="cards">
            <div className="card">
                <div className="heading">
                    <p>{props.title}</p>
                    <p className="subtext">dsalkdka</p>
                </div>
                <div className="main_part">
                    <div className="detail">
                        <div className="intro">
                            <p>
                                {props.intro}
                            </p>
                        </div>
                        <div className="author">
                            <img src={props.imgsrc} height="20px" width="20px"/>
                            <span className="name">{props.sname}</span>
                        </div>
                        <div className="rating1">
                            <Star/>
                        </div>
                        <div className="rating2">
                            <Star/>
                        </div>
                        <div className="info">
                            <h2>today is special</h2>
                        </div>
                        <div className="btn">
                            <button className="btn1">See Class Schedule </button>
                            <button className="btn2"> Save</button>
                            <button className="btn3">Share=</button>
                        </div>
                    </div>
                    <div className="img_part">
                        <img src={props.imgsrc} height="250px" width="300px"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Card;