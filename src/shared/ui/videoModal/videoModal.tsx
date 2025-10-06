import React from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ open, onClose, videoUrl }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      PaperProps={{
        style: { background: "rgba(0,0,0,0.95)", boxShadow: "none" },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{ position: "absolute", top: 24, right: 24, color: "white", zIndex: 10 }}
      >
        <CloseIcon fontSize="large" />
      </IconButton>
      <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <video
          src={videoUrl}
          controls
          autoPlay
          style={{ maxWidth: "90vw", maxHeight: "80vh", borderRadius: 24 }}
        />
      </div>
    </Dialog>
  );
};

export default VideoModal;
