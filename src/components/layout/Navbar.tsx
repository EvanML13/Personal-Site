import { NavLink } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion"

// Initially Link To The Portfolio Tab, Switch To The Reflection Tab With The /reflection Slug 
const links = [
  { to: "/", label: "Portfolio" },
  { to: "/reflection", label: "Reflection"}
] 

export default function Navbar() {
  const reduceMotion = useReducedMotion();

  // Nav Bar Between Portfolio And Reflection With Liquid Glass (Apple Design) Styling
  return (
    <nav className="sticky top-0 z-50 flex justify-center gap-2 bg-slate-900/70 backdrop-blur-xl py-4 [mask-image:linear-gradient(to_bottom,black_85%,transparent)]">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end
          className="relative px-5 py-2 text-sm font-medium tracking-wide active:scale-95 transition-transform duration-100"
        >
          {({ isActive }) => (
            <>
              <span className={isActive ? "text-white" : "text-slate-400 hover:text-white transition-colors"}>
                {link.label}
              </span>
              { isActive && (
                <motion.div 
                  layoutId="active-tab-underline"
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-white rounded-full"
                  transition={
                    reduceMotion
                      ? { duration: 0.15 }
                      : { type: "spring", bounce: 0, duration: 0.4 }
                  }
                />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
