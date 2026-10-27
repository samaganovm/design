'use client';

import { useState } from 'react';
import { TextEffect } from '@/components/motion-primitives/text-effect';
import { TextShimmer } from '@/components/motion-primitives/text-shimmer';
import { TextLoop } from '@/components/motion-primitives/text-loop';
import { AnimatedNumber } from '@/components/motion-primitives/animated-number';
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';

const countries = ['USA', 'UAE', 'Spain', 'Germany', 'UK', 'Canada', 'Japan', 'Korea'];

export function Demo() {
  const [clients, setClients] = useState(1250);

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-10 px-4 py-16">
      <TextEffect per="word" preset="fade-in-blur" as="h1" className="text-4xl font-semibold">
        Motion Primitives demo
      </TextEffect>
      <p className="text-xl">
        Visa support for{' '}
        <TextLoop>
          {countries.slice(0, 4).map((c) => (
            <span key={c} className="font-semibold">{c}</span>
          ))}
        </TextLoop>
      </p>
      <p className="text-3xl font-semibold">
        <AnimatedNumber value={clients} springOptions={{ bounce: 0, duration: 2000 }} />+ clients{' '}
        <button onClick={() => setClients((n) => n + 100)} className="rounded border px-2 text-base">+100</button>
      </p>
      <TextShimmer duration={1.5}>Loading your application…</TextShimmer>
      <InfiniteSlider gap={32} speed={40}>
        {countries.map((c) => (
          <span key={c} className="text-lg text-zinc-500">{c}</span>
        ))}
      </InfiniteSlider>
    </main>
  );
}
