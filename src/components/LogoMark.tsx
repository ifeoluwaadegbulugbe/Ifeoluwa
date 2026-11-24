/** IA monogram: a rounded I, an arch and a swoosh that together read as "IA", with a pink sparkle. */
export default function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="20 20 940 620" aria-hidden="true">
      <path fill="#141414" d="M55 128 A85 85 0 0 1 225 128 L225 318 L66 540 C61 547 55 545 55 536 Z" />
      <path fill="#141414" d="M308 250 C 370 152 430 58 530 52 C 590 48 640 78 662 120 L 906 562 C 926 598 906 614 870 614 L 760 614 C 734 614 720 604 709 584 L 548 312 C 522 262 470 230 410 233 C 370 236 336 243 308 250 Z" />
      <path fill="#141414" d="M92 616 C 70 616 62 600 73 584 L 246 330 C 274 292 302 281 336 283 C 420 289 520 368 596 440 C 515 444 462 458 424 506 L 356 594 C 347 608 331 616 302 616 Z" />
      <path fill="#F25CA2" transform="translate(806 146)" d="M0-70 C6-20 18-8 64 0 C18 8 6 20 0 70 C-6 20-18 8-64 0 C-18-8-6-20 0-70Z" />
    </svg>
  );
}
