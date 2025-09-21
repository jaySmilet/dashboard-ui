const StatusBadge = ({ status }: { status: string }) => {
  const statusStyles: Record<string, string> = {
    "In Progress": "#8A8Cd9",
    Complete: "#4AA785",
    Pending: "#598AD4",
    Approved: "#FFC555",
    Rejected: "rgba(28, 28, 28, 0.4)",
  };

  return (
    <div className="flex items-center gap-2">
      <div
        className="size-[6px] rounded-full"
        style={{ backgroundColor: statusStyles[status] }}
      ></div>
      <span
        className="text-xs font-normal"
        style={{ color: statusStyles[status] }}
      >
        {status}
      </span>
    </div>
  );
};

export default StatusBadge;
