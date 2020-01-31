// import React, { Component } from 'react'
// import { Text, View, Button, StyleSheet } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import AsyncStorage from '@react-native-community/async-storage';

// import { goToLogin } from '../navigation'
// export default class Home extends Component {

//     logout = async () => {
//         await AsyncStorage.removeItem('username');
//         goToLogin();
//     }
//     render() {
//         const { username } = this.props;

//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text style={{ fontSize: 18, color: 'red' }}> Hello {username}</Text>
//                 <Button

//                     onPress={this.logout}
//                     title="Logout"
//                     color="#841584"
//                 />
//             </View>
//         )
//     }
// }





import React, { Component } from 'react'
import { Text, View, Button, SafeAreaView, Image, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'

const { width, height } = Dimensions.get('window')
export default class Home extends Component {
    static options() {
        return {
            topBar: {
                visible: false
            }
        }
    }
    gotoScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 20, letterSpacing: 1, marginVertical: 10 }}>BookWormSuzie</Text>

                    <View style={{ flexDirection: 'row', width: '100%', height: 150, paddingHorizontal: 20, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>

                        <View style={{ justifyContent: 'center', alignItems: 'center', }}>


                            <TouchableOpacity onPress={() => alert("image upload")}>
                                <Image source={require('./images/splash.jpeg')} style={{ width: 120, height: 100 }} />
                                <Text style={{ color: '#10A881', textDecorationLine: 'underline', fontSize: 15, letterSpacing: 1.5, textAlign: 'center', marginTop: 5 }}>Edit profile</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{ marginHorizontal: 20, marginTop: 10, width: 250, height: 100, }}>
                            <Text style={{ fontSize: 20, letterSpacing: 1.5, }}>About Me...</Text>
                            <Text style={{ letterSpacing: 1, paddingTop: 3, }}
                                textBreakStrategy="highQuality"
                            >I love to find cosy cafes & peaceful spots in cities all over
                                               the world,where I can curl up with a good book and relax.
                                  </Text>
                        </View>

                    </View>


                    <View style={{ marginTop: 20 }}>


                        <View style={styles.labels}>
                            <Text style={{ fontSize: 18, letterSpacing: 1 }}>My Maps</Text>
                            <TouchableOpacity onPress ={()=>this.gotoScreen("Maps")}>
                                <Image source={require('./images/pin.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 18, letterSpacing: 1 }}>My Preferences</Text>
                            <TouchableOpacity onPress={() => alert("preferences")}>
                                <Image source={require('./images/control.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 18, letterSpacing: 1 }}>Reviews</Text>
                            <TouchableOpacity onPress={() => alert("reviews")}>
                                <Image source={require('./images/star.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 18, letterSpacing: 1 }}>Notifications</Text>
                            <TouchableOpacity onPress={() => alert("notifications")}>
                                <Image source={require('./images/bell.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 18, letterSpacing: 1 }}>Invite Friends</Text>
                            <TouchableOpacity onPress={() => alert("invite freinds")}>
                                <Image source={require('./images/friends.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 18, letterSpacing: 1 }}>My Earnings</Text>
                            <TouchableOpacity onPress={() => alert("earnings")}>
                                <Image source={require('./images/profit.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 18, letterSpacing: 1 }}> Help</Text>
                            <TouchableOpacity onPress={() => alert("help")}>
                                <Image source={require('./images/question.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 18, letterSpacing: 1 }}>Terms of Service</Text>
                            <TouchableOpacity onPress={() => alert("services")}>
                                <Image source={require('./images/accept.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 18, letterSpacing: 1 }}>Give Feedback</Text>
                            <TouchableOpacity onPress={() => alert("feedback")}>
                                <Image source={require('./images/feedback.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 18, letterSpacing: 1 }}>Log Out</Text>
                            <TouchableOpacity onPress={() => alert("LogOut")}>
                                <Image source={require('./images/logout.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,

    },
    labels: {
        flexDirection: 'row',
        width: width,
        height: 50,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 10
    }
})