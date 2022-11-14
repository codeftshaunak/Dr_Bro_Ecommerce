import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const YouTubeData = () => {
  const URL =
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCIsSPTBMJXYL-JtVAr1DcFg&order=date&key=AIzaSyAT_HiUpYALOJLM1fvF7r4Qu6tLYEoulp4";

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(URL);
        setData(response.items);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  let yData = [];
  for (let i = 0; i < data.length; i++) {
    yData += data[i];
  }

  console.log(data);

  return <></>;
};

export default YouTubeData;
