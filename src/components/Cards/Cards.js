import React from "react";
import { connect } from "react-redux";
import { getAllCards } from "../../actions/actions";
import InfiniteScroll from 'react-infinite-scroller';
import Card from "../Card/Card";

class Cards extends React.Component{

    componentWillMount(){
        this.props.hendleFetch(this.props.data.step)
    }

    render(){

        const { data, hendleFetch } = this.props;
        const { cards, step } = data;

        if ( cards.length ){
            return(
                <div className="cards" style={{ "padding": "60px 0" }}>
                    <div className="container">
                        <div className="row">
                            <InfiniteScroll
                                pageStart={0}
                                loadMore={ hendleFetch }
                                hasMore={true || false}
                                threshold={ 80 }
                                loader={<div className="loader">Loading ...</div>}
                            >
                            {
                                cards.map( (item, i) => {
                                    return (
                                        <div key={ i } style={ { "display": "inline-block", "float": "none", "verticalAlign": "top" } } className="cards__item col-md-4 col-sm-6">
                                            <Card data={ item } />
                                        </div>
                                    )
                                } )
                            }
                            </InfiniteScroll>
                        </div>
                        <div className="text-center">
                            <div className="btn btn-primary" onClick={ () => { hendleFetch(step) } } > Load more </div>
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
    data: state.cardsReduce
});

const mapDispatchToProps = ( dispatch ) => ({
    hendleFetch: (step) => { dispatch(getAllCards(step)); }
});

Cards = connect( mapStateToProps, mapDispatchToProps )(Cards);
export default Cards;