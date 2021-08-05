import {React, Component} from 'react';
import { newTask } from '../../redux/actions';
import styles from './AddItem.module.css';

export default class AddItem extends Component {
    render() {
        return (
            <div>
                <form className={styles.AddItem}>
                    <input type="text" className={styles.TextField} onChange={this.getInputValue}></input>
                    <button className={styles.AddButton} onClick={this.addTask}>add</button>
                </form>
            </div>
        )
    }

    addTask = (e) => {
        e.preventDefault();
        if(!this.validation(this.inputValue)) return;
        this.props.store.dispatch(newTask(this.inputValue));
        this.input.value = "";
        this.inputValue = "";
    }

    getInputValue = (e) => {
        this.inputValue = e.target.value;
        this.input = e.target;
    }

    validation = (text) => {
        if(!text) return false;

        const tasks = this.props.store.getState().tasks;
        for(let i = 0; i < tasks.length; i++) {
            if(tasks[i].text === text) return false;
        }

        return true;
    }
}