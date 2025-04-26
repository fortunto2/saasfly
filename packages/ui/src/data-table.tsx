"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border" data-oid="bpivx40">
      <Table data-oid="bnzx7xq">
        <TableHeader data-oid="5q0d5z5">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} data-oid="aaz4dt-">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} data-oid="5ga_abz">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody data-oid=".0f7cts">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                data-oid="ch2.nj8"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} data-oid="nbzhrn2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow data-oid="vdgd2qw">
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center"
                data-oid="j-5sifs"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
