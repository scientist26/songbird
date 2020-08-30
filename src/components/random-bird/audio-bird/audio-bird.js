import React, { useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import birdsData from "../../../data/birdsdata";

import "./audio-bird.css";

// export default class PlayerBirds extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.playerRef = React.createRef();
//   // }

//   render() {
//     const { page, random, right } = this.props;
//     const refContainer = useRef();
//     if (right) {
//       refContainer.current.audio.current.pause();
//     }
//     return (
//       <div className="audio-container">
//         <div className="bird-name">
//           <h3>{right ? birdsData[page][random].name : "*******"}</h3>
//         </div>
//         <div>
//           <div className="audio-player">
//             <AudioPlayer
//               src={birdsData[page][random].audio}
//               onPlay={(e) => console.log("onPlay")}
//               showSkipControls={false}
//               showJumpControls={false}
//               customAdditionalControls={[]}
//               customVolumeControls={[]}
//               autoPlayAfterSrcChange={false}
//               layout="horizontal-reverse"
//               // ref={this.playerRef}
//               ref={refContainer}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const PlayerBirds = ({ page, random, isCorrectBird }) => {
  const refContainer = useRef();

  if (isCorrectBird) {
    refContainer.current.audio.current.pause();
  }

  return (
    <div className="audio-container">
      <div className="bird-name">
        <h3>{isCorrectBird ? birdsData[page][random].name : "*******"}</h3>
      </div>
      <div>
        <div className="audio-player">
          <AudioPlayer
            src={birdsData[page][random].audio}
            onPlay={(e) => console.log("onPlay")}
            showSkipControls={false}
            showJumpControls={false}
            customAdditionalControls={[]}
            customVolumeControls={[]}
            autoPlayAfterSrcChange={false}
            layout="horizontal-reverse"
            ref={refContainer}
          />
        </div>
      </div>
    </div>
  );
};
export default PlayerBirds;
