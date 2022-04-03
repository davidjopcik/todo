import React from "react";
import { useParams } from "react-router-dom";

export default function NewDetail() {
  const params = useParams();

  return <div>Toto je detail novinky {params.id}</div>;
}
