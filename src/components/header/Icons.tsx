import NavigationData from "../../api/NavigationData";
interface IconProps {
  id: number;
  label: string;
  icon: JSX.Element;
}

export const Icons: React.FC = () => {
  const data = NavigationData.map((icons: IconProps) => (
    <div key={icons.id}>
      <div>
        <h3>{icons.icon}</h3>
        <h3>{icons.label}</h3>
      </div>
    </div>
  ));
  return <>{data}</>;
};
