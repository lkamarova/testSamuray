const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"

let initialState = {
    users: [
      { id: 1, photoUrl: "https://media.krasota.ru/filer_public/c0/fe/c0fe74a2-987a-4f11-9e0f-b601ebf6d812/1_res750.jpg", followed: false, fullName: "Lilija", status: "I am a programmist", location: {country: "Georgia", city: "Batumi"} },
      { id: 2, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVdzoo-EGKhFrmB2kzzAAH8WCmmKVn2JiNw&usqp=CAU", followed: true, fullName: "Lia", status: "I am a programmist too", location: {country: "Belarus", city: "Minsk"} },
      { id: 3, photoUrl: "https://lh3.googleusercontent.com/ycBQs16tz6ex8aX8WQOKa9FNFUd96B0iBKIuQ_mtT26AhcEelV25xVA-rym5XnExVP61vHtGH7_ku1aJYxVmVgyGbVLjXXmOeIH3VP8d-VPDjZf5lXfmvwQZUcO4BEL1=s412", followed: false, fullName: "Dmitry", status: "I am a programmist too", location: {country: "Spain", city: "Malaga"} },
    ],
  }

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
      case FOLLOW: {
        return {
          ...state, 
          users: state.users.map( u => {
            if (u.id === action.userId) {
              return {...u, followed: true}
            }
            return u; 
          })
          //users: [...state.users] эта запись индентична users: state.users.map( u => u)
        }    
      }

    case UNFOLLOW: {
        return {
          ...state, 
          users: state.users.map( u => {
            if (u.id === action.userId) {
              return {...u, followed: false}
            }
            return u; 
          })
          //users: [...state.users] эта запись индентична users: state.users.map( u => u)
        }    
      }

    case SET_USERS: {
      return {...state, users:[...state.users, ...action.users] }
    }  
      default: return state;  
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });


export default usersReducer;