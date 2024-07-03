import {createStore} from "react-redux";

const onClick = "onCliked"
const nonClicked = "nonCliekd";

const ClickModifier = (isClick = false, action) => {
    if(action.type === onClick){
        return true;
    } else if(action.type === nonClicked){
        return false;
    }
};

const ClickStore = createStore(ClickModifier);

export default ClickStore;