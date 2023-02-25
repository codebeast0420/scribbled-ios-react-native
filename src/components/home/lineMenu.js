import * as React from 'react'
import { Svg, Path, G } from 'react-native-svg'
import { Image } from 'react-native-svg'

const LineMenu = (props) => {
	return (
		// <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" style="border-color: rgba(0,0,0,0);border-width: bpx;border-style: undefined" filter="none" {...props}>
		// 	<G>
		// 		<Path d="M4 5.333h24v2.667h-24v-2.667zM4 14.667h24v2.667h-24v-2.667zM4 24h24v2.667h-24v-2.667z" fill="rgba(16.065,16.065,16.065,1)"></Path>
		// 	</G>
		// </Svg>
		<Image source={props.image}/>
	)
}

export default LineMenu;