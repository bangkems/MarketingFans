import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "../screens";
import OfferScreen from "../screens/offer/index";
import OfferDetail from "../screens/offer/detail";
import Login from "../screens/OTP/Login";
import Welcome from "../screens/OTP/Welcome";
import OnboardingFans from "../screens/OnboardingFans";
import MyRewards from "../screens/reward";
import DetailReward from "../screens/reward/DetailReward";
import DetailReward_Komisi from "../screens/reward/DetailReward_Komisi";
import DetailReward_Hadiah from "../screens/reward/DetailReward_Hadiah";
import UbahDetailPengiriman from "../screens/reward/UbahDetailPengiriman";
import UbahDetailRekening from "../screens/reward/UbahDetailRekening";

const StackNavigator = createStackNavigator(
  {
    IndexScreen: {
      screen: IndexScreen,
    },
    OfferScreen: {
      screen: OfferScreen,
    },
    OfferDetail: {
      screen: OfferDetail,
    },
    Login: {
      screen: Login,
    },
    Welcome: {
      screen: Welcome,
    },
    OnboardingFans: {
      screen: OnboardingFans,
    },
    MyRewards: {
      screen: MyRewards,
    },
    DetailReward: {
      screen: DetailReward,
    },
    UbahDetailPengiriman: {
      screen: UbahDetailPengiriman,
    },
    DetailReward_Komisi: {
      screen: DetailReward_Komisi,
    },
    UbahDetailRekening: {
      screen: UbahDetailRekening,
    },
    DetailReward_Hadiah: {
      screen: DetailReward_Hadiah,
    },
  },
  {
    initialRouteName: "OnboardingFans",
    headerMode: "none",
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: "#FFF" },
    },
  }
);

export default createAppContainer(StackNavigator);
