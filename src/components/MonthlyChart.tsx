import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from "recharts";
import { TrendingUp, Scissors, DollarSign } from "lucide-react";

const monthlyData = [
  {
    month: "Jan",
    cortes: 45,
    valor: 2250,
  },
  {
    month: "Fev",
    cortes: 52,
    valor: 2600,
  },
  {
    month: "Mar",
    cortes: 38,
    valor: 1900,
  },
  {
    month: "Abr",
    cortes: 61,
    valor: 3050,
  },
  {
    month: "Mai",
    cortes: 55,
    valor: 2750,
  },
  {
    month: "Jun",
    cortes: 67,
    valor: 3350,
  },
  {
    month: "Jul",
    cortes: 72,
    valor: 3600,
  },
  {
    month: "Ago",
    cortes: 58,
    valor: 2900,
  },
];

const chartConfig = {
  cortes: {
    label: "Cortes",
    color: "hsl(var(--primary))",
  },
  valor: {
    label: "Valor (R$)",
    color: "hsl(var(--primary-glow))",
  },
};

export function MonthlyChart() {
  const totalCortes = monthlyData.reduce((acc, curr) => acc + curr.cortes, 0);
  const totalValor = monthlyData.reduce((acc, curr) => acc + curr.valor, 0);
  const mediaCortes = Math.round(totalCortes / monthlyData.length);
  const mediaValor = Math.round(totalValor / monthlyData.length);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Gráfico de Cortes */}
      <Card className="bg-gradient-card border-border shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scissors className="h-5 w-5 text-primary" />
            Cortes Realizados por Mês
          </CardTitle>
          <CardDescription>
            Quantidade de cortes realizados mensalmente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="text-center p-3 rounded-lg bg-secondary/50">
              <div className="text-2xl font-bold text-primary">{totalCortes}</div>
              <div className="text-xs text-muted-foreground">Total no Ano</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-secondary/50">
              <div className="text-2xl font-bold text-primary">{mediaCortes}</div>
              <div className="text-xs text-muted-foreground">Média Mensal</div>
            </div>
          </div>
          <ChartContainer config={chartConfig} className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <XAxis 
                  dataKey="month" 
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                />
                <YAxis hide />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                  cursor={{ fill: 'hsl(var(--primary) / 0.1)' }}
                />
                <Bar 
                  dataKey="cortes" 
                  fill="hsl(var(--primary))" 
                  radius={[4, 4, 0, 0]}
                  className="opacity-80 hover:opacity-100"
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Gráfico de Faturamento */}
      <Card className="bg-gradient-card border-border shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            Faturamento Mensal
          </CardTitle>
          <CardDescription>
            Valor total recebido por mês
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="text-center p-3 rounded-lg bg-secondary/50">
              <div className="text-2xl font-bold text-primary">R$ {(totalValor / 1000).toFixed(1)}k</div>
              <div className="text-xs text-muted-foreground">Total no Ano</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-secondary/50">
              <div className="text-2xl font-bold text-primary">R$ {(mediaValor / 1000).toFixed(1)}k</div>
              <div className="text-xs text-muted-foreground">Média Mensal</div>
            </div>
          </div>
          <ChartContainer config={chartConfig} className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <XAxis 
                  dataKey="month" 
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                />
                <YAxis hide />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                />
                <Line 
                  type="monotone" 
                  dataKey="valor" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}