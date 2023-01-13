
import React, { useState } from 'react';//导入state
import { StyleSheet, Text, TextInput, View, Image, Button, ScrollView, FlatList, SectionList } from 'react-native';














//---------state: 组件的个人数据存储--------
//props: 在渲染时来配置组件, 状态为组件提供内存
//state: 跟踪随时间更改的任何组件数据
//对于处理随时间变化或来自用户交互的数据很有用。

//通过调用useState内部函数声明组件的状态
  //useState创建一个isHungry状态变量
  //可以用useState跟踪任何类型数据：strings,numbers,Booleans,arrays,objects
  //例如，您可以跟踪猫被抚摸的次数const [timesPetted, setTimesPetted] = useState(0)
  /**
   * useState模版：[<getter>, <setter>] = useState(<initialValue>)
   * useState做2件事：
   * 1.创建一个带有初始状态值的‘状态变量’
   * 2.创建一个函数来设置该状态变量的值--setIsHungry
   */

  /**
   * props属性值用花括号
   * <Button
   *   onPress={() => {
   *   setIsHungry(false);
   * }}
   * />
   */

  /**
   * js箭头函数
   * () => {}
   */
// const Cat = (props) => {
//   const [isHungry, setIsHungry] = useState(true);

//   return (
//     <View>
//       <Text>
//         I am {props.name}, and I am {isHungry ? "Hungry" : "full"}!
//       </Text>
      
//       <Button
//         onPress={() => {
//           setIsHungry(false);
//         }}
//         disabled={!isHungry}
//         title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
//       />
//     </View>
//   );
// }

// const Cafe =() => {
//   return (
//     <>
//       <Cat name="Munkustrap" />
//       <Cat name="Spot" />
//     </>
//   );
// }

// export default Cafe;




//------Props属性: 配置组件呈现方式的参数-------
//可以让程序员自定义组件
//-------------JSX中传递JS对象---------------
// const CatApp = () => {
//   return (
//     //style属性接受设计和布局相关的属性值对 的JS对象
//     //JSX中JS值使用{},字符串以外的东西作为属性传递，如数组或数字很简单：<Cat food={["fish", "kibble"]} age={2}/>
//     //但是，JS对象也用{}表示：{width: 200, height: 200}
//     //所以，在JSX中传递JS对象，必须将对象包裹在另一对花括号中{{width: 200, height: 200}}
//     <View>
//       <Image
//         source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
//         style={{ width: 200, height: 200 }}
//       />
//       <Text>Hello, I am your cat!</Text>
//     </View>
//   );
// }

// export default CatApp;

//---------给组件定义属性，并引用组件给该属性赋值-----
//给每个组件<Cat/>传一个不同的props name
// const Cat = (props) => {
//   return (
//     <View>
//       <Text>Hello, I am {props.name}!</Text>
//     </View>
//     );
// }

// const Cafe = () => {
//   return (
//     //使用组件<Cat/>的属性name
//     <View>
//       <Cat name="Maru"/>
//       <Cat name="Jellylorun"/>
//       <Cat name="Spot"/>
//     </View>
//   );
// }

// export default Cafe;


//----引用自定义组件2----
//渲染其他组件的组件都是父组件。这里，Cafe是父组件，每个Cat都是子组件
// const Cat = () => {
//   return (
//     <View>
//       <Text>I am also a cat</Text>
//     </View>
//   );
// }

// const Cafe = () => {
//   return (
//     <View>
//       <Text>Welcome!</Text>
//       <Cat />
//       <Cat />
//       <Cat />
//       <Cat />
//     </View>
//   );
// }
// export default Cafe;

//----自定义组件----
//组件模版：const Cat = () => {}

// const Cat = () => {
//   return (
//     <View>
//       <Text>Hello, I am...</Text>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1
//         }}
//         defaultValue="Name me!"
//       />
//     </View>
//   );
// }


//JSX: 在JavaScript 中嵌入 XML 的语法

//-----JSX: 大括号引用任何JS表达式------
 //任何JS表达式都可以在大括号之间使用，包括如下函数调用{getFullName("Rum", "Tum", "Tugger")}
//  const getFullName = (firstName, secondName, thirdName) => {
//   return firstName + " " + secondName + " " + thirdName;
// }

// const Cat = () => {
//   return (
//     //将花括号视为在JSX中创建JS功能的入口
//     <Text>
//       Hello, I am {getFullName("Rum", "Tum", "Tugger")}!
//     </Text>
//   );
// }

//----JSX: 在JSX中使用变量----
// const Cat = () => {
//     //因为 JSX 是 JavaScript，所以可以在JSX中使用变量
//   const name = "Maru";
//   return (
//     //为猫声明一个名称name，并将其用花括号嵌入<Text>中
//     <Text>Hello, I am {name}!</Text>
//   );
// }

// export default Cat;

// import React from 'react';
// import { Text } from 'react-native';

// const Cat = () => {
//     //您可以将组件视为蓝图。无论函数组件返回什么，都会呈现为React 元素。React元素用于描述UI
//     return <Text>Hello, I am cat!</Text>
// };

// //export default 导出函数组件，以便在整个应用中使用
// export default Cat;