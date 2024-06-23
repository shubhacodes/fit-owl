"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Page = () => {
  const router = useRouter();

  const handlePaymentClick = () => {
    router.push("/payment");
  };

  return (
    <div className="container mx-auto my-12">
      <h1 className="text-center text-2xl font-bold mb-6">Plans and Pricing</h1>
      <h2 className="text-xl mb-6">
        First, we will do a discovery call to understand where you are in your
        health + fitness journey and where you want to be. Then, you can choose
        either of the plans depending on your plan.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="shadow-lg p-6 rounded-lg">
          <h2 className="text-center text-xl font-semibold mb-4">Offline</h2>
          <Table>
            <TableCaption>
              Personal Training Fee Structure for Offline Sessions
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Number of sessions</TableHead>
                <TableHead>Validity (Days)</TableHead>
                <TableHead>Starting Fee (₹) (Upto 5km radius)</TableHead>
                <TableHead>Fee (₹) (After 6 months)</TableHead>
                <TableHead>Fee (₹) (After 12 months)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>12</TableCell>
                <TableCell>45</TableCell>
                <TableCell>30,000</TableCell>
                <TableCell>32,500</TableCell>
                <TableCell>35,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>25</TableCell>
                <TableCell>90</TableCell>
                <TableCell>60,000</TableCell>
                <TableCell>65,000</TableCell>
                <TableCell>70,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>36</TableCell>
                <TableCell>120</TableCell>
                <TableCell>82,000</TableCell>
                <TableCell>88,500</TableCell>
                <TableCell>95,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <button
            className="mt-6 w-full py-2 bg-blue-300 hover:bg-blue-400 text-black rounded-lg"
            onClick={handlePaymentClick}
          >
            Pay for Offline Plan
          </button>
        </div>

        <div className="shadow-lg p-6 rounded-lg">
          <h2 className="text-center text-xl font-semibold mb-4">Online</h2>
          <Table>
            <TableCaption>
              Personal Training Fee Structure for Online Sessions
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Number of sessions</TableHead>
                <TableHead>Validity (Days)</TableHead>
                <TableHead>Starting Fee (₹)</TableHead>
                <TableHead>Fee (₹) (After 6 months)</TableHead>
                <TableHead>Fee (₹) (After 12 months)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>12</TableCell>
                <TableCell>45</TableCell>
                <TableCell>25,000</TableCell>
                <TableCell>27,500</TableCell>
                <TableCell>30,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>25</TableCell>
                <TableCell>90</TableCell>
                <TableCell>50,000</TableCell>
                <TableCell>55,000</TableCell>
                <TableCell>60,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>36</TableCell>
                <TableCell>120</TableCell>
                <TableCell>68,000</TableCell>
                <TableCell>75,000</TableCell>
                <TableCell>82,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <button
            className="mt-6 w-full py-2 bg-blue-300 hover:bg-blue-400 text-black rounded-lg"
            onClick={handlePaymentClick}
          >
            Pay for Online Plan
          </button>
        </div>
      </div>

      <h2 className="text-xl mt-6">
        <span className="block text-center mb-2">
          The purpose of one session every week is to
        </span>
        1. Teach you the form and technique of the exercises that are going to
        be there in the plan. 2. Understand and address the challenges you
      </h2>
      <h2 className="text-xl mt-3 mb-6">
        All plans include nutrition counselling and regular follow-ups.{" "}
      </h2>
    </div>
  );
};

export default Page;
