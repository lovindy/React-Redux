import React from "react";
import Card from "../../components/card/Card";
import Alexa from "../../images/alexa.png";
import Cortana from "../../images/cortana.png";
import Siri from "../../images/siri.png";

const Home = () => {
  return (
    <div className="flex flex-col space-y-12">
      <div className="w-full bg-slate-100 py-8">
        <h1 className="text-center text-3xl text-blue-500">
          Personal Digital Assistants
        </h1>
      </div>
      <div className="flex justify-center items-center space-x-4">
        <Card title="Alexa" handle="@alexa99" image={Alexa} />
        <Card title="Cortana" handle="@cortana32" image={Cortana} />
        <Card title="Siri" handle="@siri01" image={Siri} />
      </div>
    </div>
  );
};

export default Home;
