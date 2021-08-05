import {React, Component} from 'react';
import styles from './CardItem.module.css';
import { CloseButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { deleteTask, complete, uncomplete } from '../../redux/actions';

export default class CardItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task,
            completed: this.props.completed,
            decoration: this.props.decor ? {textDecoration: 'line-through', color: 'red'} : {textDecoration: 'none', color: 'grren'}
        }
    }

    render() {
        return (
            <div className={styles.CardItem}>
                <label className={styles.ItemLabel}>
                    <input 
                        type="checkbox" 
                        className={styles.ItemCheckBox} 
                        onChange={this.onCheck}
                        defaultChecked={this.state.completed}/>
                    <div 
                        className={styles.ItemText} 
                        style={this.state.decoration}>{this.state.task}</div>
                </label>
                <CloseButton className={styles.ItemDel} onClick={this.deleteTask}/>
            </div>
        )
    }

    onCheck = (e) => {
        if(e.target.checked) {
            this.props.store.dispatch(complete(this.state.task));
        } else {
            this.props.store.dispatch(uncomplete(this.state.task));
        }
        this.refresh();
    }

    refresh = () => {
        const el = this.props.store.getState().tasks[this.props.index];
        this.setState({
            completed: el.completed,
            decoration: el.completed ? {textDecoration: 'line-through', color: 'red'} : {textDecoration: 'none', color: 'green'}
        });
    }

    deleteTask = (e) => {
        this.props.store.dispatch(deleteTask(this.state.task));
    }
}