import React from 'react';
import { siTesla } from 'simple-icons';

/**
 * Work experience logos are bundled so they never depend on Clearbit or hot-linked URLs.
 * - Tesla: SVG path from simple-icons (same origin as JS bundle).
 * - Other brands: files in /public/experience-logos/ (served with the site).
 */
const BRAND_FILES = {
  amazon: 'amazon.png',
  bell: 'bell.png',
  deloitte: 'deloitte.png',
  openlane: 'openlane.svg',
  serv2u: 'serv2u.svg',
  tutorocean: 'tutorocean.svg',
};

const frameClass =
  'w-10 h-10 flex-shrink-0 rounded-full object-contain border border-slate-300 bg-white p-0.5 overflow-hidden';

export const TimeLineLogo = ({
  brand,
  companyUrl,
  companyName,
  /** Set false to show the mark without linking (e.g. Serv2U). */
  linkable = true,
}) => {
  const wrapperClass = 'w-fit -ml-12 z-50 hidden sm:block';
  const publicUrl = process.env.PUBLIC_URL || '';
  const label = `${companyName} logo`;

  const wrap = (child) =>
    linkable ? (
      <a
        href={companyUrl}
        target="_blank"
        rel="noreferrer"
        className={wrapperClass}
        aria-label={label}
      >
        {child}
      </a>
    ) : (
      <div className={wrapperClass}>{child}</div>
    );

  if (brand === 'tesla') {
    return wrap(
      <span
        className={`inline-flex items-center justify-center ${frameClass}`}
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <title>{siTesla.title}</title>
          <path d={siTesla.path} fill={`#${siTesla.hex}`} />
        </svg>
      </span>
    );
  }

  const file = BRAND_FILES[brand];
  if (!file) {
    return null;
  }

  return wrap(
    <img
      src={`${publicUrl}/experience-logos/${file}`}
      alt={linkable ? '' : label}
      className={frameClass}
      loading="lazy"
      decoding="async"
      width={40}
      height={40}
    />
  );
};

export default TimeLineLogo;
