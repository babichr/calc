import React from "react";
import { connect } from "react-redux";
import { getAllCards } from "../../actions/actions";

class Cards extends React.Component{

    componentWillMount(){
        this.hendleFetch
    }

    render(){

        const { cards } = this.props;

        if ( cards.length ){
            return(
                <div className="cards">
                    <div className="container">
                        <div className="row">
                            {
                                cards.map( (item, i) => {
                                    return (
                                        <div key={ i } className="card">
                                            {
                                                item.title
                                            }
                                        </div>
                                    )
                                } )
                            }
                        </div>
                    </div>
                </div>
            )
        }else{
            return null
        }
    }
}


const mapStateToProps = ( state ) => ({
    cards: state.cardsReduce
});

const mapDispatchToProps = ( dispatch ) => ({
    hendleFetch: dispatch(getAllCards())
});

Cards = connect( mapStateToProps, mapDispatchToProps )(Cards);
export default Cards;