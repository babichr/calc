import React from "react";

class Card extends React.Component{
    render(){
        const { data } = this.props;
        return(
            <div className="card thumbnail">
                <div className="img">
                    <img width="100%" className="img-rounded" src={ data.url } alt=""/>
                </div>
                <h5 className="card__title">
                    {
                        data.title
                    }
                </h5>
            </div>
        )
    }
}



export default Card;
