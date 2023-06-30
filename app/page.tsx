"use client";
import Image from "next/image";
import Test from "./component/header";
import Category from "./component/category";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./component/card";
import Footer from "./component/footer";
import BrowseTask from "./component/browseTask";

const serverUrl = "http://8.213.23.19/api";
const getCategory = async () => {
  try {
    const response = await axios.get(`${serverUrl}/get-all-category`);
    return response.data.data.category;
  } catch (error) {
    return error;
  }
};
const getBrowseTask = async () => {
  try{
    const response = await axios.get(`${serverUrl}/browse-task`);
    console.log(response.data.data);
    return response.data.data;
  }catch (error){
    return error;
  }
}
export default function Home() {
  const [category, setCategory] = useState([]);
  const [browseTask,setTask] = useState([]);
  useEffect(() => {
    getCategory().then((res) => {
      setCategory(res);
    });
    getBrowseTask().then((res) => {
      setTask(res);
    })
    //
  }, []);
  return (
    <main>
      <Test />
      <Category category={category} />
      <BrowseTask browseTask={browseTask}/>
      <Card/>
      <Footer/>
    </main>
  );
}
