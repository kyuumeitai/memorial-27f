import React from "react"

import { ThemeProvider } from "@/context/ThemeContext"
import { ScrollProvider } from "@/context/ScrollContext"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <ScrollProvider>
      {element}
    </ScrollProvider>
  </ThemeProvider>
)