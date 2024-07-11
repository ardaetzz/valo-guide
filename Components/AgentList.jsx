"use client";

import React, { useEffect, useState } from "react";
import AgentCard from "./AgentCard";

const AgentList = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl =
      "https://valorant-api.com/v1/agents?isPlayableCharacter=true";

    const fetchAgents = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const result = await response.json();
        setAgents(result.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching agents: " + error);
      }
    };
    fetchAgents();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-y-7 gap-x-5 px-4 sm:px-8 lg:px-16 xl:px-24 mt-10 mb-10">
          {agents.map((agent) => (
            <AgentCard
              key={agent.uuid}
              agentIconUrl={agent.displayIcon}
              agentName={agent.displayName}
              description={agent.description}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default AgentList;
