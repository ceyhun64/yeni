"use client";
import React from "react";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const { id } = useParams();
  return <div>Product :{id}</div>;
}
