"use client";
import { ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";


export type Projects = {
  id: string;
  title: string;
  description: string;
  date: string;
  status: "",
  priority: ""
};

export const columns: ColumnDef<Projects>[] = [
  {
    accessorKey: "title",
    header: ({ column }) =>{
      return (
        <div className="grid items-center justify-between">
          <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Task
          <ArrowUpDown className="ml-2 h-4 w-4 text-slate-400" />
          </Button>
        </div>
      );
    } ,
    cell: ({ row }) => {
      const title = row.getValue<string>("title");
      return <div className="font-medium">{title}</div>;
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) =>{
        return (
          <div className="flex items-center justify-between">
            <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >Notes
            <ArrowUpDown className="ml-2 h-4 w-4 text-slate-400" />
            </Button>
          </div>
        );
      } ,
    cell: ({ row }) => {
      const description = row.original.description;
      return <div>{description}</div>;
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) =>{
      return (
        <div className="grid items-center justify-between">
          <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Date
          <ArrowUpDown className="ml-2 h-4 w-4 text-slate-400" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue<string>("date");
      return (
        <div>{date}</div>
      )
    }
  },
  {
    accessorKey: "status",
    header: ({ column }) =>{
      return (
        <div className="grid items-center justify-between">
          <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Status
          <ArrowUpDown className="ml-2 h-4 w-4 text-slate-400" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
        const priority = row.original.status;
        return (
              <div>{priority}</div>
        );
      },
  },


  {
    accessorKey: "priority",
    header: ({ column }) =>{
      return (
        <div className="grid items-center justify-between">
          <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Priority
          <ArrowUpDown className="ml-2 h-4 w-4 text-slate-400" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const priority = row.getValue<string>("priority");
      return (
            <div>{priority}</div>
      );
    },
  },
];
