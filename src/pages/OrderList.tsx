import StatusBadge from "../components/StatusBage/StatusBage";
import { orders } from "../static/static-data";
import { useImagePath } from "../hooks/useImagePath";

const OrderList = () => {
  const { getImage } = useImagePath();
  return (
    <div className="flex flex-col gap-4 p-[28px]">
      <div className="px-2 py-1">
        <p className="text-sm font-semibold text-[var(--text-strong)]">
          Order List
        </p>
      </div>

      <div className="min-h-screen">
        <div className="rounded-lg overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-2 bg-[var(--primary-light)]">
            <div className="flex items-center gap-2">
              <img src={getImage("Add.svg")} alt="Add" className="size-5" />
              <img
                src={getImage("FunnelSimple.svg")}
                alt="FunnelSimple"
                className="size-5 cursor-pointer"
              />
              <img
                src={getImage("ArrowsDownUp.svg")}
                alt="ArrowsDownUp"
                className="size-5 cursor-pointer"
              />
            </div>
            <div className="w-[160px] flex items-center gap-2 border border-[var(--text-light)] px-2 py-1 rounded-[8px]">
              <div className="flex items-center gap-1">
                <img
                  src={getImage("Search.svg")}
                  alt="Search"
                  className="size-5 cursor-pointer"
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[100%] hover:border-0 focus:border-0 hover:outline-0 placeholder:text-sm placeholder:font-normal placeholder:text-[var(--text-light)]"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto mt-3">
            <table className="min-w-full text-sm text-left">
              <thead className="text-xs font-normal text-[var(--text-medium)] border-b border-[var(--text-light)]">
                <tr>
                  <th className="py-2 px-3">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name="Order ID"
                        id="Order ID"
                        className="hover:border-0 focus:border-0 hover:outline-0"
                      />{" "}
                      <label htmlFor="Order ID">Order ID</label>
                    </div>
                  </th>
                  <th className="py-2 px-3">User</th>
                  <th className="py-2 px-3">Project</th>
                  <th className="py-2 px-3">Address</th>
                  <th className="py-2 px-3">Date</th>
                  <th className="py-2 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {orders.map((order, idx) => (
                  <tr
                    key={idx}
                    className="text-xs font-normal text-[var(--text-strong)] border-b border-[var(--text-extra-light1)] hover:bg-[var(--primary-light)]"
                  >
                    <td className="py-2 px-3">{order.id}</td>
                    <td className="py-2 px-3 flex items-center gap-2">
                      <img
                        src={order.user.avatar}
                        alt={order.user.name}
                        className="size-6 rounded-full"
                      />
                      <span>{order.user.name}</span>
                    </td>
                    <td className="py-2 px-3">{order.project}</td>
                    <td className="py-2 px-3">{order.address}</td>
                    <td className="py-2 px-3  flex items-center gap-2">
                      <img
                        src={getImage("CalendarBlank.svg")}
                        alt="CalendarBlank"
                        className="size-4"
                      />
                      <span>{order.date}</span>
                    </td>
                    <td className="py-2 px-3">
                      <StatusBadge status={order.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-end p-4">
            <nav className="inline-flex items-center gap-1 text-sm">
              <img
                src={getImage("ArrowLineLeft.svg")}
                alt="ArrowLineLeft"
                className="size-4 cursor-pointer"
              />
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className="px-2 py-1 text-sm font-normal text-[var(--text-strong)] rounded-[8px] hover:bg-[var(--text-extra-light1)] transition cursor-pointer"
                >
                  {page}
                </button>
              ))}
              <img
                src={getImage("ArrowLineRight.svg")}
                alt="ArrowLineRight"
                className="size-4  cursor-pointer"
              />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
