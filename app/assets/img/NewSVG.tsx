import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={13} height={13} viewBox="0 0 13 13" fill="none" {...props}>
    <Path
      fill={props.fill}
      fillRule="evenodd"
      d="M7 0H6v6H0v1h6v6h1V7h6V6H7V0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
