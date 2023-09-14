import React from "react";
import { CartProvider } from "./CartContext";
import CartPage from "./CartPage";

const App = () => {
  return (
    <CartProvider>
      <div>
        {/* Your component code */}
        <CartPage />
      </div>
    </CartProvider>
  );
};

export default App;
