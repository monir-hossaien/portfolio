import { cn } from "../../../lib/utils.js";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// Main Card Grid
export const CardEffect = ({ items, className }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
            {items.map((item, idx) => (
                <a
                    href={item?.link || "#"}
                    key={item?.link || idx}
                    title={item?.title}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200/70 dark:bg-slate-800/80 block rounded-3xl z-10"
                                layoutId={`hoverBackground-${idx}`} // make layoutId unique
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                            />
                        )}
                    </AnimatePresence>

                    <Card>
                        <CardImage src={item?.image} />
                        <CardTitle>{item?.title}</CardTitle>
                        <CardDescription>{item?.shortDes}</CardDescription>
                        <CardFooter>
                            <span>{item?.category}</span>
                            <span className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                {item?.date}
              </span>
                        </CardFooter>
                    </Card>
                </a>
            ))}
        </div>
    );
};

// Card Wrapper
export const Card = ({ className, children }) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-3 py-4 overflow-hidden bg-white dark:bg-black shadow-sm border group-hover:border-slate-700 border-transparent dark:border-white/[0.2] relative z-20",
                className
            )}
        >
            <div className="relative z-20">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

// Card Image
export const CardImage = ({ src, alt = "Card image", className }) => {
    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            className={cn(
                "rounded-xl w-full h-48 object-cover hover:scale-105 transition-all duration-300 aspect-[3/2]",
                className
            )}
        />
    );
};

// Card Title
export const CardTitle = ({ className, children }) => {
    return (
        <h4 className={cn("text-lg text-gray-800 dark:text-white font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};

// Card Description
export const CardDescription = ({ className, children }) => {
    return (
        <p
            className={cn(
                "mt-5 text-neutral-700 dark:text-neutral-300 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};

// Card Footer
export const CardFooter = ({ className, children }) => {
    return (
        <footer
            className={cn(
                "flex justify-between items-center mt-8 text-neutral-700 dark:text-neutral-300 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </footer>
    );
};
