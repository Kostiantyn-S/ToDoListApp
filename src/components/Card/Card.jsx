import {React, Component} from 'react';
import AddItem from '../AddItem/AddItem';
import CardItem from './../CardItem/CardItem';
import styles from './Card.module.css';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: this.props.store.getState().tasks.map((element, index) => <CardItem 
                                                                                            task={element.text} 
                                                                                            key={element.text} 
                                                                                            store={this.props.store}
                                                                                            completed={element.completed}
                                                                                            index={index}
                                                                                            decor={element.completed}/>)};
        this.refresh();                                                                                    
    }

    render() {
        return (
            <div className={styles.Card}>
                <AddItem store={this.props.store}/>
                <div>
                    {this.state.tasks}
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.store.subscribe(this.refresh);
    }

    refresh = () => {
        let elements =[];
        this.props.store.getState().tasks.forEach(element => {
            if(this.props.store.getState().completed && element.completed) {
                elements.push(element);
            } else if(this.props.store.getState().uncompleted && !element.completed) {
                elements.push(element);
            }    
        });

        this.setState({tasks: elements.map((element, index) => <CardItem 
            task={element.text} 
            key={element.text}
            store={this.props.store}
            completed={element.completed}
            index={index}
            decor={element.completed}/>)});
        //TODO в этом месте this.setState почему то не работает при старте приложения, поэтому при старте збрасываю фильтры.    
        localStorage.setItem(this.props.store.getState().email, JSON.stringify(this.props.store.getState()));
    }
}