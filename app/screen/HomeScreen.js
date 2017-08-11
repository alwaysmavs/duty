import React, {Component} from 'react';
import {StyleSheet, Image, FlatList, Text, View} from 'react-native';
import {connect} from 'dva';
import {window} from '../Theme';
import houseImage from '../images/house.png';
import PropTypes from 'prop-types';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'dribbble',
        tabBarLabel: 'Home',
        tabBarIcon: ({focused, tintColor}) =>
            <Image
                style={[styles.icon, {tintColor: focused ? tintColor : 'gray'}]}
                source={houseImage}
            />,
    };

    static propTypes = {
        shotsListArray: PropTypes.array,
        dispatch: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.keyExtractor = this.keyExtractor.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch({type: 'shot/fetchShotsList'});
    }

    keyExtractor = item => item.id;

    renderItem = ({item}) =>
        <Image
            style={{width: window.width, height: window.width * 3 / 4}}
            source={{uri: item.images.normal}}
        />;

    render() {
        const {shotsListArray} = this.props;

        if (shotsListArray[0].images.normal === '') {
            return (
                <View>
                    <Text>123</Text>
                </View>
            );
        }

        return (
            <FlatList
                data={shotsListArray}
                extraData={this.state}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 32,
        height: 32,
    },
});

function mapStateToProps({shot}) {
    return {
        shotsListArray: shot.shotsListArray,
    };
}

export default connect(mapStateToProps)(HomeScreen);
