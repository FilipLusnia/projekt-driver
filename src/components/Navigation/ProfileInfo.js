import React, {useState} from 'react';
import {connect} from 'react-redux';
import icon from '../../resources/user-icon.png';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

function ProfileInfo(props) {

  const [displayInfo, setDisplayInfo] = useState();

  useScrollPosition(({ prevPos, currPos }) => {
    if((currPos.y <= -200)){
      setDisplayInfo({display: 'none'})
    } else{
      setDisplayInfo(null)
    }
  },[], false, false, 200)

  return (
    <div style={displayInfo} className="profileinfo_container">
      <div>
          <p>{props.name} {props.surName}</p>
          {props.level === 10
          ?
            <p className="profileinfo_level">POZIOM: {props.level} 
            <span className="profileinfo_max_level"> (MAX)</span></p>
          :
            <p className="profileinfo_level">POZIOM: {props.level}</p>
          }
          <p className="profileinfo_points">PUNKTY: {props.points}</p>
      </div>
      <img src={icon} alt="profile pic" className="profileinfo_picture"></img>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    points: state.firebase.profile.points,
    name: state.firebase.profile.name,
    surName: state.firebase.profile.surname,
    level: state.firebase.profile.level
  }
}

export default connect(mapStateToProps)(ProfileInfo);