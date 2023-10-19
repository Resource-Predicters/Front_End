import { configureStore } from "@reduxjs/toolkit";
import exchange from "./exchange";
import resource from "./resource";
const Data = configureStore({
  reducer: {
    exchange: exchange.reducer,
    resource: resource.reducer,
  },
});

export default Data;
