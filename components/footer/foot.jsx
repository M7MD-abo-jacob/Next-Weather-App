import Week from "./week/week";

const Foot = ({ daysForcast }) => {
  return (
    <div className="footer">
      <p>7-Day forcast</p>
      <Week data={daysForcast} />
    </div>
  );
};

export default Foot;
