"use client"

import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy"; // 복사 아이콘
import CheckIcon from '@mui/icons-material/Check';

const CopyCommandButton = ({ command }: { command: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command); // 클립보드에 텍스트 복사
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2초 후 상태 복구
    } catch (error) {
      console.error("Failed to copy command:", error);
    }
  };

  return (
    <div className="relative flex items-center space-x-2">
      <code className="bg-gray-100 px-4 py-2 rounded text-gray-800">
        {command}
      </code>
      <button
        onClick={handleCopy}
        className="p-2 bg-gray-100 hover:bg-gray-300 rounded flex items-center justify-center"
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <CheckIcon /> // 복사 완료 체크 아이콘
        ) : (
          <ContentCopyIcon /> // 기본 복사 아이콘
        )}
      </button>
    </div>
  );
};

export default CopyCommandButton;
