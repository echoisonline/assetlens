import React, { useState, useEffect } from "react";
import TokenCard from "./TokenCard";
import { getTrendingAssets } from "../context/api";

const Dashboard = () => {
  const [trendingAssets, setTrendingAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const data = await getTrendingAssets(); // Fetch the data
        console.log("Trending Coins Data:", data); // Log the response
        setTrendingAssets(data); // Store in state
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  if (loading) {
    return <div className="w-full h-full flex justify-center">Loading</div>;
  }

  console.log("Trending Assets:", trendingAssets);

  return (
    <div className="bg-gray-500 w-fit h-fit !p-[8px] !m-[8px] rounded-[20px]">
      <h2 className="text-2xl font-bold !mb-2 text-center text-[#d9d9d9]">
        Trending Coins
      </h2>
      <div className="grid grid-cols-1 gap-2">
        {Array.isArray(trendingAssets) && trendingAssets.length > 0 ? (
          [...trendingAssets]
            .sort((a, b) => b.item.data.price - a.item.data.price)
            .map((item) => <TokenCard key={item.item.id} coin={item} />)
        ) : (
          <p>Loading or no data available...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
