import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

type CommandItem = {
  id: string;
  label: string;
  keywords?: string;
  action: () => void;
};

export default function CommandPalette() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const email = "ricardo@ferreiras.dev.br";
  const resumeUrl = "https://www.ferreiras.dev.br/cv/ResumeRicardoFerreira.pdf";

  const close = React.useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  const items = React.useMemo<CommandItem[]>(
    () => [
      { id: "home", label: "Go to Home", keywords: "index welcome", action: () => navigate("/") },
      { id: "history", label: "Go to History", keywords: "background career", action: () => navigate("/history") },
      { id: "skills", label: "Go to Skills", keywords: "stack technologies", action: () => navigate("/skills") },
      { id: "projects", label: "Go to Projects", keywords: "portfolio work", action: () => navigate("/projects") },
      { id: "contacts", label: "Go to Contacts", keywords: "contact email whatsapp", action: () => navigate("/contacts") },
      { id: "wakatime", label: "Go to Wakatime", keywords: "code time", action: () => navigate("/wakatime") },
      {
        id: "resume",
        label: "Open Resume (PDF)",
        keywords: "cv curriculum",
        action: () => window.open(resumeUrl, "_blank", "noopener,noreferrer"),
      },
      {
        id: "copy-email",
        label: "Copy Email",
        keywords: "mailto",
        action: async () => {
          try {
            await navigator.clipboard.writeText(email);
          } catch {
            window.prompt("Copy email:", email);
          }
        },
      },
    ],
    [navigate],
  );

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => {
      const haystack = `${item.label} ${item.keywords ?? ""}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [items, query]);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toLowerCase().includes("mac");
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

      if (cmdOrCtrl && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }

      if (!open) return;

      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }

      if (e.key === "Enter") {
        const first = filtered[0];
        if (!first) return;
        e.preventDefault();
        first.action();
        close();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close, filtered, open]);

  React.useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => window.clearTimeout(id);
  }, [open]);

  if (!open) return null;

  return (
    <div className="cmdk-overlay" role="dialog" aria-modal="true" aria-label="Command palette">
      <button className="cmdk-backdrop" aria-label="Close" onClick={close}></button>
      <div className="cmdk-panel">
        <div className="cmdk-header">
          <input
            ref={inputRef}
            className="cmdk-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command…"
            aria-label="Search commands"
          />
          <div className="cmdk-hint">Enter to run · Esc to close</div>
        </div>
        <div className="cmdk-list" role="listbox" aria-label="Commands">
          {filtered.length === 0 ? (
            <div className="cmdk-empty">No matches</div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                className="cmdk-item"
                onClick={() => {
                  item.action();
                  close();
                }}
              >
                {item.label}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
