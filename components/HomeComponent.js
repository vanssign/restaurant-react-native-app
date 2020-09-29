import React,{Component} from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
function RenderItem(props) {
    
    const item = props.item;
    
    if (item != null) {
        return(
            <Card containerStyle={{paddingHorizontal:0}}> 
             <Card.Title>{item.name}</Card.Title>
            <Card.Image source={require('./images/uthappizza.png')} />
           
            <Text style={{padding: 10}}>
                {item.description}
            </Text>
        </Card>
        );
    }
    else {
        return(<View></View>);
    }
}


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          dishes: DISHES,
          promotions: PROMOTIONS,
          leaders: LEADERS
        };
    }

    static navigationOptions = {
        title: 'Home',
    };

    render() {
        
        return(
            <ScrollView>
                <RenderItem item={this.state.dishes.filter((dish) => dish.featured)[0]} />
                <RenderItem item={this.state.promotions.filter((promo) => promo.featured)[0]} />
                <RenderItem item={this.state.leaders.filter((leader) => leader.featured)[0]} />
            </ScrollView>
        );
    }
}