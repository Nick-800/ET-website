import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Projects Completed", value: 500, color: "hsl(var(--primary))" },
  { name: "Years Experience", value: 25, color: "hsl(var(--accent))" },
  { name: "Client Satisfaction %", value: 98, color: "hsl(var(--secondary))" },
  { name: "Expert Engineers", value: 50, color: "hsl(var(--muted))" },
];

const StatsChart = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">By The Numbers</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Our Achievements at a Glance
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A visual representation of our track record and commitment to excellence.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="w-full lg:w-1/2 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, value }) => `${value}`}
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            {data.map((item) => (
              <div
                key={item.name}
                className="p-6 rounded-lg border border-border bg-card"
              >
                <div
                  className="w-4 h-4 rounded-full mb-3"
                  style={{ backgroundColor: item.color }}
                />
                <div className="text-2xl font-bold">{item.value}{item.name.includes('%') ? '%' : '+'}</div>
                <div className="text-muted-foreground text-sm">{item.name.replace(' %', '')}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsChart;
