"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
import useProducts from "@/hooks/useProducts";

export const description = "A multiple bar chart";

export default function BarChartPage() {
    const { data } = useProducts();
    const groupedByCategory = data?.reduce((acc: any, item: any) => {
        const category = item.category || "Unknown";
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});

    const chartData = Object.entries(groupedByCategory || {}).map(
        ([category, count]) => ({
        category,
        products: count,
        }),
    );

    const chartConfig = {
        products: {
        label: "Products",
        color: "rgb(var(--chart-products))",
        },
    } satisfies ChartConfig;

    return (
        <Card className="h-150 mx-4 my-6">
        <CardHeader>
            <CardTitle>Bar Chart - Multiple</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent className="h-110 ">
            <ChartContainer config={chartConfig} className="h-full w-full md:w-[90%]">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid vertical={false} />

                <XAxis
                dataKey="category"
                interval={0}
                textAnchor="middle"
                />

                <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
                />

                <Bar
                dataKey="products"
                fill="rgb(var(--chart-products))"
                radius={[6, 6, 0, 0]}
                />
            </BarChart>
            </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 leading-none font-medium">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
            </div>
        </CardFooter>
        </Card>
    );
}
