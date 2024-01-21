"use client"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import Link from "next/link"
import { Item, ItemImage } from "../../[restaurantId]/itemDataModel"

export const itemColumns: ColumnDef<Item>[] = [

    {
        accessorKey: "id",
        header: "id",
        cell: ({ row }) => {
            const id = row.getValue("id") as string;
            return (< Link prefetch={false} href={{ pathname: `item/${id}`, query: { id } }} className="capitalize"  > <Button variant="link"> {id} </Button></Link >)
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
        accessorKey: "number_of_reviews",
        header: () => <div className="text-right">Number of reviews</div>,
        cell: ({ row }) => {
            const numberOfReviews = row.getValue("number_of_reviews") as number;
            return <div className="text-right font-medium">{numberOfReviews}</div>
        },
    },
    {
        accessorKey: "average_rating",
        header: () => <div className="text-right">Average rating</div>,
        cell: ({ row }) => {
            const averageRating = parseFloat(row.getValue("average_rating"));
            return <div className="text-right font-medium">{averageRating}</div>
        },
    },
    {
        accessorKey: "item_images",
        header: () => <div className="text-right">Has Image</div>,
        cell: ({ row }) => {
            const itemImages = row.getValue("item_images");
            const count = (itemImages as ItemImage[]).length;
            return <div className="text-right font-medium">{count}</div>
        },
    },
]