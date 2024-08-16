"use client";
import FlashcardDashboard from "@/components/dashboard/FlashcardDashboard";
import { useParams } from "next/navigation";
import React from "react";

const CardPage = () => {
  const params = useParams();
  let title = params?.title;
  if (Array.isArray(title)) {
    title = title.join(" ");
  }

  title = title?.replace(/-/g, " ");

  // console.log(title,'title');
  return <FlashcardDashboard title={title!.toString()} />;
};

export default CardPage;
