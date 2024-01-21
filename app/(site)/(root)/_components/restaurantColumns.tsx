"use client"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Restaurant } from "../page"
import Link from "next/link"

export const restaurantColumns: ColumnDef<Restaurant>[] = [

    {
        accessorKey: "id",
        header: "id",
        cell: ({ row }) => {
            const id = row.getValue("id") as string;
            return (< Link prefetch={false} href={{ pathname: `/${id}`, query: { id } }} className="capitalize"  > <Button variant="link"> {id} </Button></Link >)
        }

    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
    },
    {
        accessorKey: "imageCoverage",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("imageCoverage"))
            return <div className="text-right font-medium">{amount.toFixed(2)}</div>
        },
    },
    {
        accessorKey: "itemsWithImageCount",
        header: () => <div className="text-right">items With Image</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("itemsWithImageCount"))
            return <div className="text-right font-medium">{amount}</div>
        },
    },
    {
        accessorKey: "itemsWithoutImageCount",
        header: () => <div className="text-right">items Without Image</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("itemsWithoutImageCount"))
            return <div className="text-right font-medium">{amount}</div>
        },
    },
]