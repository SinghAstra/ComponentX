"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  buttonVariant,
  dialogItemVariant,
  scaleInVariant,
} from "@/lib/variant";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Command,
  HelpCircle,
  Search,
  Settings,
  User,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const DialogShowCase = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleDialog = () => {
    setIsDialogVisible(!isDialogVisible);
    if (!isDialogVisible) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        setIsDialogVisible(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsDialogVisible(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDialogVisible(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    if (isDialogVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isDialogVisible]);

  const commands = [
    {
      icon: Search,
      label: "Search",
      description: "Find anything quickly",
      shortcut: "⌘F",
    },
    {
      icon: Zap,
      label: "Quick Actions",
      description: "Perform common tasks",
      shortcut: "⌘J",
    },
    {
      icon: Settings,
      label: "Settings",
      description: "Configure your preferences",
      shortcut: "⌘,",
    },
    {
      icon: User,
      label: "Profile",
      description: "Manage your account",
      shortcut: "⌘P",
    },
    {
      icon: HelpCircle,
      label: "Help",
      description: "Get support and documentation",
      shortcut: "⌘?",
    },
  ];

  const filteredCommands = commands.filter(
    (command) =>
      command.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      command.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[80vw] h-[80vh] border border-border/40 relative rounded-lg overflow-hidden flex items-center justify-center">
        <motion.div
          variants={buttonVariant}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          whileTap="tap"
          onClick={toggleDialog}
          className="flex flex-col items-center gap-4"
        >
          <Button
            variant="outline"
            className="bg-background text-foreground px-6 py-3 text-sm tracking-wide"
          >
            <Command className="w-4 h-4" />
            Press Ctrl + K or Click Here
          </Button>
        </motion.div>
        {isDialogVisible && (
          <div className="fixed inset-0 bg-background/20 backdrop-blur-sm flex items-start justify-center pt-[10vh]">
            <motion.div
              variants={scaleInVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-2xl bg-muted/10 border border-border/40 rounded-lg shadow-2xl overflow-hidden relative "
              ref={dialogRef}
            >
              <div className="border-b border-border px-4 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    ref={inputRef}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for commands..."
                    className="pl-10 border-0 bg-transparent focus-visible:ring-0 text-base placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <div className="max-h-96 overflow-y-auto">
                {filteredCommands.length > 0 ? (
                  <div className="p-2">
                    {filteredCommands.map((command, index) => (
                      <motion.div
                        key={command.label}
                        variants={dialogItemVariant}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: index * 0.05 }}
                        onClick={toggleDialog}
                        className="flex items-center justify-between p-3 rounded-md hover:bg-muted/40 cursor-pointer group transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-md bg-muted/70 flex items-center justify-center group-hover:bg-muted/80 transition-all duration-200">
                            <command.icon className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground text-sm">
                              {command.label}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {command.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <kbd className="px-2 py-1 text-xs bg-muted/70 group-hover:bg-muted/80 text-muted-foreground rounded border border-border transition-all duration-200">
                            {command.shortcut}
                          </kbd>
                          <ArrowRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-200" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <Search className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground text-sm">
                      No commands found for {searchQuery}
                    </p>
                  </div>
                )}
              </div>

              <div className="border-t border-border p-3 bg-muted/50">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-muted/70 rounded border border-border">
                        ↑↓
                      </kbd>
                      Navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-muted/70 rounded border border-border">
                        ↵
                      </kbd>
                      Select
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-muted/70 rounded border border-border">
                      Esc
                    </kbd>
                    Close
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DialogShowCase;
