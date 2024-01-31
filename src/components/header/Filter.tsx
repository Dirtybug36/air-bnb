import { RiSoundModuleFill } from "react-icons/ri";

//later put in separate box
const Filter = () => {
  return (
    <div className=" mt-2 flex row border rounded-xl items-center justify-around font-semibold">
      <span>
        <RiSoundModuleFill size={26} />
      </span>
      <span>Filters</span>
    </div>
  );
};
export default Filter;
