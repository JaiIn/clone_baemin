import { createContext,useState } from "react";

const ClickContext = createContext();

const ClickProvider = ({children}) => {
    const [isClicked, setIsClicked] = useState(false);

    const openModal = () => {
        setIsClicked(true);
    };

    const closeModal = () => {
        setIsClicked(false);
    };
    return (
        <ClickContext.Provider value = {{isClicked, openModal, closeModal}}>
            {children}
        </ClickContext.Provider>
    )
}

export {ClickContext, ClickProvider};

