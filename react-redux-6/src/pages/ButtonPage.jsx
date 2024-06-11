import { GoBell, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <Button
          secondary
          outline
          rounded
          className="bg-black"
          onClick={handleClick}>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger rounded onMouseEnter={handleClick}>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <GoDatabase />
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

export default ButtonPage;
