import React from "react";
import Button from "./components/Button";
import { GoBell } from "react-icons/go";
function App() {
  return (
    <div className="gap-4 fixed inset-0 flex items-center justify-center">
      <div>
        <Button warning rounded outline>
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button success outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button danger rounded>
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
