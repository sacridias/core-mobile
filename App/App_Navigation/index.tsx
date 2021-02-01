import React from "react";
import { SystemProvider, ISystemConfig }  from "./System";
import App from ""./App";


const SystemConfig: ISystemConfig = {


	domains: {
		
	}

};


const Initializer = () => {
  return (
    <SystemProvider config={SystemConfig}>
      <App/>
    </SystemProvider>
  );
};
export default Initializer;