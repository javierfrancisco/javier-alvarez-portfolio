import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import Details from "./Details";
import SearchParams from "./SearchParams";
import Portfolio from "./Portfolio";
import NavBar from "./NavBar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header>
            <Link to="/"></Link>
            <NavBar />
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="/" element={<Portfolio />}></Route>
            <Route path="/SearchParams" element={<SearchParams />}></Route>
          </Routes>
          <footer>
            <NavBar />
          </footer>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
