"use client";

import type React from "react";

import { useToastContext } from "@/components/providers/toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import * as Yup from "yup";
import GradientInsetBackground from "./gradient-inset-background";

const NotificationInput = () => {
  const { setToastMessage } = useToastContext();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address")
      .required("Enter a valid email address"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setToastMessage(`Welcome ${values.email}`);
      resetForm();
    },
  });

  return (
    <div className="space-y-2">
      <motion.div
        whileInView={
          formik.touched.email && formik.errors.email
            ? { x: [-10, 10, -10, 10, 0] }
            : { x: 0 }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex flex-col gap-1 mx-4"
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="relative">
            <input
              className={cn(
                "flex max-w-[400px] w-full h-[50px] rounded border border-neutral-800 bg-transparent  px-3 py-2 pr-32 text-3xl shadow-sm transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-md lg:text-xl",
                formik.touched.email &&
                  formik.errors.email &&
                  "border-destructive focus-visible:ring-destructive"
              )}
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              autoComplete="off"
            />
            <div className="absolute right-1 top-1 bottom-1 h-[calc(100%-0.5rem)] border">
              <GradientInsetBackground />
              <Button
                variant="outline"
                className=" bg-transparent hover:bg-transparent rounded font-normal transition-all duration-200  "
                type="submit"
              >
                Get Notified
              </Button>
            </div>
          </div>
        </form>
        {formik.touched.email && formik.errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-destructive font-medium"
          >
            {formik.errors.email}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default NotificationInput;
