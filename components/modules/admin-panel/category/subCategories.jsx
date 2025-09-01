"use client";
import React from "react";
import { useState } from "react";
import AdminSideBar from "../adminSideBar";

export default function SubCategories() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1">
        <AdminSideBar />
      </div>
      <div className="flex-1">
        <h1>alt kategoriler</h1>
      </div>
    </div>
  );
}
