// import BookList from "./src/bestsellers/BookList";
// export default BookList;

// import WeatherProject from "./src/weather/WeatherProject_part1";
// import WeatherProject from "./src/weather/WeatherProject_part2";
// import WeatherProject from "./src/weather/WeatherProject_part3";
// import WeatherProject from "./src/weather/WeatherProject";
// export default WeatherProject;

import Cat from "./src/basic/Cat";
export default Cat;

//---------RN offical flex demo 1 --------
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// const Flex = () => {
//   return (
//     <View style={[styles.container, {
//       // Try setting `flexDirection` to `"row"`.
//       flexDirection: "column"
//     }]}>
//高度：1:2:3
//       <View style={{ flex: 1, backgroundColor: "red" }} />
//       <View style={{ flex: 2, backgroundColor: "darkorange" }} />
//       <View style={{ flex: 3, backgroundColor: "green" }} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
// });

// export default Flex;


// -------------*****RN offical flex demo2------------
// import { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// const FlexDirectionBasics = () => {
//   const [flexDirection, setflexDirection] = useState("column");

//   return (
//     <PreviewLayout
//       label="flexDirection"
//       values={["column", "row", "row-reverse", "column-reverse"]}
//       selectedValue={flexDirection}
//       setSelectedValue={setflexDirection}
//     >
//       <View
//         style={[styles.box, { backgroundColor: "powderblue" }]}
//       />
//       <View
//         style={[styles.box, { backgroundColor: "skyblue" }]}
//       />
//       <View
//         style={[styles.box, { backgroundColor: "steelblue" }]}
//       />
//     </PreviewLayout>
//   );
// };

// const PreviewLayout = ({
//   label,
//   children,
//   values,
//   selectedValue,
//   setSelectedValue,
// }) => (
//   <View style={{ padding: 10, flex: 1 }}>
//     <Text style={styles.label}>{label}</Text>
//     <View style={styles.row}>
//       {values.map((value) => (
//         <TouchableOpacity
//           key={value}
//           onPress={() => setSelectedValue(value)}
//           style={[
//             styles.button,
//             selectedValue === value && styles.selected,
//           ]}
//         >
//           <Text
//             style={[
//               styles.buttonLabel,
//               selectedValue === value && styles.selectedLabel,
//             ]}
//           >
//             {value}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//     <View style={[styles.container, { [label]: selectedValue }]}>
//       {children}
//     </View>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 8,
//     backgroundColor: "aliceblue",
//   },
//   box: {
//     width: 50,
//     height: 50,
//   },
//   row: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   button: {
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     borderRadius: 4,
//     backgroundColor: "oldlace",
//     alignSelf: "flex-start",
//     marginHorizontal: "1%",
//     marginBottom: 6,
//     minWidth: "48%",
//     textAlign: "center",
//   },
//   selected: {
//     backgroundColor: "coral",
//     borderWidth: 0,
//   },
//   buttonLabel: {
//     fontSize: 12,
//     fontWeight: "500",
//     color: "coral",
//   },
//   selectedLabel: {
//     color: "white",
//   },
//   label: {
//     textAlign: "center",
//     marginBottom: 10,
//     fontSize: 24,
//   },
// });

// export default FlexDirectionBasics;

//--------------demo3----------
//from 学习React-Native的正确姿势(一)https://zhuanlan.zhihu.com/p/31894354
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// //wrap 实现了在所在轴向上不能继续延伸而另起一行的效果
// const renderScript2 = () => {
//   return (
//     <View style={{
//       flex: 1,
//       flexDirection: "column",
//       backgroundColor: "grey"
//     }}>
//       <View style={{flex: 1, backgroundColor: "blue"}}/>
//       <View style={{flex: 5, flexDirection: "row", backgroundColor: "skyblue"}}>
//         <View style={{width: 70, backgroundColor: "white"}}/>

//         <View style={{flex: 1, flexDirection: "row", flexWrap: "wrap", backgroundColor: "ppink"}}>
//           <View style={{width: 60, height: 60, margin: 15, backgroundColor: "white"}}/>
//           <View style={{width: 60, height: 60, margin: 15, backgroundColor: "white"}}/>
//           <View style={{width: 60, height: 60, margin: 15, backgroundColor: "white"}}/>
//           <View style={{width: 60, height: 60, margin: 15, backgroundColor: "white"}}/>
//           <View style={{width: 60, height: 60, margin: 15, backgroundColor: "white"}}/>
//           <View style={{width: 60, height: 60, margin: 15, backgroundColor: "white"}}/>
//           <View style={{width: 60, height: 60, margin: 15, backgroundColor: "white"}}/>
//           <View style={{width: 60, height: 60, margin: 15, backgroundColor: "white"}}/>
//           <View style={{width: 60, height: 60, margin: 15, backgroundColor: "white"}}/>

//           <View style={{width:30, height: 30, position: "absolute", right: 0, bottom: 0, backgroundColor: "red"}}/>
//         </View>
//       </View>

//       <View style={{flex: 2, backgroundColor: "stellblue"}}/>
//     </View>
//   );
// }

// export default renderScript2;

// import React from 'react';
// import { Text } from 'react-native';

// const Cat = () => {
//   const name = "Maru";
//   return (
//     <Text>Hello, I am {name}!</Text>
//   );
// }

// export default Cat;

//-------Counter Example using classes-----
// import React, { Component } from 'react'
// import {
//   StyleSheet,
//   TouchableOpacity,
//   Text,
//   View,
// } from 'react-native'

// class App extends Component {
//   state = {
//     count: 0
//   }

//   onPress = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//  render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//          style={styles.button}
//          onPress={this.onPress}
//         >
//          <Text>Click me</Text>
//         </TouchableOpacity>
//         <View>
//           <Text>
//             You clicked { this.state.count } times
//           </Text>
//         </View>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//     marginBottom: 10
//   }
// })

// export default App;

//-------------------
//--------use state by hooks----
// React Native Counter Example using Hooks!
// hooks:无需编写类即可使用状态和其他 React 功能
// 此处使用的hook是useState

// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <View style={styles.container}>
//       <Text>You clicked {count} times</Text>
//       <Button
//         onPress={() => setCount(count + 1)}
//         title="Click me!"
//       />
//     </View>
//   );
// };

// // React Native Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

// export default App;


//-------hello props------
// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//     center: {
//         alignItems: 'center'
//     }
// })

// //自己的组件使用props，可复用。在functional components或class components 中引用this.props.YOUR_PROP_NAME

// //在自定义组件中使用props，定义自定义参数。
// const Greeting = (props) => {
//     return (
//         //创建组件时自定义参数name,该参数被称作props
//         <View style={styles.center}>
//             <Text>Hello {props.name}!</Text>
//         </View>
//     );
// }

// //引用组件
// const LotsOfGreetings = () => {
//     return (
//         <View style={[styles.center, { top: 50 }]}>
//             <Greeting name='Rexxar' />
//             <Greeting name='Jaina' />
//             <Greeting name='Valeera' />
//         </View>
//     );
// }

// export default LotsOfGreetings;


//-----hello world-----
// import React from 'react'; //导入React才能使用JSX，然后将其转换为每个平台的原生组件
// import { Text, View } from 'react-native';

// //定义HelloWorldApp函数，它是一个函数式组件，其行为方式与 React for web 中的行为方式相同.
// //这个函数返回一个View带有一些样式的组件，并且 aText作为它的子组件
// const HelloWorldApp = () => {
//   return (
//     //Text组件允许我们渲染文本，而组件View渲染容器
//     <View
//       style={{
//         flex: 1,//定义您的项目将如何“填充”沿主轴的可用空间。由于我们只有一个容器，它将占用父组件的所有可用空间。在这种情况下，它是唯一的组件，因此它将占用所有可用的屏幕空间。
//         justifyContent: "center", //在容器主轴的中心对齐容器的子项
//         alignItems: "center" //将容器的子级对齐在容器的交叉轴的中心
//       }}>
//       <Text>Hello, world!</Text>
//     </View>
//   )
// }
// export default HelloWorldApp;