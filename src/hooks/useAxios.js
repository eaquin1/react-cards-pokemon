import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = (baseUrl, url="") => {
    const [cards, setCards] = useState([]);
    const addCard = async () => {
        const response = await axios.get(
            baseUrl + url
        );
        setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
    };

    return [cards, addCard]
};

export default useAxios;
