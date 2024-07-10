import React from "react";
import AgentCard from "./AgentCard";

const AgentList = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-y-7 gap-x-5 px-[250px] mt-10">
        <AgentCard
          agentName={"Gekko"}
          description={
            "Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again."
          }
          agentIconUrl={
            "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png"
          }
        />
        <AgentCard
          agentName={"Fade"}
          agentIconUrl={
            "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayicon.png"
          }
          description={
            "Turkish bounty hunter Fade unleashes the power of raw nightmare to seize enemy secrets. Attuned with terror itself, she hunts down targets and reveals their deepest fears - before crushing them in the dark."
          }
        />
        <AgentCard
          agentName={"Breach"}
          description={
            "The bionic Swede Breach fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair."
          }
        />
        <AgentCard
          agentName={"Jett"}
          description={
            "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies up before they even know what hit them."
          }
        />
        <AgentCard
          agentName={"Reyna"}
          description={
            "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her sharply dependant on performance."
          }
        />
      </div>
    </>
  );
};

export default AgentList;
