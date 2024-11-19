"use client";
import * as React from "react";
import { cn } from "@/utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface Textarea
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, Textarea>(
  ({ className, ...props }, ref) => {
    const radius = 100; // Adjust the radius of the hover effect
    const [visible, setVisible] = React.useState(false);
    const [value, setValue] = React.useState("");
    
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    // Handle mouse move for the animation
    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    // Handle input and limit to 60 words
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const inputText = e.target.value;
      const words = inputText.trim().split(/\s+/); // Split the input into words

      if (words.length <= 60) {
        setValue(inputText); // Update value if word count is within the limit
      } else {
        // Limit text to 60 words
        const limitedText = words.slice(0, 60).join(" ");
        setValue(limitedText);
      }
    };

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
              var(--blue-500),
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/textarea"
      >
        <textarea
          value={value} // Controlled textarea value
          onChange={handleChange} // Handle change for word limit
          className={cn(
            `flex w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/textarea:shadow-none transition duration-400`,
            className
          )}
          ref={ref}
          {...props}
          style={{ overflow: "hidden" }} // Hide the scrollbar
        />
      </motion.div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
