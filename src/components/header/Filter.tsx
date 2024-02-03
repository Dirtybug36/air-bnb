import { RiSoundModuleFill } from "react-icons/ri";

//later put in separate box
const Filter = () => {
  return (
    <div className="px-1 gap-2 flex flex-row border rounded-xl items-center font-semibold">
      <span>
        <RiSoundModuleFill size={26} />
      </span>
      <span>Filters</span>
    </div>
  );
};
export default Filter;
