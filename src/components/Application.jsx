import {React, Component} from 'react';
import styles from './Application.module.css';
import Header from './Header/Header';
import Filter from './Filter/Filter';
import Card from './Card/Card';
import { createStore } from 'redux';
import { rootReducer } from '../redux/rootReducer';
import { resetFilters } from '../redux/actions';

export default class Application extends Component {
    initialState = this.props.appState;
    store = createStore(rootReducer, this.initialState);

    render() {
        return (
            <div className={styles.Application}>
                <Header header={"Your ToDo List"}/>
                <Card store={this.store}/>
                <Filter store={this.store}/>
            </div>
        )
    }

    componentDidMount() {
        this.store.dispatch(resetFilters());
    }
}