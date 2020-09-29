import React,{Component} from 'react';
import {View,Text,ScrollView,FlatList} from 'react-native';
import {Card,ListItem,Icon} from 'react-native-elements';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
function RenderDish(props) {
    const dish=props.dish;

    if(dish!=null){
        return (
            <Card>
            <Card.Title>{dish.name}</Card.Title>
            <Card.Divider/>
            <Card.Image source={require('./images/uthappizza.png')} />
            <Text style={{margin: 10}}>
                {dish.description}
            </Text>
            <Icon
                    raised
                    reverse
                    name={ props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    onPress={() => props.favorite ? console.log('Already favorite') : props.onPress()}
                    />
          </Card>
        )
    }
    else {
        return(<View></View>)
    }
    
}
function RenderComments(props){
    const comments=props.comments;
    const renderCommentItem=({item,index})=>{
        return(
            <ListItem>
          <ListItem.Content>
            <ListItem.Title>{item.comment}</ListItem.Title>
            <ListItem.Subtitle style={{color:'#000000'}}>{item.rating+'stars'}</ListItem.Subtitle>
        <ListItem.Subtitle>{'--'+item.author+', '+item.date}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        )

    }
    return(
        <Card>
         <Card.Title>Comments</Card.Title>
         <Card.Divider/>
        
      <FlatList 
          data={props.comments}
          renderItem={renderCommentItem}
          keyExtractor={item => item.id.toString()}/>

          
          </Card>

    )
}

export default class Dishdetail extends Component{
constructor(props){
    super(props);
    this.state={
        dishes:DISHES,
        comments:COMMENTS,
        favorites:[]
    }
}

markFavorite(dishId) {
    this.setState({favorites: this.state.favorites.concat(dishId)});
}
    render(){
        const { dishId } = this.props.route.params;
        return(
            //+ changes string into number
            <ScrollView>
                  <RenderDish dish={this.state.dishes[+dishId]}
                    favorite={this.state.favorites.some(el => el === dishId)}
                    onPress={() => this.markFavorite(dishId)} 
                    />
                  <RenderComments comments={this.state.comments.filter((comment) => comment.dishId === dishId)} />
            </ScrollView>
           
          
           
        )
    }
   
}