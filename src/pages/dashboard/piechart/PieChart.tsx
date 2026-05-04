"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card";
import {ChartContainer,ChartTooltip,ChartTooltipContent,type ChartConfig,} from "@/components/ui/chart";
import useProducts from "@/hooks/useProducts";

export const description = "A pie chart with a label";

export default function PieChartPage() {
    const { data } = useProducts();

    const groupedByCategory = data?.reduce((acc: any, item: any) => {
        const category = item.category || "Unknown";
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});

 const chartData = Object.entries(groupedByCategory || {}).map(
  ([category, count], index) => ({
    name: category,
    value: count,
    fill: `rgb(var(--chart-${(index % 5) + 1}))`,
  })
);

    const chartConfig = {
        products: {
        label: "Products",
        },
    } satisfies ChartConfig;

    return (
        <Card className="flex flex-col mx-4 my-6">
        <CardHeader className="items-center pb-0">
            <CardTitle>Pie Chart - Label</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
            <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-100 pb-0 [&_.recharts-pie-label-text]:fill-foreground"
            >
            <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={50}
                    outerRadius={160}
                    paddingAngle={3}
                    >
                </Pie>
            </PieChart>
            </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 leading-none font-medium">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
            </div>
        </CardFooter>
        </Card>
    );
}
