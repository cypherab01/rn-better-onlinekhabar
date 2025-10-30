import React from "react";
import { Text as RNText, StyleSheet, TextProps } from "react-native";

type FontVariant =
  | "ExtraLight"
  | "Light"
  | "Regular"
  | "Medium"
  | "SemiBold"
  | "Bold"
  | "ExtraBold";

interface Props extends TextProps {
  variant?: FontVariant;
  children: React.ReactNode;
}

const CText: React.FC<Props> = ({
  variant = "Regular",
  style,
  children,
  ...rest
}) => {
  const fontFamily = `Mukta-${variant}`;

  return (
    <RNText style={[styles.base, { fontFamily }, style]} {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  base: {
    color: "#111",
    fontSize: 16,
  },
});

export default CText;
