const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">

      <h3 className="text-gray-600 text-sm">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-2 text-blue-600">
        {value}
      </p>

    </div>
  );
};

export default StatsCard;