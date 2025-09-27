"use client";
import BorderHoverLink from "@/components/component-x/border-hover-link";
import {
  Carousel,
  CarouselBottomNavigation,
  CarouselContent,
  CarouselFooter,
  CarouselIndicatorLabel,
  CarouselItem,
} from "@/components/component-x/carousel";
import ConicBackground from "@/components/component-x/conic-background";
import {
  FloatingNavbar,
  FloatingNavbarContent,
  FloatingNavbarItem,
  FloatingNavbarSeparator,
} from "@/components/component-x/floating-navbar";
import {
  HoverPopOver,
  HoverPopOverContent,
  HoverPopOverTrigger,
} from "@/components/component-x/hover-popover";
import Sidebar from "@/components/component-x/sidebar";
import {
  TabItem,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/component-x/tab";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/component-x/table";
import Navbar from "@/components/navigation/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import {
  blurInVariant,
  containerVariant,
  scaleInVariant,
} from "@/lib/variants";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  BookOpen,
  Briefcase,
  Home,
  ImageIcon,
  Info,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import EllipseBackground from "../../components/component-x/ellipse-background";
import GridBackground from "../../components/component-x/grid-background";
import LampBackground from "../../components/component-x/lamp-background";
import MaskedGridBackground from "../../components/component-x/masked-grid-background";
import MovingBackground from "../../components/component-x/moving-background";
import MovingBorder from "../../components/component-x/moving-border";
import NotificationInput from "../../components/component-x/notification-input";
import RadialBackground from "../../components/component-x/radial-background";
import AuthModalShowCase from "../../components/showcase/auth-modal-showcase";
import DialogBoilerPlateShowCase from "../../components/showcase/dialog-boilerplate-showcase";
import SearchDialogShowCase from "../../components/showcase/search-dialog-showcase";
import Footer from "./footer";
import Hero from "./hero";

const HomePage = () => {
  const [showFloatingNavbar, setShowFloatingNavbar] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  interface User {
    id: number;
    name: string;
    email: string;
    role: "Admin" | "Member" | "Guest";
    avatar: string;
  }

  const users: User[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Member",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    },
    {
      id: 3,
      name: "Peter Jones",
      email: "peter.jones@example.com",
      role: "Guest",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    },
    {
      id: 4,
      name: "Mary Williams",
      email: "mary.williams@example.com",
      role: "Admin",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
  ];
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      className="min-h-screen flex flex-col  "
    >
      <Navbar />
      <Hero />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr px-2 mb-6">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="bg-background col-span-1 sm:col-span-2 lg:col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border rounded"
        >
          <FloatingNavbar show={showFloatingNavbar}>
            <FloatingNavbarContent>
              <FloatingNavbarItem href="/" icon={Home} label="Home" />
              <FloatingNavbarSeparator />
              <FloatingNavbarItem
                href="/background"
                icon={Info}
                label="About"
              />
              <FloatingNavbarSeparator />
              <FloatingNavbarItem href="/work" icon={Briefcase} label="Work" />
              <FloatingNavbarSeparator />
              <FloatingNavbarItem href="/blog" icon={BookOpen} label="Blog" />
              <FloatingNavbarSeparator />
              <FloatingNavbarItem
                href="/gallery"
                icon={ImageIcon}
                label="Gallery"
              />
            </FloatingNavbarContent>
          </FloatingNavbar>
          <motion.div variants={scaleInVariant}>
            <Button
              variant="outline"
              className="rounded font-normal bg-muted/20 hover:bg-muted/40 transition-all duration-300"
              onClick={() => setShowFloatingNavbar(!showFloatingNavbar)}
            >
              {showFloatingNavbar ? (
                <>
                  <X className="h-5 w-5 mr-1" />
                  <span>Hide Floating Navbar</span>
                </>
              ) : (
                <>
                  <Menu className="h-5 w-5 mr-1" />
                  <span>View Floating Navbar</span>
                </>
              )}
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-300 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
        >
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center translate-y-5 group-hover:translate-y-0 transition-all duration-200 "
            variants={blurInVariant}
          >
            Conic Background
          </motion.h1>
          <Link
            href="/background/conic-background"
            className="border px-3 py-1 rounded bg-muted/20 hover:bg-muted/40 backdrop-blur-md translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1 items-center"
          >
            View in Action
            <ArrowRightIcon className="size-4 transform-all duration-300 group-hover:translate-x-1" />
          </Link>
          <ConicBackground />
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
        >
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center translate-y-5 group-hover:translate-y-0 transition-all duration-200 "
            variants={blurInVariant}
          >
            Radial Background
          </motion.h1>
          <Link
            href="/background/radial-background"
            className="border px-3 py-1 rounded bg-muted/20 hover:bg-muted/40 backdrop-blur-md translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1 items-center"
          >
            View in Action
            <ArrowRightIcon className="size-4 transform-all duration-300 group-hover:translate-x-1" />
          </Link>
          <RadialBackground animate={true} position="left-center" />
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="bg-background col-span-1 row-span-1  min-h-[250px] flex items-center justify-center border  rounded"
        >
          <motion.div variants={scaleInVariant}>
            <Button
              variant="outline"
              className="relative bg-transparent hover:bg-transparent rounded font-normal z-[5]"
            >
              Moving Background
              <MovingBackground />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded bg-background"
        >
          <DialogBoilerPlateShowCase />
        </motion.div>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
        >
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center translate-y-5 group-hover:translate-y-0 transition-all duration-200 "
            variants={blurInVariant}
          >
            Ellipse Background
          </motion.h1>
          <Link
            href="/background/ellipse-background"
            className="border px-3 py-1 rounded bg-muted/20 hover:bg-muted/40 backdrop-blur-md translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1 items-center"
          >
            View in Action
            <ArrowRightIcon className="size-4 transform-all duration-300 group-hover:translate-x-1" />
          </Link>
          <EllipseBackground position="top-center" />
        </motion.div>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
        >
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center translate-y-5 group-hover:translate-y-0 transition-all duration-200 "
            variants={blurInVariant}
          >
            Lamp Background
          </motion.h1>
          <Link
            href="/background/lamp-background"
            className="border px-3 py-1 rounded bg-muted/20 hover:bg-muted/40 backdrop-blur-md translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1 items-center"
          >
            View in Action
            <ArrowRightIcon className="size-4 transform-all duration-300 group-hover:translate-x-1" />
          </Link>
          <LampBackground />
        </motion.div>

        <div className="col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded bg-background">
          <SearchDialogShowCase />
        </div>

        <div className="col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative bg-background">
          <div className="p-[2px] relative z-[2] overflow-hidden rounded">
            <MovingBorder />
            <div className="w-full h-full px-3 py-1 bg-background border rounded">
              Moving Border
            </div>
          </div>
        </div>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className=" col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
        >
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center translate-y-5 group-hover:translate-y-0 transition-all duration-200 "
            variants={blurInVariant}
          >
            Grid Background
          </motion.h1>
          <Link
            href="/background/grid-background"
            className="border px-3 py-1 rounded bg-muted/20 hover:bg-muted/40 backdrop-blur-md translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1 items-center"
          >
            View in Action
            <ArrowRightIcon className="size-4 transform-all duration-300 group-hover:translate-x-1" />
          </Link>
          <GridBackground />
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className=" col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
        >
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center translate-y-5 group-hover:translate-y-0 transition-all duration-200 "
            variants={blurInVariant}
          >
            Masked Grid Background
          </motion.h1>
          <Link
            href="/background/masked-grid-background"
            className="border px-3 py-1 rounded bg-muted/20 hover:bg-muted/40 backdrop-blur-md translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1 items-center"
          >
            View in Action
            <ArrowRightIcon className="size-4 transform-all duration-300 group-hover:translate-x-1" />
          </Link>
          <MaskedGridBackground />
        </motion.div>

        <div className="col-span-1  row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative bg-background">
          <AuthModalShowCase />
        </div>
        <div className="col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded bg-background">
          <NotificationInput />
        </div>
        <div className="col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded bg-background">
          <BorderHoverLink className="text-muted-foreground hover:text-foreground transition-all duration-200">
            Hover me
          </BorderHoverLink>
        </div>
        <div className="col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded bg-background">
          <HoverPopOver>
            <HoverPopOverTrigger>
              <Button
                variant="outline"
                className="rounded transition-all duration-300 bg-muted/20 hover:bg-muted/40"
              >
                Pop Over
              </Button>
            </HoverPopOverTrigger>
            <HoverPopOverContent>
              <div className="mt-2 border bg-muted/40 w-64">
                {[1, 2, 3].map((elem) => {
                  return (
                    <div
                      key={elem}
                      className="px-3 py-1 hover:bg-muted/60 cursor-pointer"
                    >
                      This is Pop Over {elem}
                    </div>
                  );
                })}
              </div>
            </HoverPopOverContent>
          </HoverPopOver>
        </div>
        <div className="col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded bg-background">
          <h1 className="text-shine">{siteConfig.name}</h1>
        </div>
        <div className="col-span-1 row-span-1 min-h-[250px] border border-neutral-800 rounded bg-background p-2">
          <Tabs className="h-full flex flex-col">
            <TabsList>
              <TabsTrigger index={0}>First</TabsTrigger>
              <TabsTrigger index={1}>Second</TabsTrigger>
              <TabsTrigger index={2}>Third</TabsTrigger>
            </TabsList>
            <TabsContent className="flex-1">
              <TabItem className="flex items-center justify-center bg-muted/10 border h-full ">
                First
              </TabItem>
              <TabItem className="flex items-center justify-center bg-muted/10 border h-full">
                Second
              </TabItem>
              <TabItem className="flex items-center justify-center bg-muted/10 border h-full">
                Third
              </TabItem>
            </TabsContent>
          </Tabs>
        </div>
        <div className="col-span-1 row-span-1 min-h-[250px] border border-neutral-800 rounded bg-background p-2 flex">
          <Carousel className="w-full h-full flex flex-col gap-4">
            <CarouselContent className="flex-1">
              {Array.from({ length: 5 }, (_, i) => {
                return (
                  <CarouselItem
                    key={i}
                    className="w-full h-full flex items-center justify-center"
                  >
                    {i + 1}
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselFooter>
              <CarouselIndicatorLabel
                labels={["First", "Second", "Third", "Fourth", "Fifth"]}
              />
              <CarouselBottomNavigation />
            </CarouselFooter>
          </Carousel>
        </div>
        <div className="col-span-1 row-span-1 min-h-[250px] border border-neutral-800 rounded bg-background p-2 flex items-center justify-center">
          <Button
            variant={"outline"}
            className="hover:bg-muted/40 transition-all duration-300 font-normal rounded"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            Toggle Sidebar
          </Button>
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          >
            <div className="flex items-center justify-center w-64 h-full text-center">
              <p>You can place Sidebar Content here.</p>
            </div>
          </Sidebar>
        </div>
        <div className="col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative overflow-x-auto">
          <Table className="max-w-xl mx-auto">
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Avatar</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Avatar className="mx-auto">
                      <AvatarImage src={user.avatar} alt={`@${user.name}`} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className="text-center">
                    <Badge
                      className="rounded"
                      variant={user.role === "Admin" ? "default" : "outline"}
                    >
                      {user.role}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative overflow-x-auto">
          <div className="absolute inset-0 z-[-1] overflow-hidden">
            <Image
              src="/assets/gradient.avif"
              alt="static asset"
              width={1920}
              height={480}
              className="object-cover"
            />
          </div>

          <h1 className="font-semibold text-6xl">Static Background</h1>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default HomePage;
