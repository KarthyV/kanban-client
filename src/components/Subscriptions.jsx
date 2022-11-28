import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../api";
import "../styles/Subscriptions.css";
import PriceCard from "./PriceCard";

const tier = [
  {
    heading: "Free",
    perMonth: 0,
    feature: [
      "Free account",
      "Add Task",
      "Edit Task",
      "Delete Task",
      "Limited Access",
    ],
  },
  {
    heading: "Plus",
    perMonth: 499,
    feature: [
      "Premium Account",
      "Add Task",
      "Edit Task",
      "Delete Task",
      "Unlimited Access",
    ],
  },
];

const Subscriptions = () => {
  const { id } = useParams();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    fetch(`${API}/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUserEmail(data));
  }, []);
  return (
    <div className="subscription">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {tier.map((plan, i) => {
              return <PriceCard userEmail={userEmail} key={i} tier={plan} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscriptions;
