// Copyright 2024 Robert Cronin
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { ReactNode, createContext, useState } from "react";
import { Snackbar } from "@mui/material";

interface SnackbarContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  onClose: () => void;
  message: string;
  setMessage: (message: string) => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

interface SnackbarProviderProps {
  children: ReactNode;
}

const SnackbarProvider: React.FC<SnackbarProviderProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const onClose = () => {
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider
      value={{ open, setOpen, onClose, message, setMessage }}
    >
      <>
        {children}
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={onClose}
          message={message}
        />
      </>
    </SnackbarContext.Provider>
  );
};

export { SnackbarProvider, SnackbarContext };
export type { SnackbarContextType };
