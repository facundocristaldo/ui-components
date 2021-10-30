import React from "react";

interface ICardProps {
  link?: string;
  isLink: boolean;
  className: string;
  title: string;
  subtitle: string;
}
export const Card: React.FC<ICardProps> = ({
  isLink,
  link,
  className,
  title,
  subtitle,
}) => {
  const Wrapper = (children: React.ReactElement) =>
    isLink ? (
      <a href={link} className={className}>
        {children}
      </a>
    ) : (
      <div className={className}>{children}</div>
    );
  return Wrapper(
    <>
      <h2>{title} &rarr;</h2>
      <p>{subtitle}</p>
    </>
  );
};
