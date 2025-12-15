import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

// Use only theme colors, picking high-contrast stops for clarity
const data = [
  { name: "Projects Completed", value: 150, color: "hsl(var(--primary))", suffix: "+" },
  { name: "Experienced Engineers", value: 10, color: "hsl(var(--secondary))", suffix: "+" },
  { name: "Client Satisfaction", value: 98, color: "hsl(var(--accent))", suffix: "%" },
  { name: "Expert Engineers", value: 50, color: "hsl(var(--foreground))", suffix: "+" },
];

const StatsChart = () => {
  return (
    <section className="py-20 bg-background" aria-labelledby="stats-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">By The Numbers</span>
          <h2 id="stats-heading" className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Our Achievements at a Glance
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A concise view of our delivery, experience, and client trust.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-center">
          {/* Chart */}
          <div className="lg:col-span-2 rounded-2xl border border-border bg-muted/70 shadow-sm p-4 sm:p-6">
            <div className="h-[320px] sm:h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={120}
                    paddingAngle={4}
                    dataKey="value"
                    label={({ value, payload }) => `${value}${payload.suffix ?? ""}`}
                    labelLine={false}
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke="hsl(var(--background))"
                        strokeWidth={1}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "10px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                    }}
                    labelStyle={{ color: "hsl(var(--foreground))" }}
                    itemStyle={{ color: "hsl(var(--foreground))" }}
                  />
                  <Legend
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle"
                    wrapperStyle={{ paddingTop: 8 }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Metrics */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-border bg-card/80 backdrop-blur p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1 focus-within:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-block w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-sm text-primary/80">{item.name}</div>
                    <div className="text-3xl font-semibold mt-1 text-primary">
                      {item.value}
                      {item.suffix}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsChart;
