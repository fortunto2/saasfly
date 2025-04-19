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
    <div className="rounded-md border" data-oid="mlxhwod">
      <Table data-oid="ky8g88r">
        <TableHeader data-oid="7nud.0i">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} data-oid="nqur2nf">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} data-oid="70cl.2l">
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
        <TableBody data-oid="yvp9581">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                data-oid="r4ocek:"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} data-oid="ttvusoh">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow data-oid="a7-xlt3">
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center"
                data-oid="je8e2.f"
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
