import type { NextPage } from "next";
import SearchIcon from "@mui/icons-material/Search";
import FilterDialog from "../Components/Dialog";

interface RecipeProps {
  name: string;
  carbs: number;
  fats: number;
  protein: number;
  calories: number;
}

const SearchBox = () => {
  return (
    <div className="flex items-center p-8">
      <div className="flex flex-grow items-center rounded-lg bg-gray-100 px-2 py-2 text-gray-600">
        <SearchIcon style={{ color: "gray" }} />
        <input
          type="search"
          placeholder="Search"
          className="tex-base flex-grow bg-transparent px-1 outline-none"
        />
      </div>
      <FilterDialog />
    </div>
  );
};

const FakeHit = ({ name, carbs, fats, protein, calories }: RecipeProps) => {
  return (
    <div className="h-32 border-b p-2 flex gap-2 hover:bg-gray-100">
      <img
        src="/oatmeal.png"
        className="h-full aspect-square object-cover overflow-hidden rounded-lg flex-shrink-0"
      />
      <div className="flex flex-col w-full justify-between">
        <p>{name}</p>
        <div className="flex w-full justify-between text-sm">
          <div className="flex flex-col items-center">
            <p>carbs</p>
            <p>{carbs}</p>
          </div>
          <div className="flex flex-col items-center">
            <p>fats</p>
            <p>{fats}</p>
          </div>
          <div className="flex flex-col items-center">
            <p>protein</p>
            <p>{protein}</p>
          </div>
          <div className="flex flex-col items-center">
            <p>calories</p>
            <p>{calories}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div className="flex flex-col max-w-md mx-auto">
      <SearchBox />
      <FakeHit name="some random name here" />
      <FakeHit name="banana bread" />
      <FakeHit name="pasta and cheese" />
      <FakeHit name="Mcdonalds something" />
    </div>
  );
};

export default Home;
