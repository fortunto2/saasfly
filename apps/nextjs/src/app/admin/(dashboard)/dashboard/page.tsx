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
    <div className="flex min-h-screen w-full flex-col" data-oid="7ounvhv">
      <header
        className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6"
        data-oid="s-:0zi5"
      >
        <nav
          className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
          data-oid="-gx4pzh"
        >
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            data-oid="r27s9ks"
          >
            <Package2 className="h-6 w-6" data-oid="65:.vbz" />
            <span className="sr-only" data-oid="_07nk-h">
              Acme Inc
            </span>
          </Link>
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
            data-oid="jew464d"
          >
            Dashboard
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
            data-oid="0lu4s_4"
          >
            Orders
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
            data-oid="k6plgdt"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
            data-oid="espgfmy"
          >
            Customers
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
            data-oid="8hfsr1j"
          >
            Analytics
          </Link>
        </nav>
        <Sheet data-oid="w.ko9d7">
          <SheetTrigger asChild data-oid="p1:k2bk">
            <Button
              variant="outline"
              className="shrink-0 md:hidden"
              data-oid="6.vztmb"
            >
              <Menu className="h-5 w-5" data-oid=".p275r6" />
              <span className="sr-only" data-oid="rad-n_o">
                Toggle navigation menu
              </span>
            </Button>
          </SheetTrigger>
          <SheetContent data-oid=".3irmh2">
            <nav className="grid gap-6 text-lg font-medium" data-oid="qnmnxd8">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
                data-oid="0xujkzm"
              >
                <Package2 className="h-6 w-6" data-oid="ltj8ff_" />
                <span className="sr-only" data-oid=".jid48n">
                  Acme Inc
                </span>
              </Link>
              <Link
                href="#"
                className="hover:text-foreground"
                data-oid="lxzxcr_"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                data-oid="wac6grn"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                data-oid="p7w5grm"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                data-oid="f6bq015"
              >
                Customers
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                data-oid="66.syrn"
              >
                Analytics
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div
          className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4"
          data-oid="lm_mhev"
        >
          <form className="ml-auto flex-1 sm:flex-initial" data-oid="yz2jijb">
            <div className="relative" data-oid="v0eedoa">
              <Search
                className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                data-oid="r0ggu7a"
              />

              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                data-oid="q567r7f"
              />
            </div>
          </form>
          <DropdownMenu data-oid="bmis_13">
            <DropdownMenuTrigger asChild data-oid="qu3e0ba">
              <Button
                variant="secondary"
                className="rounded-full"
                data-oid="_3ktgju"
              >
                <CircleUser className="h-5 w-5" data-oid="8541m2." />
                <span className="sr-only" data-oid="m4zc3ep">
                  Toggle user menu
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" data-oid="qonpv6t">
              <DropdownMenuLabel data-oid="yx4yfke">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator data-oid="fj-z.v1" />
              <DropdownMenuItem data-oid="n34amwf">Settings</DropdownMenuItem>
              <DropdownMenuItem data-oid="2y73wkb">Support</DropdownMenuItem>
              <DropdownMenuSeparator data-oid="p.w-4.3" />
              <DropdownMenuItem data-oid="bj4voyp">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main
        className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8"
        data-oid="uf35yfy"
      >
        <div
          className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4"
          data-oid="6jr:8hg"
        >
          <Card data-oid="ou5149y">
            <CardHeader
              className="flex flex-row items-center justify-between space-y-0 pb-2"
              data-oid="bk8ru9:"
            >
              <CardTitle className="text-sm font-medium" data-oid="07ugprj">
                Total Revenue
              </CardTitle>
              <DollarSign
                className="h-4 w-4 text-muted-foreground"
                data-oid="zcdb5ls"
              />
            </CardHeader>
            <CardContent data-oid="63wy_y3">
              <div className="text-2xl font-bold" data-oid="g43w19s">
                $45,231.89
              </div>
              <p className="text-xs text-muted-foreground" data-oid="gucilik">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card data-oid="5e0l-hz">
            <CardHeader
              className="flex flex-row items-center justify-between space-y-0 pb-2"
              data-oid="ni108.j"
            >
              <CardTitle className="text-sm font-medium" data-oid="hm6xqud">
                Subscriptions
              </CardTitle>
              <Users
                className="h-4 w-4 text-muted-foreground"
                data-oid=".6:9v23"
              />
            </CardHeader>
            <CardContent data-oid="6b3ntid">
              <div className="text-2xl font-bold" data-oid="bkuohdf">
                +2350
              </div>
              <p className="text-xs text-muted-foreground" data-oid="wv1vv21">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card data-oid=":ryaqh8">
            <CardHeader
              className="flex flex-row items-center justify-between space-y-0 pb-2"
              data-oid="8-rv.-0"
            >
              <CardTitle className="text-sm font-medium" data-oid="0wpxrce">
                Sales
              </CardTitle>
              <CreditCard
                className="h-4 w-4 text-muted-foreground"
                data-oid="wi_pd:i"
              />
            </CardHeader>
            <CardContent data-oid="9-tyjz2">
              <div className="text-2xl font-bold" data-oid="vt41ind">
                +12,234
              </div>
              <p className="text-xs text-muted-foreground" data-oid="__bjlth">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card data-oid="urvr_64">
            <CardHeader
              className="flex flex-row items-center justify-between space-y-0 pb-2"
              data-oid="bcc0hj0"
            >
              <CardTitle className="text-sm font-medium" data-oid="qmjiqzk">
                Active Now
              </CardTitle>
              <Activity
                className="h-4 w-4 text-muted-foreground"
                data-oid="-cbs0l7"
              />
            </CardHeader>
            <CardContent data-oid=".un7ofg">
              <div className="text-2xl font-bold" data-oid="rjsjuen">
                +573
              </div>
              <p className="text-xs text-muted-foreground" data-oid="3llr4ez">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <div
          className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3"
          data-oid="f_dqg5z"
        >
          <Card className="xl:col-span-2" data-oid="lsab-6h">
            <CardHeader
              className="flex flex-row items-center"
              data-oid="p8kg8h5"
            >
              <div className="grid gap-2" data-oid=".3oj983">
                <CardTitle data-oid="hjuf.gn">Transactions</CardTitle>
                <CardDescription data-oid="zj:h5y-">
                  Recent transactions from your store.
                </CardDescription>
              </div>
              <Button size="sm" className="ml-auto gap-1" data-oid="3xf_z3n">
                <Link href="#" data-oid="mbf0jgi">
                  View All
                  <ArrowUpRight className="h-4 w-4" data-oid="-dlos9f" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent data-oid="fyq.hi8">
              <Table data-oid=":yri6ux">
                <TableHeader data-oid="5toco11">
                  <TableRow data-oid="s:m_a3e">
                    <TableHead data-oid="4l5.vx:">Customer</TableHead>
                    <TableHead
                      className="hidden xl:table-column"
                      data-oid="z77.:mo"
                    >
                      Type
                    </TableHead>
                    <TableHead
                      className="hidden xl:table-column"
                      data-oid="39fh8xs"
                    >
                      Status
                    </TableHead>
                    <TableHead
                      className="hidden xl:table-column"
                      data-oid="xfo34ti"
                    >
                      Date
                    </TableHead>
                    <TableHead className="text-right" data-oid="f_7w3v_">
                      Amount
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody data-oid="g3r3-qr">
                  <TableRow data-oid="fc57pxd">
                    <TableCell data-oid="revhmmq">
                      <div className="font-medium" data-oid="phrdi8c">
                        Liam Johnson
                      </div>
                      <div
                        className="hidden text-sm text-muted-foreground md:inline"
                        data-oid="kj29173"
                      >
                        liam@example.com
                      </div>
                    </TableCell>
                    <TableCell
                      className="hidden xl:table-column"
                      data-oid="0pc:z4w"
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
                      data-oid="hobenu3"
                    >
                      2023-06-23
                    </TableCell>
                    <TableCell className="text-right" data-oid="znkx26:">
                      $250.00
                    </TableCell>
                  </TableRow>
                  <TableRow data-oid="5_zde4_">
                    <TableCell data-oid="9wuropv">
                      <div className="font-medium" data-oid="md3u.pb">
                        Olivia Smith
                      </div>
                      <div
                        className="hidden text-sm text-muted-foreground md:inline"
                        data-oid="6syjl60"
                      >
                        olivia@example.com
                      </div>
                    </TableCell>
                    <TableCell
                      className="hidden xl:table-column"
                      data-oid="je8_e7j"
                    >
                      Refund
                    </TableCell>
                    <TableCell
                      className="hidden xl:table-column"
                      data-oid="rt3f2ud"
                    >
                      {/*<Badge className="text-xs" variant="outline">*/}
                      {/*  Declined*/}
                      {/*</Badge>*/}
                    </TableCell>
                    <TableCell
                      className="hidden md:table-cell lg:hidden xl:table-column"
                      data-oid="apgxy4q"
                    >
                      2023-06-24
                    </TableCell>
                    <TableCell className="text-right" data-oid="9szna06">
                      $150.00
                    </TableCell>
                  </TableRow>
                  <TableRow data-oid="0wsq--6">
                    <TableCell data-oid=":6:6l5_">
                      <div className="font-medium" data-oid="rd.uo1c">
                        Noah Williams
                      </div>
                      <div
                        className="hidden text-sm text-muted-foreground md:inline"
                        data-oid=":ej:nxv"
                      >
                        noah@example.com
                      </div>
                    </TableCell>
                    <TableCell
                      className="hidden xl:table-column"
                      data-oid="w.j-ly6"
                    >
                      Subscription
                    </TableCell>
                    <TableCell
                      className="hidden xl:table-column"
                      data-oid="h65t1i9"
                    >
                      {/*<Badge className="text-xs" variant="outline">*/}
                      {/*  Approved*/}
                      {/*</Badge>*/}
                    </TableCell>
                    <TableCell
                      className="hidden md:table-cell lg:hidden xl:table-column"
                      data-oid="d_rlv9q"
                    >
                      2023-06-25
                    </TableCell>
                    <TableCell className="text-right" data-oid="rierfea">
                      $350.00
                    </TableCell>
                  </TableRow>
                  <TableRow data-oid="dxqw:xo">
                    <TableCell data-oid="psrc2fs">
                      <div className="font-medium" data-oid="9vuhc-4">
                        Emma Brown
                      </div>
                      <div
                        className="hidden text-sm text-muted-foreground md:inline"
                        data-oid="dww:l9s"
                      >
                        emma@example.com
                      </div>
                    </TableCell>
                    <TableCell
                      className="hidden xl:table-column"
                      data-oid="ibxxz6y"
                    >
                      Sale
                    </TableCell>
                    <TableCell
                      className="hidden xl:table-column"
                      data-oid="h4tx3zd"
                    >
                      {/*<Badge className="text-xs" variant="outline">*/}
                      {/*  Approved*/}
                      {/*</Badge>*/}
                    </TableCell>
                    <TableCell
                      className="hidden md:table-cell lg:hidden xl:table-column"
                      data-oid="-xb9ucl"
                    >
                      2023-06-26
                    </TableCell>
                    <TableCell className="text-right" data-oid="27g-byc">
                      $450.00
                    </TableCell>
                  </TableRow>
                  <TableRow data-oid="2jjf_u8">
                    <TableCell data-oid="peb_i.k">
                      <div className="font-medium" data-oid="2w5-hj9">
                        Liam Johnson
                      </div>
                      <div
                        className="hidden text-sm text-muted-foreground md:inline"
                        data-oid="ajf59fi"
                      >
                        liam@example.com
                      </div>
                    </TableCell>
                    <TableCell
                      className="hidden xl:table-column"
                      data-oid="z-ch2rx"
                    >
                      Sale
                    </TableCell>
                    <TableCell
                      className="hidden xl:table-column"
                      data-oid="_m.nu2w"
                    >
                      {/*<Badge className="text-xs" variant="outline">*/}
                      {/*  Approved*/}
                      {/*</Badge>*/}
                    </TableCell>
                    <TableCell
                      className="hidden md:table-cell lg:hidden xl:table-column"
                      data-oid="y4urxx-"
                    >
                      2023-06-27
                    </TableCell>
                    <TableCell className="text-right" data-oid="sy1kklb">
                      $550.00
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card data-oid="-gtfx1m">
            <CardHeader data-oid="n8yxo1l">
              <CardTitle data-oid="2ebyt7k">Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8" data-oid="cbjvv:a">
              <div className="flex items-center gap-4" data-oid="a:-ayoc">
                <Avatar className="hidden h-9 w-9 sm:flex" data-oid="p5u-rsu">
                  <AvatarImage
                    src="/avatars/01.png"
                    alt="Avatar"
                    data-oid="5b9cdw9"
                  />

                  <AvatarFallback data-oid="49s42xf">OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1" data-oid=".9upxbz">
                  <p
                    className="text-sm font-medium leading-none"
                    data-oid="wr-2hm9"
                  >
                    Olivia Martin
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="1yj5nbk"
                  >
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium" data-oid="mea8jed">
                  +$1,999.00
                </div>
              </div>
              <div className="flex items-center gap-4" data-oid="lsw0-ke">
                <Avatar className="hidden h-9 w-9 sm:flex" data-oid="x78h7.f">
                  <AvatarImage
                    src="/avatars/02.png"
                    alt="Avatar"
                    data-oid="zbx4-6r"
                  />

                  <AvatarFallback data-oid="l1vitm8">JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1" data-oid="s9_:5zn">
                  <p
                    className="text-sm font-medium leading-none"
                    data-oid="s0eapfe"
                  >
                    Jackson Lee
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="3lktjwm"
                  >
                    jackson.lee@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium" data-oid="hzi.hqa">
                  +$39.00
                </div>
              </div>
              <div className="flex items-center gap-4" data-oid="p-wmt1n">
                <Avatar className="hidden h-9 w-9 sm:flex" data-oid="4lbet0z">
                  <AvatarImage
                    src="/avatars/03.png"
                    alt="Avatar"
                    data-oid="ay4eiip"
                  />

                  <AvatarFallback data-oid="avh2qf:">IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1" data-oid="y5xqraq">
                  <p
                    className="text-sm font-medium leading-none"
                    data-oid="-pr-rk7"
                  >
                    Isabella Nguyen
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="id_pqae"
                  >
                    isabella.nguyen@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium" data-oid="jthvbwc">
                  +$299.00
                </div>
              </div>
              <div className="flex items-center gap-4" data-oid="q.q5uzt">
                <Avatar className="hidden h-9 w-9 sm:flex" data-oid="b28tg.d">
                  <AvatarImage
                    src="/avatars/04.png"
                    alt="Avatar"
                    data-oid="247k4h5"
                  />

                  <AvatarFallback data-oid=":6-jrf5">WK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1" data-oid="g9v_9s9">
                  <p
                    className="text-sm font-medium leading-none"
                    data-oid="3gmld9j"
                  >
                    William Kim
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="p:fa03g"
                  >
                    will@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium" data-oid="1.rlzjg">
                  +$99.00
                </div>
              </div>
              <div className="flex items-center gap-4" data-oid="nm76:m2">
                <Avatar className="hidden h-9 w-9 sm:flex" data-oid="wy63rz6">
                  <AvatarImage
                    src="/avatars/05.png"
                    alt="Avatar"
                    data-oid="sk2ar3v"
                  />

                  <AvatarFallback data-oid="c9hm0g1">SD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1" data-oid="40c5zw9">
                  <p
                    className="text-sm font-medium leading-none"
                    data-oid=".om.y1o"
                  >
                    Sofia Davis
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="re553cb"
                  >
                    sofia.davis@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium" data-oid="38xpdce">
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
