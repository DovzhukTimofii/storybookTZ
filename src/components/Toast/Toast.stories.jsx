import React from "react";
import { ToastProvider } from "./ToastProvider";
import { useToast } from "./useToast";

export default {
  title: "Feedback/Toast",
  decorators: [
    (StoryFn) => (
      <div style={{ padding: 20 }}>
        <StoryFn />
      </div>
    ),
  ],
};

function Demo() {
  const { show } = useToast();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <button onClick={() => show("Info", "This is info toast", { type: "info" })}>
        Show Info
      </button>
      <button onClick={() => show("Success", "Saved successfully", { type: "success", duration: 2000 })}>
        Show Success (2s)
      </button>
      <button onClick={() => show("Error", "Something failed", { type: "error", duration: 8000 })}>
        Show Error (8s)
      </button>
      <button onClick={() => show("Sticky", "Manual close", { type: "warning", duration: 0, closable: true })}>
        Show Sticky
      </button>
    </div>
  );
}

export const Playground = () => (
  <ToastProvider>
    <Demo />
  </ToastProvider>
);
