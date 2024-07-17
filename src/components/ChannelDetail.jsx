import React from "react";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { useState,useEffect } from "react";
import {useParams} from 'react-router-dom';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {

const {id} = useParams();

// useEffect(()=>{
//  fetchFromAPI(`channels?part="snippet&id=${id}`).then(data)=>{})
// },[id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard  marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos  />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
