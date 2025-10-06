"use client";
import React from "react";
import VideoModal from "@/shared/ui/videoModal/VideoModal";
import { VideoButton } from "@/shared/ui/videoButton/videoButton";

interface VideoModalClientProps {
  videoUrl: string;
}

const VideoModalClient: React.FC<VideoModalClientProps> = ({ videoUrl }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <VideoButton onClick={handleOpen} />
      <VideoModal open={open} onClose={handleClose} videoUrl={videoUrl} />
    </>
  );
};

export default VideoModalClient;
