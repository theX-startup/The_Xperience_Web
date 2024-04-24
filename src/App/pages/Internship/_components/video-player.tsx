import MuxPlayer from "@mux/mux-player-react";
import { useState } from "react";
import { Loader2, Lock } from "lucide-react";

import { cn } from "@/lib/utils";

type Props = {
  playbackId: string;
  title: string;
  isLocked: boolean;
};

export const VideoPlayer = ({
  isLocked,
  playbackId,
  title,
}: Props) => {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="relative aspect-video">
      {!isReady && !isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
          <Loader2 className="h-8 w-8 animate-spin text-secondary" />
        </div>
      )}
      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 flex-col gap-y-2 text-secondary">
          <Lock className="h-8 w-8" />
          <p className="text-sm">This chapter is locked</p>
        </div>
      )}
      {!isLocked && (
        <MuxPlayer
          title={title}
          className={cn(!isReady && "hidden")}
          onCanPlay={() => setIsReady(true)}
          autoPlay
          playbackId={playbackId}
        />
      )}
    </div>
  );
};
