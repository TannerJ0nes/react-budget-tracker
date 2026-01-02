import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const COLORS = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6"]

function SpendingChart({ categoryTotals }) {
  const chartData = Object.entries(categoryTotals)
    .filter(([category, total]) => category !== "Income" && total !== 0)
    .map(([category, total]) => ({
      name: category,
      value: Math.abs(total),
    }))

  if (chartData.length === 0) {
    return <p>No expenses yet</p>
  }

  return (
    <div>
      <h2>Spending Breakdown</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {chartData.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SpendingChart
