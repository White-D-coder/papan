'use client';

import React, { useEffect, useState } from 'react';

interface EncryptedTextProps {
  text: string;
  encryptedClassName?: string;
  revealedClassName?: string;
  revealDelayMs?: number;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

export function EncryptedText({
  text,
  encryptedClassName = 'text-stone-400',
  revealedClassName = 'text-white',
  revealDelayMs = 40,
}: EncryptedTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;
    setIsDone(false);
    
    const interval = setInterval(() => {
      if (index <= text.length) {
        const revealed = text.slice(0, index);
        const randoms = Array.from(
          { length: text.length - index },
          () => chars[Math.floor(Math.random() * chars.length)]
        ).join('');

        setDisplayText(revealed + randoms);
        index++;
      } else {
        clearInterval(interval);
        setIsDone(true);
      }
    }, revealDelayMs);

    return () => clearInterval(interval);
  }, [text, revealDelayMs]);

  if (isDone) {
    return <span className={revealedClassName}>{text}</span>;
  }

  return (
    <span className="inline-flex">
      <span className={revealedClassName}>{displayText.slice(0, Math.floor(displayText.length / 2))}</span>
      <span className={encryptedClassName}>{displayText.slice(Math.floor(displayText.length / 2))}</span>
    </span>
  );
}
