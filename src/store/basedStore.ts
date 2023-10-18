import { useState, useEffect } from "react";
import { Based } from "../utils/types";

const useBased = () => {
  const [basedList, setBasedList] = useState<Array<Based>>([]);

  //localStorage.removeItem("based_list");

  useEffect(() => {
    const storedBaseList = localStorage.getItem("based_list");
    if (storedBaseList) {
      setBasedList(JSON.parse(storedBaseList));
    }
  });

  const updateBasedList = (newList: Array<Based>): void => {
    setBasedList(newList);
    localStorage.setItem("based_list", JSON.stringify(newList));
  };

  const saveBased = (data: Based): void => {
    updateBasedList([...basedList, data]);
  };

  const getBasedById = (id: number): Based => {
    return getAllBased().find((item) => item.id === id);
  };

  const getAllBased = (): Array<Based> => {
    //return basedList;
    return JSON.parse(localStorage.getItem("based_list")) ?? basedList;
  };

  const setBasedById = (id: number, data: Based): void => {
    const updatedBasedList = basedList.map((item) =>
      item.id === id ? data : item,
    );
    updateBasedList(updatedBasedList);
  };

  const deleteBasedById = (id: number): void => {
    const updatedBasedList = basedList.filter((item) => item.id !== id);
    updateBasedList(updatedBasedList);
  };

  return {
    saveBased,
    getBasedById,
    getAllBased,
    setBasedById,
    deleteBasedById,
    updateBasedList,
  };
};

export default useBased;
