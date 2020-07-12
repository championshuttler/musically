import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { connect } from 'react-redux'
import { removeItem } from './actions/cartActions';
import RemoveIcon from '../negative.png';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import '../App.css';

class Sidebar extends Component {

    //to remove the item completely
    handleRemove = (id, name) => {
        this.props.removeItem(id);
        ToastsStore.error(name + " is removed from favorites");
    }

    render() {
        let addedItems2 = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (

                        <div key={item.id}>
                            <div className="item-desc">
                                <a href={`/srcitem/${item.id}`} className="link"><span className="title">{item.name}</span></a>
                                <div className="add-remove">
                                    <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(item.id, item.name) }}><img src={RemoveIcon} alt="Artists" style={{ width: 50, display: 'block', margin: 'auto' }} /></button>
                                </div>
                                <ToastsContainer store={ToastsStore} />
                            </div>

                        </div>

                    )
                })
            ) :

            (
                <p>Add some artist to favourites first.</p>
            )
        return (
            <Menu>
                <div className="container">
                    <div className="cart">
                        <h5>Favorites</h5>
                        <ul className="collection">
                            {addedItems2}
                        </ul>
                    </div>
                </div>
            </Menu>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)