import * as React from "react";
import Svg, { Path, LinearGradient, Stop } from "react-native-svg";

function Unlock(props) {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <Path fill="#c48c00" d="M44 37H4v5a2 2 0 002 2h36a2 2 0 002-2v-5z" />
      <Path fill="#fad500" d="M44 23H4v-5a2 2 0 012-2h36a2 2 0 012 2v5z" />
      <Path fill="#edbe00" d="M4 23h40v7H4z" />
      <Path fill="#e3a600" d="M4 30h40v7H4z" />
      <LinearGradient
        id="prefix__a"
        x1={24}
        x2={24}
        y1={35.373}
        y2={27.155}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#4b4b4b" />
        <Stop offset={1} stopColor="#3b3b3b" />
      </LinearGradient>
      <Path
        fill="url(#prefix__a)"
        d="M27 29a3 3 0 10-6 0 2.99 2.99 0 002 2.816V35a1 1 0 002 0v-3.184A2.99 2.99 0 0027 29z"
      />
      <LinearGradient
        id="prefix__b"
        x1={23.814}
        x2={23.814}
        y1={15.647}
        y2={-0.296}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#92a3b0" />
        <Stop offset={0.015} stopColor="#a3b5c4" />
        <Stop offset={0.032} stopColor="#aec2d1" />
        <Stop offset={0.046} stopColor="#b2c6d6" />
      </LinearGradient>
      <Path
        fill="url(#prefix__b)"
        d="M32.472 10h4.157C35.274 4.27 30.145 0 24 0c-7.18 0-13 5.82-13 13v3h4v-3a9 9 0 019-9c3.916 0 7.236 2.507 8.472 6z"
      />
    </Svg>
  );
}

export default Unlock;
