import { useEffect, useRef } from 'react';

interface AdsterraAdProps {
  adKey: string;
}

export function AdsterraAd({ adKey }: AdsterraAdProps) {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const isAdLoaded = useRef(false);

  useEffect(() => {
    // Prevent double loading in development mode
    if (isAdLoaded.current) return;
    isAdLoaded.current = true;

    if (adContainerRef.current) {
      // Create the configuration script
      const configScript = document.createElement('script');
      configScript.type = 'text/javascript';
      configScript.innerHTML = `
        atOptions = {
          'key' : '${adKey}',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `;

      // Create the invoke script
      const invokeScript = document.createElement('script');
      invokeScript.type = 'text/javascript';
      invokeScript.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`;

      // Append both scripts to the container
      adContainerRef.current.appendChild(configScript);
      adContainerRef.current.appendChild(invokeScript);
    }

    // Cleanup function
    return () => {
      if (adContainerRef.current) {
        // Clear the container
        adContainerRef.current.innerHTML = '';
      }
      isAdLoaded.current = false;
    };
  }, [adKey]);

  return (
    <div className="flex justify-center items-center py-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
        <div className="text-center mb-2">
          <span className="text-xs text-gray-400 uppercase tracking-wide">Advertisement</span>
        </div>
        <div ref={adContainerRef} className="flex justify-center items-center min-h-[250px]" />
      </div>
    </div>
  );
}
