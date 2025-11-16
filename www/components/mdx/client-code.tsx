'use client';

import { cn } from '@/lib/utils';
import { Check, Copy } from 'lucide-react';
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useToastContext } from '../providers/toast';
import { Button } from '../ui/button';

interface ClientCodeProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
}

const ClientCode = ({
  code,
  language = 'tsx',
  className,
  showLineNumbers = true,
}: ClientCodeProps) => {
  const [hasCopied, setHasCopied] = useState(false);
  const { setToastMessage } = useToastContext();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setHasCopied(true);

      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    } catch (error) {
      if (error instanceof Error) {
        console.log('error.stack is ', error.stack);
        console.log('error.message is ', error.message);
      }
      setToastMessage('Failed to Copy!');
    }
  };
  return (
    <div
      className={cn(
        'relative h-[350px] overflow-hidden border rounded-md bg-transparent',
        className,
      )}
    >
      <Button
        onClick={handleCopy}
        variant={'outline'}
        size={'sm'}
        className="absolute top-2 right-3 z-10 bg-transparent border hover:bg-transparent transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {hasCopied ? (
          <Check className="h-4 w-4 text-primary" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
      <div className="w-full h-full overflow-auto">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          showLineNumbers={showLineNumbers}
          className=""
          customStyle={{
            borderBottom: '',
            background: 'transparent',
            margin: '0',
          }}
          lineNumberStyle={{
            color: 'hsl(var(--primary))',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ClientCode;
