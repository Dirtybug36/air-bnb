import NavigationData from "./NavigationData";

export const Icons: React.FC = () => {
  const data = NavigationData.map((icons) => (
    <div key={icons.id}>
      <div>
        <h3>{icons.icon}</h3>
        <h3>{icons.label}</h3>
      </div>
    </div>
  ));
  return <>{data}</>;
};
