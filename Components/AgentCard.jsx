import Image from "next/image";
import React from "react";

const AgentCard = ({ agentName, description, agentIconUrl }) => {
  return (
    <>
      <div className="min-w-[300px] max-h-[350px] min-h-[350px] border border-gray-700 bg-white shadow-xl rounded-md">
        <div className="flex justify-center items-center">
          <Image
            className="pt-7"
            src={agentIconUrl}
            alt=""
            width={80}
            height={80}
          />
        </div>
        <div className="px-7 py-3">
          <h2 className="text-center py-2 font-bold text-2xl">{agentName}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default AgentCard;
