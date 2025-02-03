import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {

  return (
    <Box minH={"100vh"}>
      {<Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route Path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App
