import React from "react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Coffee Shop</h1>
      <div>
        <Button>Menu</Button>
      </div>
    </nav>
  );
};

export default Navbar;
