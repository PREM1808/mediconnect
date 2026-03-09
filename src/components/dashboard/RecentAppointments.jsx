const RecentAppointments = () => {

  const appointments = [
    {
      patient: "John Doe",
      doctor: "Dr. Smith",
      date: "Today",
      status: "Confirmed"
    },
    {
      patient: "Anna Taylor",
      doctor: "Dr. Kumar",
      date: "Today",
      status: "Pending"
    },
    {
      patient: "Michael Lee",
      doctor: "Dr. Brown",
      date: "Tomorrow",
      status: "Confirmed"
    },
    {
      patient: "Sara Wilson",
      doctor: "Dr. Patel",
      date: "Tomorrow",
      status: "Cancelled"
    }
  ];

  const getStatusStyle = (status) => {
    if (status === "Confirmed") {
      return "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm";
    }

    if (status === "Pending") {
      return "bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm";
    }

    if (status === "Cancelled") {
      return "bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm";
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-8">

      <h2 className="text-xl font-semibold mb-4">
        Recent Appointments
      </h2>

      <table className="w-full text-left">

        <thead>
          <tr className="border-b">
            <th className="py-2">Patient</th>
            <th className="py-2">Doctor</th>
            <th className="py-2">Date</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index} className="border-b">

              <td className="py-3">{appointment.patient}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.date}</td>

              <td>
                <span className={getStatusStyle(appointment.status)}>
                  {appointment.status}
                </span>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default RecentAppointments;