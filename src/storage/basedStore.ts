import { useState, useEffect } from "react";
import { Based } from "../types";

const useBased = () => {
  const [basedList, setBasedList] = useState<Array<Based>>([]);

  //localStorage.removeItem("based_list");

  useEffect(() => {
    const storedBaseList = localStorage.getItem("based_list");
    if (storedBaseList) {
      setBasedList(JSON.parse(storedBaseList));
    }
  }, []);

  const updateBasedList = (newList: Array<Based>): void => {
    setBasedList(newList);
    localStorage.setItem("based_list", JSON.stringify(newList));
  };

  const saveBased = (data: Based): void => {
    const allBased = getAllBased()
    updateBasedList([...allBased, data]);
  };

  const getBasedById = (basedId: number): Based => {
    const allBased = getAllBased()
    return allBased.find((item) => item.basedId == basedId);
  };

  const getAllBased = (): Array<Based> => {
    //return basedList;
    return JSON.parse(localStorage.getItem("based_list")) ?? basedList;
  };

  const setBasedById = (basedId: number, data: Based): void => {
    const updatedBasedList = basedList.map((item) =>
      item.basedId === basedId ? data : item,
    );
    updateBasedList(updatedBasedList);
  };

  const deleteBasedById = (basedId: number): void => {
    const updatedBasedList = basedList.filter((item) => item.basedId !== basedId);
    updateBasedList(updatedBasedList);
  };

  return {
    saveBased,
    getBasedById,
    getAllBased,
    setBasedById,
    deleteBasedById,
    updateBasedList,
    basedList
  };
};

export default useBased;
