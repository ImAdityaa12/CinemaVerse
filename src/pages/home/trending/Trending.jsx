import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import Carousel from "../../../components/carousel/Carousel";
const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  const {data, loading} = useFetch(`/trending/all/${endpoint}`)
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading = {loading} />
    </div>
  );
};

export default Trending;
