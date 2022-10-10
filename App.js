// import WeatherProject from "./weather/WeatherProject_part1";
// import WeatherProject from "./weather/WeatherProject_part2";
// import WeatherProject from "./weather/WeatherProject_part3";
import WeatherProject from "./weather/WeatherProject";
export default WeatherProject;

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