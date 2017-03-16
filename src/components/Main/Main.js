import React from "react";
import Header from "../Header";
import { connect } from "react-redux";

class Main extends React.Component{
    render(){
        return(
            <div className="main">
                <Header />
                {
                    this.props.children
                }
            </div>
        )
    }
}

const mapDispatchToProps = ( dispatch ) => ({

});

const mapStateToProps = ( state ) => ({

});

Main = connect(mapDispatchToProps, mapStateToProps)(Main);

export default Main;

