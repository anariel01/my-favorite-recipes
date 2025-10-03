import icons from "./svg";

const Svg = ({ icon: iconName, ...props }) => {
  const Icon = icons[iconName];

  return <Icon {...props} />;
};

export default Svg;
