import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronRight } from "lucide-react";
import { useState } from "react";

export function ConsultationCallBtn() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <div className="fixed bottom-8 right-8 z-50 animate-fade-up">
        <Dialog.Trigger asChild>
          <button className="relative flex items-center h-[3.2em] pl-6 pr-14 text-[15px] font-bold uppercase tracking-[0.1em] text-white bg-primary border-2 border-white/20 dark:border-white/10 rounded-2xl overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
              Book Call
            </span>
            <div className="absolute right-1.5 bottom-1.5 h-[calc(100%-12px)] w-[2.8em] bg-accent rounded-xl flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[calc(100%-12px)] group-hover:right-1.5">
              <ChevronRight className="w-5 h-5 text-primary transition-transform duration-500 group-hover:translate-x-1" />
            </div>
          </button>
        </Dialog.Trigger>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] animate-in fade-in duration-300" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-card rounded-2xl overflow-hidden z-[101] shadow-2xl animate-in zoom-in-95 fade-in duration-300 border border-border">
          <div className="relative h-[550px] w-full">
            <Dialog.Close asChild>
              <button 
                className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-background/80 hover:bg-background transition-all border border-border text-foreground/70 hover:text-foreground hover:rotate-90 shadow-sm"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </Dialog.Close>
            
            <iframe
              src="https://cal.com/muhammadnasirpk44"
              title="Schedule a Call"
              className="w-full h-full border-none bg-white"
            ></iframe>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
