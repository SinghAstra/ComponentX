"use client";

import { useToastContext } from "@/components/providers/toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeInVariant, hover, scaleInVariant, tap } from "@/lib/variant";
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { setToastMessage } = useToastContext();

  const toggleDialog = () => {
    setIsDialogVisible(!isDialogVisible);
    if (!isDialogVisible) {
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

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

  // Reset selected index when search results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  const handleSelectCommand = (index: number) => {
    const command = filteredCommands[index];
    if (command) {
      setToastMessage(`Selected: ${command.label}`);
      toggleDialog();
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

    const handleDialogKeyDown = (event: KeyboardEvent) => {
      if (!isDialogVisible) return;

      switch (event.key) {
        case "Escape":
          setIsDialogVisible(false);
          setSearchQuery("");
          setSelectedIndex(0);
          break;
        case "ArrowDown":
          event.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredCommands.length - 1 ? prev + 1 : 0
          );
          break;
        case "ArrowUp":
          event.preventDefault();
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredCommands.length - 1
          );
          break;
        case "Enter":
          event.preventDefault();
          const command = filteredCommands[selectedIndex];
          if (command) {
            setToastMessage(`Selected: ${command.label}`);
            setIsDialogVisible(false);
          }
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    if (isDialogVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleDialogKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleDialogKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isDialogVisible, filteredCommands, selectedIndex, setToastMessage]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[80vw] h-[80vh] border border-border/40 relative rounded-lg overflow-hidden flex items-center justify-center">
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          whileHover={hover}
          whileTap={tap}
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
          <div className="fixed inset-0 flex items-start justify-center pt-[10vh]">
            {/* Solid background layer */}
            {/* Blur overlay */}
            <div className="absolute inset-0 bg-background/20 backdrop-blur-sm" />

            <motion.div
              variants={scaleInVariant}
              initial="hidden"
              animate="visible"
              className="w-full max-w-2xl bg-card border border-border/40 rounded-lg shadow-2xl overflow-hidden relative z-10"
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
                        variants={fadeInVariant}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleSelectCommand(index)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`flex items-center justify-between p-3 rounded-md cursor-pointer group transition-all duration-200 ${
                          selectedIndex === index
                            ? "bg-muted/60 ring-1 ring-border/50"
                            : "hover:bg-muted/40"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200 ${
                              selectedIndex === index
                                ? "bg-muted/80"
                                : "bg-muted/70 group-hover:bg-muted/80"
                            }`}
                          >
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
                          <kbd
                            className={`px-2 py-1 text-xs text-muted-foreground rounded border border-border transition-all duration-200 ${
                              selectedIndex === index
                                ? "bg-muted/80"
                                : "bg-muted/70 group-hover:bg-muted/80"
                            }`}
                          >
                            {command.shortcut}
                          </kbd>
                          <ArrowRight
                            className={`w-3 h-3 text-muted-foreground transition-all duration-200 ${
                              selectedIndex === index
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                            }`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <Search className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground text-sm">
                      No commands found for &apos;{searchQuery}&apos;
                    </p>
                  </div>
                )}
              </div>

              <div className="border-t border-border p-3 bg-muted/30">
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
