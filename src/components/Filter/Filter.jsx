import {React, Component} from 'react';
import { togCompleted, togUnompleted } from '../../redux/actions';
import styles from './Filter.module.css';

export default class Filter extends Component {
    render() {
        return (
            <div className={styles.Filter}>
                <label className={styles.FilterLabel}>
                    <input type="checkbox" className={styles.ItemCheckBox} onChange={this.toggleCompleted} defaultChecked/>
                    <span className={styles.FilterText}>Completed</span>
                </label>
                <label className={styles.FilterLabel}>
                    <input type="checkbox" className={styles.ItemCheckBox} onChange={this.toggleUncompleted} defaultChecked/>
                    <span className={styles.FilterText}>Uncompleted</span>
                </label>
            </div>
        )
    }

    toggleCompleted = (e) => {
        this.props.store.dispatch(togCompleted());
    }

    toggleUncompleted = (e) => {
        this.props.store.dispatch(togUnompleted());
    }
}