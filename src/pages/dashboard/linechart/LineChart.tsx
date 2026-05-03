"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "Products growth line chart";

const chartData = [
  { month: "Jan", products: 12 },
  { month: "Feb", products: 25 },
  { month: "Mar", products: 18 },
  { month: "Apr", products: 40 },
  { month: "May", products: 32 },
  { month: "Jun", products: 55 },
];

const chartConfig = {
  products: {
    label: "Products",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function LineChartPage() {
  return (
    <Card className="mx-4 my-6">
      <CardHeader>
        <CardTitle>Products Growth</CardTitle>
        <CardDescription>Last 6 months analytics</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-100 w-full">
          <LineChart data={chartData} margin={{ left: 12, right: 12, top: 10 }}>
            {/* Grid */}
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

            {/* X Axis */}
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />

            {/* Tooltip */}
            <ChartTooltip
              cursor={{ stroke: "rgb(var(--chart-1))", strokeWidth: 1 }}
              content={<ChartTooltipContent hideLabel />}
            />

            {/* Gradient */}
            <defs>
              <linearGradient id="fillProducts" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="rgb(var(--chart-1))"
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor="rgb(var(--chart-1))"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            {/* Line */}
            <Line
              dataKey="products"
              type="natural"
              stroke="rgb(var(--chart-1))"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "rgb(var(--chart-1))",
              }}
              activeDot={{
                r: 6,
                stroke: "rgb(var(--chart-1))",
              }}
              fill="url(#fillProducts)"
            />
          </LineChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium">
          Trending up by 12% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground">
          Showing product growth over time
        </div>
      </CardFooter>
    </Card>
  );
}
