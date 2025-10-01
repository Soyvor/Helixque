// src/components/Masthead.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import "./Masthead.css";

interface NavLink {
  label: string;
  to: string;
}

interface MastheadProps {
  title: string;
  subtitle?: string;
  logoSrc?: string;
  links?: NavLink[];
}

export const Masthead: React.FC<MastheadProps> = ({
  title,
  subtitle,
  logoSrc,
  links = [],
}) => {
  const location = useLocation();

  return (
    <header className="masthead">
      <div className="masthead__inner">
        <div className="masthead__brand">
          {logoSrc && (
            <Link to="/" className="masthead__logo-link">
              <img src={logoSrc} alt={title} className="masthead__logo" />
            </Link>
          )}
          <div className="masthead__titles">
            <h1 className="masthead__title">
              <Link to="/">{title}</Link>
            </h1>
            {subtitle && <p className="masthead__subtitle">{subtitle}</p>}
          </div>
        </div>
        {links.length > 0 && (
          <nav className="masthead__nav">
            <ul className="masthead__nav-list">
              {links.map((link) => (
                <li
                  key={link.to}
                  className={classNames("masthead__nav-item", {
                    "is-active": location.pathname === link.to,
                  })}
                >
                  <Link className="masthead__nav-link" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
