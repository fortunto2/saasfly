import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@saasfly/ui/avatar";
import { Button } from "@saasfly/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@saasfly/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@saasfly/ui/dropdown-menu";
import { Input } from "@saasfly/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@saasfly/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@saasfly/ui/table";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col" data-oid="8pc50q6">
      <header
        className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6"
        data-oid="a5akw0g"
      >
        <nav
          className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
          data-oid="7ljkh2j"
        >
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            data-oid="6yy-vvz"
          >
            <Package2 className="h-6 w-6" data-oid="6sk:41w" />
            <span className="sr-only" data-oid="wri7970">
              Acme Inc
            </span>
          </Link>
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
            data-oid="fm7k._v"
          >
            Dashboard
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
            data-oid="4160puj"
          >
            Orders
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
            data-oid="wfeidyy"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
            data-oid="-td:5qo"
          >
            Customers
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
            data-oid="t8z5k:5"
          >
            Analytics
          </Link>
        </nav>
        <Sheet data-oid="ufw-ee6">
          <SheetTrigger asChild data-oid="9-okmkb">
            <Button
              variant="outline"
              className="shrink-0 md:hidden"
              data-oid="jo8wr5-"
            >
              <Menu className="h-5 w-5" data-oid="92yac6n" />
              <span className="sr-only" data-oid="z1hynuf">
                Toggle navigation menu
              </span>
            </Button>
          </SheetTrigger>
          <SheetContent data-oid="t.fll:9">
            <nav className="grid gap-6 text-lg font-medium" data-oid="21imwy8">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
                data-oid="mxpti2a"
              >
                <Package2 className="h-6 w-6" data-oid="jchyka0" />
                <span className="sr-only" data-oid="ybd3c15">
                  Acme Inc
                </span>
              </Link>
              <Link
                href="#"
                className="hover:text-foreground"
                data-oid=".dg_z8h"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                data-oid="7z5:eu-"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                data-oid="najxx80"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                data-oid="i7f32sq"
              >
                Customers
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                data-oid="7ehm-.."
              >
                Analytics
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div
          className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4"
          data-oid="w8snv9_"
        >
          <form className="ml-auto flex-1 sm:flex-initial" data-oid="9emqmit">
            <div className="relative" data-oid="3v:55c8">
              <Search
                className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                data-oid="epwqpti"
              />

              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                data-oid="ew2kokq"
              />
            </div>
          </form>
          <DropdownMenu data-oid="zts786z">
            <DropdownMenuTrigger asChild data-oid="a:qgkne">
              <Button
                variant="secondary"
                className="rounded-full"
                data-oid="j7z0-rg"
              >
                <CircleUser className="h-5 w-5" data-oid="5zjm2f0" />
                <span className="sr-only" data-oid="l3vf3co">
                  Toggle user menu
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" data-oid="key2-wr">
              <DropdownMenuLabel data-oid="-rj2s00">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator data-oid="fxar-26" />
              <DropdownMenuItem data-oid="f.09ybf">Settings</DropdownMenuItem>
              <DropdownMenuItem data-oid="u::zbi:">Support</DropdownMenuItem>
              <DropdownMenuSeparator data-oid="x_y:ygr" />
              <DropdownMenuItem data-oid="rmkh0l-">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main
        className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8"
        data-oid=".ye2c-a"
      >
        <div
          className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4"
          data-oid="_z0-l:7"
        >
          <Card data-oid="688ahq0">
            <CardHeader
              className="flex flex-row items-center justify-between space-y-0 pb-2"
              data-oid="d_r6.3o"
            >
              <CardTitle className="text-sm font-medium" data-oid="p15wnme">
                Total Revenue
              </CardTitle>
              <DollarSign
                className="h-4 w-4 text-muted-foreground"
                data-oid="3uxxzm5"
              />
            </CardHeader>
            <CardContent data-oid="ai:63yb">
              <div className="text-2xl font-bold" data-oid="h0s6t-p">
                $45,231.89
              </div>
              <p className="text-xs text-muted-foreground" data-oid=":qa8orc">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card data-oid="istu_9x">
            <CardHeader
              className="flex flex-row items-center justify-between space-y-0 pb-2"
              data-oid="nlze.iu"
            >
              <CardTitle className="text-sm font-medium" data-oid="gco2-0m">
                Subscriptions
              </CardTitle>
              <Users
                className="h-4 w-4 text-muted-foreground"
                data-oid="8uzrapo"
              />
            </CardHeader>
            <CardContent data-oid="l4gqc8e">
              <div className="text-2xl font-bold" data-oid="4.1p-mw">
                +2350
              </div>
              <p className="text-xs text-muted-foreground" data-oid="asng1zx">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card data-oid="h_1bzvx">
            <CardHeader
              className="flex flex-row items-center justify-between space-y-0 pb-2"
              data-oid="m-rm35r"
            >
              <CardTitle className="text-sm font-medium" data-oid=".v1hntx">
                Sales
              </CardTitle>
              <CreditCard
                className="h-4 w-4 text-muted-foreground"
                data-oid="3o20ykg"
              />
            </CardHeader>
            <CardContent data-oid="uhjqxdp">
              <div className="text-2xl font-bold" data-oid="4itpx36">
                +12,234
              </div>
              <p className="text-xs text-muted-foreground" data-oid="hfkr3-n">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card data-oid="4l67575">
            <CardHeader
              className="flex flex-row items-center justify-between space-y-0 pb-2"
              data-oid="qc8j.s9"
            >
              <CardTitle className="text-sm font-medium" data-oid="jmgca-n">
                Active Now
              </CardTitle>
              <Activity
                className="h-4 w-4 text-muted-foreground"
                data-oid="8a0dawf"
              />
            </CardHeader>
            <CardContent data-oid="5elu:sa">
              <div className="text-2xl font-bold" data-oid="9dx21a7">
                +573
              </div>
              <p className="text-xs text-muted-foreground" data-oid=":5i1y:e">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <div
          className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3"
          data-oid="g-2xdn4"
        >
          <Card className="xl:col-span-2" data-oid="0a4ym.7">
            <CardHeader
              className="flex flex-row items-center"
              data-oid="ucd7__2"
            >
              <div className="grid gap-2" data-oid="2gekufb">
                <CardTitle data-oid=".0kk2om">Transactions</CardTitle>
                <CardDescription data-oid="-luvz55">
                  Recent transactions from your store.
                </CardDescription>
              </div>
              <Button size="sm" className="ml-auto gap-1" data-oid="r2:.j0:">
                <Link href="#" data-oid="6ovsz5x">
                  View All
                  <ArrowUpRight className="h-4 w-4" data-oid="u-y4ytg" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent data-oid="20vzvhq">
              <Table data-oid="ef933kg">
                <TableHeader data-oid="x8ldlwi">
                  <TableRow data-oid="o37h7oe">
                    <TableHead data-oid="87lbj2z">Customer</TableHead>
                    <TableHead
                      className="hidden xl:table-column"
                      data-oid="lny:fao"
                    >
                      Type
                    </TableHead>
                    <TableHead
                      className="hidden xl:table-column"
                      data-oid=".-kbn3s"
                    >
                      Status
                    </TableHead>
                    <TableHead
                      className="hidden xl:table-column"
                      data-oid="8i78m5:"
                    >
                      Date
                    </TableHead>
                    <TableHead className="text-right" data-oid="hnszsg1">
                      Amount
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody data-oid="j-5--ym">
                  <TableRow data-oid="yf9hm0p">
                    <TableCell data-oid="v4834at">
                      <div className="font-medium" data-oid="l30dm-p">
                        Liam Johnson
                      </div>
                      <div
                        className="hidden text-sm text-muted-foreground md:inline"
                        data-oid="9ft8w-r"
                      >
                        liam@example.com
                      </div>
                    </TableCell>
                    <TableCell
                      className="hidden xl:table-column"
                      data-oid="co5-p34"
                    >
                      Sale
                    </TableCell>
                    {/*<TableCell className="hidden xl:table-column">*/}
                    {/*  <Badge className="text-xs" variant="outline">*/}
                    {/*    Approved*/}
                    {/*  </Badge>*/}
                    {/*</TableCell>*/}
                    <TableCell
                      className="hidden md:table-cell lg:hidden xl:table-column"
                      data-oid=".l9:fl1"
                    >
                      2023-06-23
                    </TableCell>
                    <TableCell className="text-right" data-oid="::h.4bl">
                      $250.00
                    </TableCell>
                  </TableRow>
                  <TableRow data-oid="l_88sd5">
                    <TableCell data-oid="ul2-6.9">
                      <div className="font-medium" data-oid="xm8aj.o">
                        Olivia Smith
                      </div>
                      <div
                        className="hidden text-sm text-muted-foreground md:inline"
                        data-oid="clvanbo"
                      >
                        olivia@example.com
                      </div>
                    </TableCell>
                    <TableCell
                      className="hidden xl:table-column"
                      data-oid="00ewi7l"
                    >
                      Refund
                    </TableCell>
                    <TableCell
                      className="hidden xl:table-column"
                      data-oid="vurcnty"
                    >
                      {/*<Badge className="text-xs" variant="outline">*/}
                      {/*  Declined*/}
                      {/*</Badge>*/}
                    </TableCell>
                    <TableCell
                      className="hidden md:table-cell lg:hidden xl:table-column"
                      data-oid="lm5r313"
                    >
                      2023-06-24
                    </TableCell>
                    <TableCell className="text-right" data-oid="2w_44_2">
                      $150.00
                    </TableCell>
                  </TableRow>
                  <TableRow data-oid=":wley38">
                    <TableCell data-oid="a.ud32l">
                      <div className="font-medium" data-oid="7yqmrtz">
                        Noah Williams
                      </div>
                      <div
                        className="hidden text-sm text-muted-foreground md:inline"
                        data-oid="n_7yo:z"
                      >
                        noah@example.com
                      </div>
                    </TableCell>
                    <TableCell
                      className="hidden xl:table-column"
                      data-oid="p9wawli"
                    >
                      Subscription
                    </TableCell>
                    <TableCell
                      className="hidden xl:table-column"
                      data-oid="_oeq-un"
                    >
                      {/*<Badge className="text-xs" variant="outline">*/}
                      {/*  Approved*/}
                      {/*</Badge>*/}
                    </TableCell>
                    <TableCell
                      className="hidden md:table-cell lg:hidden xl:table-column"
                      data-oid="8a_u97p"
                    >
                      2023-06-25
                    </TableCell>
                    <TableCell className="text-right" data-oid="x0kc4n8">
                      $350.00
                    </TableCell>
                  </TableRow>
                  <TableRow data-oid="4:0-ts_">
                    <TableCell data-oid="w4g:pwv">
                      <div className="font-medium" data-oid="aoz0v4k">
                        Emma Brown
                      </div>
                      <div
                        className="hidden text-sm text-muted-foreground md:inline"
                        data-oid="ouo991q"
                      >
                        emma@example.com
                      </div>
                    </TableCell>
                    <TableCell
                      className="hidden xl:table-column"
                      data-oid="y4c5kqa"
                    >
                      Sale
                    </TableCell>
                    <TableCell
                      className="hidden xl:table-column"
                      data-oid="sstrnbk"
                    >
                      {/*<Badge className="text-xs" variant="outline">*/}
                      {/*  Approved*/}
                      {/*</Badge>*/}
                    </TableCell>
                    <TableCell
                      className="hidden md:table-cell lg:hidden xl:table-column"
                      data-oid="o.3t_.s"
                    >
                      2023-06-26
                    </TableCell>
                    <TableCell className="text-right" data-oid="0t9em0l">
                      $450.00
                    </TableCell>
                  </TableRow>
                  <TableRow data-oid="ox:jacw">
                    <TableCell data-oid="zyd5.ai">
                      <div className="font-medium" data-oid="pzj:9wf">
                        Liam Johnson
                      </div>
                      <div
                        className="hidden text-sm text-muted-foreground md:inline"
                        data-oid="om86:i6"
                      >
                        liam@example.com
                      </div>
                    </TableCell>
                    <TableCell
                      className="hidden xl:table-column"
                      data-oid="uskpps1"
                    >
                      Sale
                    </TableCell>
                    <TableCell
                      className="hidden xl:table-column"
                      data-oid="hhx.ryq"
                    >
                      {/*<Badge className="text-xs" variant="outline">*/}
                      {/*  Approved*/}
                      {/*</Badge>*/}
                    </TableCell>
                    <TableCell
                      className="hidden md:table-cell lg:hidden xl:table-column"
                      data-oid="vn6x8b:"
                    >
                      2023-06-27
                    </TableCell>
                    <TableCell className="text-right" data-oid="v4v0_py">
                      $550.00
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card data-oid="nnfnyxk">
            <CardHeader data-oid="j2c:zra">
              <CardTitle data-oid="9wtikzj">Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8" data-oid="ks:b2n.">
              <div className="flex items-center gap-4" data-oid="jxr1bgd">
                <Avatar className="hidden h-9 w-9 sm:flex" data-oid="0ggnja:">
                  <AvatarImage
                    src="/avatars/01.png"
                    alt="Avatar"
                    data-oid=".3.ud2o"
                  />

                  <AvatarFallback data-oid="payzeaw">OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1" data-oid="pkjzt0c">
                  <p
                    className="text-sm font-medium leading-none"
                    data-oid="6e2.jju"
                  >
                    Olivia Martin
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="9:x28la"
                  >
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium" data-oid="2.n4ff1">
                  +$1,999.00
                </div>
              </div>
              <div className="flex items-center gap-4" data-oid="frcz:3y">
                <Avatar className="hidden h-9 w-9 sm:flex" data-oid="r_et:sf">
                  <AvatarImage
                    src="/avatars/02.png"
                    alt="Avatar"
                    data-oid="06vmlqd"
                  />

                  <AvatarFallback data-oid="2b1pbnu">JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1" data-oid="5t6a7kb">
                  <p
                    className="text-sm font-medium leading-none"
                    data-oid="_pbzoes"
                  >
                    Jackson Lee
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="gh2n6d7"
                  >
                    jackson.lee@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium" data-oid="9pzsctp">
                  +$39.00
                </div>
              </div>
              <div className="flex items-center gap-4" data-oid="ny:0lvy">
                <Avatar className="hidden h-9 w-9 sm:flex" data-oid="atxdvrt">
                  <AvatarImage
                    src="/avatars/03.png"
                    alt="Avatar"
                    data-oid="dysn7j7"
                  />

                  <AvatarFallback data-oid="50htogw">IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1" data-oid="-t6b7pm">
                  <p
                    className="text-sm font-medium leading-none"
                    data-oid="3243c1i"
                  >
                    Isabella Nguyen
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="kt4t2g0"
                  >
                    isabella.nguyen@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium" data-oid="8oz985m">
                  +$299.00
                </div>
              </div>
              <div className="flex items-center gap-4" data-oid="wjhrqpe">
                <Avatar className="hidden h-9 w-9 sm:flex" data-oid="1j_zlai">
                  <AvatarImage
                    src="/avatars/04.png"
                    alt="Avatar"
                    data-oid="tmeve0w"
                  />

                  <AvatarFallback data-oid="gq0-9wb">WK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1" data-oid="pkkr_-y">
                  <p
                    className="text-sm font-medium leading-none"
                    data-oid="4p-ede2"
                  >
                    William Kim
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="k8cppu:"
                  >
                    will@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium" data-oid="sh2yitq">
                  +$99.00
                </div>
              </div>
              <div className="flex items-center gap-4" data-oid="op1:95a">
                <Avatar className="hidden h-9 w-9 sm:flex" data-oid="hxgfcit">
                  <AvatarImage
                    src="/avatars/05.png"
                    alt="Avatar"
                    data-oid="5ijmtky"
                  />

                  <AvatarFallback data-oid="vmahv1q">SD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1" data-oid="il9njyh">
                  <p
                    className="text-sm font-medium leading-none"
                    data-oid="h-58yr-"
                  >
                    Sofia Davis
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="embz57:"
                  >
                    sofia.davis@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium" data-oid="p3d_bot">
                  +$39.00
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
