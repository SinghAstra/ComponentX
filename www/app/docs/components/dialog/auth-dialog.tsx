"use client";

import Dialog from "@/components/component-x/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { scaleInVariant } from "@/lib/variants";
import { motion } from "framer-motion";
import { Command, Loader } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

export const AuthDialog = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);

  const handleGitHubSignIn = async () => {
    try {
      setIsGithubLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      if (error instanceof Error) {
        console.log("error.stack is ", error.stack);
        console.log("error.message is ", error.message);
      }
    } finally {
      setIsGithubLoading(false);
      setIsDialogVisible(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsGoogleLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      if (error instanceof Error) {
        console.log("error.stack is ", error.stack);
        console.log("error.message is ", error.message);
      }
    } finally {
      setIsGoogleLoading(false);
      setIsDialogVisible(false);
    }
  };

  const toggleDialog = () => {
    setIsDialogVisible(!isDialogVisible);
  };

  return (
    <>
      <motion.div variants={scaleInVariant} onClick={toggleDialog}>
        <Button
          className="rounded px-1 transition-all duration-300 flex items-center justify-between w-full bg-transparent hover:bg-muted/40 font-normal"
          variant="outline"
          onClick={() => setIsDialogVisible(true)}
        >
          <span className="text-muted-foreground mx-2">Auth</span>
          <span className="flex items-center gap-1 bg-muted/60 p-1 rounded ">
            <Command /> A
          </span>
        </Button>
      </motion.div>
      <Dialog
        className="max-w-[400px] relative"
        isDialogVisible={isDialogVisible}
        setIsDialogVisible={setIsDialogVisible}
        keyToMakeDialogVisible="a"
      >
        <div className="space-y-4 p-4 text-center bg-muted/20">
          <div className="space-y-1 mb-4">
            <h1 className="text-3xl tracking-wider">{siteConfig.name}</h1>
            <span className="text-sm text-muted-foreground">
              Sign In to Get Started
            </span>
          </div>
          <Button
            onClick={handleGitHubSignIn}
            disabled={isGithubLoading}
            variant="outline"
            className="rounded w-full font-normal bg-muted/40 hover:bg-muted/20 transition-all duration-300 border shadow-md"
          >
            {isGithubLoading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Wait ...
              </>
            ) : (
              <>
                <FaGithub className="mr-2 h-5 w-5" />
                <span className="text-center tracking-wide">
                  Continue with GitHub
                </span>
              </>
            )}
          </Button>

          <div className="relative flex gap-1">
            <span className="flex-1 flex items-center">
              <Separator />
            </span>
            <span className="text-foreground">Or</span>
            <span className="flex-1 flex items-center">
              <Separator />
            </span>
          </div>

          <Button
            className="rounded w-full font-normal bg-muted/40 hover:bg-muted/20 transition-all duration-300 border shadow-md"
            onClick={handleGoogleSignIn}
            disabled={isGoogleLoading}
          >
            {isGoogleLoading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Wait ...
              </>
            ) : (
              <>
                <Image
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  width={18}
                  height={18}
                  className="mr-2"
                />
                <span className="text-center tracking-wide">
                  Continue with Google
                </span>
              </>
            )}
          </Button>
        </div>
      </Dialog>
    </>
  );
};
