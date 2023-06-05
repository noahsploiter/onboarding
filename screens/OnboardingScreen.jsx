import { View, Text, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const DotComponent = ({ selected }) => {
    return (
      <View
        className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${
          selected ? "border border-red-400" : ""
        }  p-2`}
      >
        <View
          className={`w-2 h-2 ${
            selected ? "bg-red-400" : "bg-red-200"
          } rounded-full`}
        ></View>
      </View>
    );
  };

  return (
    <Onboarding
      onSkip={() => navigation.replace("Home")}
      onDone={() => navigation.replace("Home")}
      DotComponent={DotComponent}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/img/1.png")}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Slider 1 ",
          subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptate!.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/img/2.png")}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Slider 2",
          subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptate!.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/img/3.png")}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Slider 3",
          subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptate!.",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
