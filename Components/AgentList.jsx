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
        const repsonse = await fetch(apiUrl);
        if (!repsonse.ok) {
          throw new Error("Something went wrong");
        }
        const result = await repsonse.json();
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
        <div className="grid grid-cols-4 gap-y-7 gap-x-5 px-[250px] mt-10 mb-10">
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
