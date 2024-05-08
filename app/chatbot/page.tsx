import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import Chat from "@/components/Chat";

export default async function Chatbot() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/chatbot");
  }

  return <Chat></Chat>;
}
