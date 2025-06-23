"use client";

import type React from "react";

import { useToastContext } from "@/components/providers/toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import * as Yup from "yup";

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
                "flex w-[400px] h-[50px] rounded border border-primary bg-transparent  px-3 py-2 pr-32 text-3xl shadow-sm transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-md lg:text-xl",
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
            <Button
              className="absolute rounded tracking-wide right-1 top-1 bottom-1 h-[calc(100%-0.5rem)] transition-all duration-200 hover:scale-[1.03] "
              type="submit"
            >
              Get Notified
            </Button>
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
