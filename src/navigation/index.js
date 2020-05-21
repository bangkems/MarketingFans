import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "../screens";
import OfferScreen from "../screens/offer/index";
import OfferDetail from "../screens/offer/detail";
import Login from "../screens/OTP/Login";
import LoginKirimUlang from "../screens/OTP/LoginKirimUlang";
import Welcome from "../screens/OTP/";
import OnboardingFans from "../screens/onboarding";
import MyRewards from "../screens/reward";
import DetailReward from "../screens/reward/DetailReward";
import DetailReward_Komisi from "../screens/reward/DetailReward_Komisi";
import DetailReward_Hadiah from "../screens/reward/DetailReward_Hadiah";
import UbahDetailPengiriman from "../screens/reward/UbahDetailPengiriman";
import UbahDetailRekening from "../screens/reward/UbahDetailRekening";
import Referral from "../screens/referral";
import DetailReferral from "../screens/referral/DetailReferral";
import UbahKodeReferral from "../screens/referral/UbahKodeReferral";
import Profile from "../screens/profile";
import UpdateProfileFans from "../screens/profile/UpdateProfileFans";

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
    LoginKirimUlang: {
      screen: LoginKirimUlang,
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
    Referral: {
      screen: Referral,
    },
    DetailReferral: {
      screen: DetailReferral,
    },
    UbahKodeReferral: {
      screen: UbahKodeReferral,
    },
    Profile: {
      screen: Profile,
    },
    UpdateProfileFans: {
      screen: UpdateProfileFans,
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
