import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CreateNewPost from "./pages/CreateNewPost";
import GetAllPosts from "./pages/GetAllPosts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/create-new-post" element={<CreateNewPost />} />
      <Route path="/get-all-posts" element={<GetAllPosts />} />
    </Routes>
  );
}

export default App;
