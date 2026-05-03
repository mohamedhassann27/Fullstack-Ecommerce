"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export const description = "An interactive area chart";

const chartConfig = {
  products: {
    label: "Products",
    color: "rgb(var(--chart-products))", // blue-400
  },
};

export default function AreaChartPage() {

    const generateMockData = () => {
        const days = 14;
        const result = [];
        for (let i = days - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        result.push({
            date: date.toISOString().split("T")[0],
            products: Math.floor(Math.random() * 50) + 10, // 10 → 60 products
        });
        }
        return result;
    };

    const chartData = generateMockData();
    const [timeRange, setTimeRange] = useState("90d");

    const filteredData = chartData.filter((item) => {
        const date = new Date(item.date);
        const referenceDate = new Date();
        let daysToSubtract = 90;
        if (timeRange === "30d") daysToSubtract = 30;
        else if (timeRange === "7d") daysToSubtract = 7;
        const startDate = new Date(referenceDate);
        startDate.setDate(startDate.getDate() - daysToSubtract);
        return date >= startDate;
    });

    return (
        <Card className="mx-4 my-6">
        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
            <div className="grid flex-1 gap-1">
            <CardTitle>Area Chart - Interactive</CardTitle>
            <CardDescription>
                Showing total visitors for the last 3 months
            </CardDescription>
            </div>
            <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
                className="hidden w-40 rounded-lg sm:ml-auto sm:flex"
                aria-label="Select a value"
            >
                <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
                <SelectItem value="90d" className="rounded-lg">
                Last 3 months
                </SelectItem>
                <SelectItem value="30d" className="rounded-lg">
                Last 30 days
                </SelectItem>
                <SelectItem value="7d" className="rounded-lg">
                Last 7 days
                </SelectItem>
            </SelectContent>
            </Select>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <ChartContainer
            config={chartConfig}
            className="aspect-auto h-62.5 w-full"
            >
            <AreaChart data={filteredData}>
                <defs>
                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop
                    offset="5%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={0.8}
                    />
                    <stop
                    offset="95%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={0.1}
                    />
                </linearGradient>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                    <stop
                    offset="5%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0.8}
                    />
                    <stop
                    offset="95%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0.1}
                    />
                </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                    const date = new Date(value);
                    return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    });
                }}
                />
                <ChartTooltip
                cursor={false}
                content={
                    <ChartTooltipContent
                    labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        });
                    }}
                    indicator="dot"
                    />
                }
                />
                <Area
                    dataKey="products"
                    type="natural"
                    stroke="rgb(var(--chart-products))"
                    fill="rgb(var(--chart-products) / 0.1)"
                    strokeWidth={2}
                />
                <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
            </ChartContainer>
        </CardContent>
        </Card>
    );
}
